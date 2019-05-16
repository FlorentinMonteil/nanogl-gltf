//@flow

import { ElementType } from '../consts';
import BaseElement from './BaseElement';
import {loadBytes} from '../lib/net';

import Gltf from '../index'


export default class Buffer extends BaseElement {

  static TYPE : ElementType = ElementType.BUFFER;


  byteLength  :number       ;
  uri         : string      ;
  _bytes      : ArrayBuffer;
  _byteOffset :number       ;

  constructor( gltf : Gltf, data : any ){
    super( gltf, data );

    this.byteLength = data.byteLength;
    this.uri        = data.uri;
    this._bytes     = null;

    
    this._byteOffset=0;

  }

  // load(){
  //   // embed glb buffers
  //   if( this.uri === undefined ) 
  //     return ( this._bytes );

  //   const uri = this.gltf.resolveUri( this.uri );
  //   return loadBytes( uri )
  //     .then( b=>this._bytes = b );
  // }

  

}
