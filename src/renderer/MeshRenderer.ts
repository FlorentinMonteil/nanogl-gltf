import Node from "../elements/Node"
import Mesh from "../elements/Mesh"
import Primitive from "../elements/Primitive"
import GLConfig from 'nanogl-state/config'
import Camera from 'nanogl-camera'
import BaseMaterial from 'nanogl-pbr/BaseMaterial'
import { GLContext } from "nanogl/types"
import Assert from "../lib/assert"
import Program from "nanogl/program"
import IRenderable, { IRenderingContext } from "./IRenderable"
import Bounds from "nanogl-pbr/Bounds"
import SkinDeformer, { SkinAttributeSet } from "../glsl/SkinDeformer"
import Gltf from ".."
import MorphDeformer from "../glsl/MorphDeformer"
import { MorphAttribInfos, MorphAttributeType } from "../glsl/MorphCode"
import { AccessorGlslType } from "../elements/Accessor"




function assertIsNumComps( n : number ) : asserts n is 1|2|3|4 {
  if( n<1 || n>4 ) throw new Error('number is not Component size')
}




export default class MeshRenderer implements IRenderable {

  
  readonly node: Node;
  readonly mesh: Mesh;
  
  materials : BaseMaterial[] = []
  
  glconfig? : GLConfig;

  readonly bounds : Bounds = new Bounds();


  private _skins : SkinDeformer[] = []
  
  constructor( gl : GLContext, node: Node) {
    Assert.isDefined( node.mesh );
    this.node = node;
    this.mesh = node.mesh;
    
    this.setupMaterials( gl );
    this.computeBounds();
  }
  
  /**
   * for each primitives, create a material based on primitive's material pass
   * if skin or morph target are present, deformers are set on the created material
   * TODO: if no deformer, a single material instance can be shared between renderers
   */
  setupMaterials(gl : GLContext) {
    
    for (const primitive of this.mesh.primitives ) {
      const material = primitive.material.createMaterialForPrimitive( gl, this.node, primitive );
      this.configureDeformers( material, primitive );
      this.materials.push( material );
    }

  }

  configureDeformers(material: BaseMaterial, primitive: Primitive) {
    this.configureSkin ( material, primitive );
    this.configureMorph( material, primitive );
  }

  configureMorph(material: BaseMaterial, primitive: Primitive) {

    if( primitive.targets !== null ){

      const morphedAttribs = primitive.targets[0].attributes;
      const morphInfos : MorphAttribInfos[] = [];
      
      for (const morphedattrib of morphedAttribs) {
        
        const miAttributes = primitive.targets.map( (target)=>{
          return target.getSemantic( morphedattrib.semantic ).glslname
        });
        
        const morphInfo :MorphAttribInfos = {
          name : morphedattrib.semantic.toLowerCase(),
          type : morphedattrib.accessor.glslType as MorphAttributeType,
          attributes : miAttributes,
        }
        
        morphInfos.push( morphInfo );
      }
      
      const morphDeformer = new MorphDeformer();
      morphDeformer.morphInfos = morphInfos;
      
      if( this.node.weights )
        morphDeformer.weights = this.node.weights 
        else if( this.mesh.weights )
        morphDeformer.weights = this.mesh.weights 

      material.inputs.add( morphDeformer );

    }
    
  }

  configureSkin(material: BaseMaterial, primitive: Primitive) {
    
    if( this.node.skin ){
      
      const skinDeformer = new SkinDeformer()
      skinDeformer.numJoints = this.node.skin.joints.length

      const attributeSet : SkinAttributeSet[] = [];
      
      let setIndex = 0
      while( true ){

        const wsem = 'WEIGHTS_'+setIndex;
        const jsem = 'JOINTS_' +setIndex;
        const weights = primitive.attributes.getSemantic( wsem );
        const joints  = primitive.attributes.getSemantic( jsem );
        
        if( (weights === null) !== (joints === null) ){
          throw new Error('Skin attributes inconsistency')
        }

        if( weights === null ) break;
        
        if( weights.accessor.numComps !== joints.accessor.numComps){
          throw new Error('weight and joints attribute dont have the same size')
        }

        const numComponents = weights.accessor.numComps;
        assertIsNumComps( numComponents );

        attributeSet.push({
          weightsAttrib : weights.glslname,
          jointsAttrib  : joints .glslname,
          numComponents
        })
        setIndex++;
      }

      skinDeformer.setAttributeSet( attributeSet );
      // add skin deformer
      //material.setSkin ...
      material.inputs.add( skinDeformer );
      this._skins.push( skinDeformer );
    }
    
    if( this.node.weights ){
      // add morph target deformer
      //primitive.targets[0]
    }

  }

  computeBounds() {
    this.bounds.copyFrom( this.mesh.primitives[0].bounds )
    for (const primitive of this.mesh.primitives ) {
      Bounds.union( this.bounds, this.bounds, primitive.bounds );
    }
  }

  

  render( context:IRenderingContext, camera:Camera, mask:number, passId : string,  glconfig?:GLConfig ) : void {

    const glstate = context.glstate;

    const primitives = this.mesh.primitives;
    
    // TODO: move this in pre render? 
    for (const skin of this._skins) {
      this.node.skin.computeJoints( this.node, skin.jointMatrices );
    }


    for (let i = 0; i < primitives.length; i++) {

      const primitive = primitives[i];
      const mat:BaseMaterial = this.materials[i];
      
      if ( !mat.hasPass( passId ) || (mat.mask & mask) === 0)  continue;
      
      const passInstance = mat.getPass( passId );
      
      if ((passInstance.pass.mask & mask) === 0) continue;

      passInstance.prepare( this.node, camera )


      // push configs
      // -------------


      glstate.push( passInstance.pass.glconfig );
      mat.glconfig  && glstate.push(mat.glconfig);
      this.glconfig && glstate.push(this.glconfig);
      glconfig      && glstate.push(glconfig);
      
      glstate.apply()
      
      // render
      // ----------
      this.drawCall(camera, passInstance.getProgram(), primitive);
      
      // pop configs
      // -------------
      
      glstate.pop();
      mat.glconfig  && glstate.pop();
      this.glconfig && glstate.pop();
      glconfig      && glstate.pop();

    }

  }


  drawCall( camera:Camera, prg:Program, sub:Primitive ) {
    sub.bindVao( prg );
    sub.render();
    sub.unbindVao();
  }


}