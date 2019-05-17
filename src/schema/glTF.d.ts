/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type DataGlTFId = number;
/**
 * Image data used to create a texture. Image can be referenced by URI or `bufferView` index. `mimeType` is required in the latter case.
 */
export type Data_Image =
  | {
      [k: string]: any;
    }
  | {
      [k: string]: any;
    };
export type Data_MaterialNormalTextureInfo = Data_TextureInfo;
export type Data_MaterialOcclusionTextureInfo = Data_TextureInfo;

/**
 * The root object for a glTF asset.
 */
export interface DataGlTF {
  /**
   * Names of glTF extensions used somewhere in this asset.
   */
  extensionsUsed?: string[];
  /**
   * Names of glTF extensions required to properly load this asset.
   */
  extensionsRequired?: string[];
  /**
   * An array of accessors.
   */
  accessors?: Data_Accessor[];
  /**
   * An array of keyframe animations.
   */
  animations?: Data_Animation[];
  /**
   * Metadata about the glTF asset.
   */
  asset: Data_Asset;
  /**
   * An array of buffers.
   */
  buffers?: Data_Buffer[];
  /**
   * An array of bufferViews.
   */
  bufferViews?: Data_BufferView[];
  /**
   * An array of cameras.
   */
  cameras?: Data_Camera[];
  /**
   * An array of images.
   */
  images?: Data_Image[];
  /**
   * An array of materials.
   */
  materials?: Data_Material[];
  /**
   * An array of meshes.
   */
  meshes?: Data_Mesh[];
  /**
   * An array of nodes.
   */
  nodes?: Data_Node[];
  /**
   * An array of samplers.
   */
  samplers?: Data_Sampler[];
  /**
   * The index of the default scene.
   */
  scene?: DataGlTFId;
  /**
   * An array of scenes.
   */
  scenes?: Data_Scene[];
  /**
   * An array of skins.
   */
  skins?: Data_Skin[];
  /**
   * An array of textures.
   */
  textures?: Data_Texture[];
  extensions?: any;
  extras?: any;
  [k: string]: any;
}
/**
 * A typed view into a bufferView.  A bufferView contains raw binary data.  An accessor provides a typed view into a bufferView or a subset of a bufferView similar to how WebGL's `vertexAttribPointer()` defines an attribute in a buffer.
 */
export interface Data_Accessor {
  /**
   * The index of the bufferView.
   */
  bufferView?: DataGlTFId;
  /**
   * The offset relative to the start of the bufferView in bytes.
   */
  byteOffset?: number;
  /**
   * The datatype of components in the attribute.
   */
  componentType: 5120 | 5121 | 5122 | 5123 | 5125 | 5126 | number;
  /**
   * Specifies whether integer data values should be normalized.
   */
  normalized?: boolean;
  /**
   * The number of attributes referenced by this accessor.
   */
  count: number;
  /**
   * Specifies if the attribute is a scalar, vector, or matrix.
   */
  type: "SCALAR" | "VEC2" | "VEC3" | "VEC4" | "MAT2" | "MAT3" | "MAT4" | string;
  /**
   * Maximum value of each component in this attribute.
   */
  max?: number[];
  /**
   * Minimum value of each component in this attribute.
   */
  min?: number[];
  /**
   * Sparse storage of attributes that deviate from their initialization value.
   */
  sparse?: Data_AccessorSparse;
  name?: any;
  extensions?: any;
  extras?: any;
  [k: string]: any;
}
/**
 * Sparse storage of attributes that deviate from their initialization value.
 */
export interface Data_AccessorSparse {
  /**
   * Number of entries stored in the sparse array.
   */
  count: number;
  /**
   * Index array of size `count` that points to those accessor attributes that deviate from their initialization value. Indices must strictly increase.
   */
  indices: Data_AccessorSparseIndices;
  /**
   * Array of size `count` times number of components, storing the displaced accessor attributes pointed by `indices`. Substituted values must have the same `componentType` and number of components as the base accessor.
   */
  values: Data_AccessorSparseValues;
  extensions?: any;
  extras?: any;
  [k: string]: any;
}
/**
 * Indices of those attributes that deviate from their initialization value.
 */
export interface Data_AccessorSparseIndices {
  /**
   * The index of the bufferView with sparse indices. Referenced bufferView can't have ARRAY_BUFFER or ELEMENT_ARRAY_BUFFER target.
   */
  bufferView: DataGlTFId;
  /**
   * The offset relative to the start of the bufferView in bytes. Must be aligned.
   */
  byteOffset?: number;
  /**
   * The indices data type.
   */
  componentType: 5121 | 5123 | 5125 | number;
  extensions?: any;
  extras?: any;
  [k: string]: any;
}
/**
 * Array of size `accessor.sparse.count` times number of components storing the displaced accessor attributes pointed by `accessor.sparse.indices`.
 */
export interface Data_AccessorSparseValues {
  /**
   * The index of the bufferView with sparse values. Referenced bufferView can't have ARRAY_BUFFER or ELEMENT_ARRAY_BUFFER target.
   */
  bufferView: DataGlTFId;
  /**
   * The offset relative to the start of the bufferView in bytes. Must be aligned.
   */
  byteOffset?: number;
  extensions?: any;
  extras?: any;
  [k: string]: any;
}
/**
 * A keyframe animation.
 */
export interface Data_Animation {
  /**
   * An array of channels, each of which targets an animation's sampler at a node's property. Different channels of the same animation can't have equal targets.
   */
  channels: Data_AnimationChannel[];
  /**
   * An array of samplers that combines input and output accessors with an interpolation algorithm to define a keyframe graph (but not its target).
   */
  samplers: Data_AnimationSampler[];
  name?: any;
  extensions?: any;
  extras?: any;
  [k: string]: any;
}
/**
 * Targets an animation's sampler at a node's property.
 */
export interface Data_AnimationChannel {
  /**
   * The index of a sampler in this animation used to compute the value for the target.
   */
  sampler: DataGlTFId;
  /**
   * The index of the node and TRS property to target.
   */
  target: Data_AnimationChannelTarget;
  extensions?: any;
  extras?: any;
  [k: string]: any;
}
/**
 * The index of the node and TRS property that an animation channel targets.
 */
export interface Data_AnimationChannelTarget {
  /**
   * The index of the node to target.
   */
  node?: DataGlTFId;
  /**
   * The name of the node's TRS property to modify, or the "weights" of the Morph Targets it instantiates. For the "translation" property, the values that are provided by the sampler are the translation along the x, y, and z axes. For the "rotation" property, the values are a quaternion in the order (x, y, z, w), where w is the scalar. For the "scale" property, the values are the scaling factors along the x, y, and z axes.
   */
  path: "translation" | "rotation" | "scale" | "weights" | string;
  extensions?: any;
  extras?: any;
  [k: string]: any;
}
/**
 * Combines input and output accessors with an interpolation algorithm to define a keyframe graph (but not its target).
 */
export interface Data_AnimationSampler {
  /**
   * The index of an accessor containing keyframe input values, e.g., time.
   */
  input: DataGlTFId;
  /**
   * Interpolation algorithm.
   */
  interpolation?: "LINEAR" | "STEP" | "CUBICSPLINE" | string;
  /**
   * The index of an accessor, containing keyframe output values.
   */
  output: DataGlTFId;
  extensions?: any;
  extras?: any;
  [k: string]: any;
}
/**
 * Metadata about the glTF asset.
 */
export interface Data_Asset {
  /**
   * A copyright message suitable for display to credit the content creator.
   */
  copyright?: string;
  /**
   * Tool that generated this glTF model.  Useful for debugging.
   */
  generator?: string;
  /**
   * The glTF version that this asset targets.
   */
  version: string;
  /**
   * The minimum glTF version that this asset targets.
   */
  minVersion?: string;
  extensions?: any;
  extras?: any;
  [k: string]: any;
}
/**
 * A buffer points to binary geometry, animation, or skins.
 */
export interface Data_Buffer {
  /**
   * The uri of the buffer.
   */
  uri?: string;
  /**
   * The length of the buffer in bytes.
   */
  byteLength: number;
  name?: any;
  extensions?: any;
  extras?: any;
  [k: string]: any;
}
/**
 * A view into a buffer generally representing a subset of the buffer.
 */
export interface Data_BufferView {
  /**
   * The index of the buffer.
   */
  buffer: DataGlTFId;
  /**
   * The offset into the buffer in bytes.
   */
  byteOffset?: number;
  /**
   * The total byte length of the buffer view.
   */
  byteLength: number;
  /**
   * The stride, in bytes.
   */
  byteStride?: number;
  /**
   * The target that the GPU buffer should be bound to.
   */
  target?: 34962 | 34963 | number;
  name?: any;
  extensions?: any;
  extras?: any;
  [k: string]: any;
}
/**
 * A camera's projection.  A node can reference a camera to apply a transform to place the camera in the scene.
 */
export interface Data_Camera {
  /**
   * An orthographic camera containing properties to create an orthographic projection matrix.
   */
  orthographic?: Data_CameraOrthographic;
  /**
   * A perspective camera containing properties to create a perspective projection matrix.
   */
  perspective?: Data_CameraPerspective;
  /**
   * Specifies if the camera uses a perspective or orthographic projection.
   */
  type: "perspective" | "orthographic" | string;
  name?: any;
  extensions?: any;
  extras?: any;
  [k: string]: any;
}
/**
 * An orthographic camera containing properties to create an orthographic projection matrix.
 */
export interface Data_CameraOrthographic {
  /**
   * The floating-point horizontal magnification of the view. Must not be zero.
   */
  xmag: number;
  /**
   * The floating-point vertical magnification of the view. Must not be zero.
   */
  ymag: number;
  /**
   * The floating-point distance to the far clipping plane. `zfar` must be greater than `znear`.
   */
  zfar: number;
  /**
   * The floating-point distance to the near clipping plane.
   */
  znear: number;
  extensions?: any;
  extras?: any;
  [k: string]: any;
}
/**
 * A perspective camera containing properties to create a perspective projection matrix.
 */
export interface Data_CameraPerspective {
  /**
   * The floating-point aspect ratio of the field of view.
   */
  aspectRatio?: number;
  /**
   * The floating-point vertical field of view in radians.
   */
  yfov: number;
  /**
   * The floating-point distance to the far clipping plane.
   */
  zfar?: number;
  /**
   * The floating-point distance to the near clipping plane.
   */
  znear: number;
  extensions?: any;
  extras?: any;
  [k: string]: any;
}
/**
 * The material appearance of a primitive.
 */
export interface Data_Material {
  name?: any;
  extensions?: any;
  extras?: any;
  /**
   * A set of parameter values that are used to define the metallic-roughness material model from Physically-Based Rendering (PBR) methodology. When not specified, all the default values of `pbrMetallicRoughness` apply.
   */
  pbrMetallicRoughness?: Data_MaterialPBRMetallicRoughness;
  /**
   * The normal map texture.
   */
  normalTexture?: Data_MaterialNormalTextureInfo;
  /**
   * The occlusion map texture.
   */
  occlusionTexture?: Data_MaterialOcclusionTextureInfo;
  /**
   * The emissive map texture.
   */
  emissiveTexture?: Data_TextureInfo;
  /**
   * The emissive color of the material.
   */
  emissiveFactor?: number[];
  /**
   * The alpha rendering mode of the material.
   */
  alphaMode?: "OPAQUE" | "MASK" | "BLEND" | string;
  /**
   * The alpha cutoff value of the material.
   */
  alphaCutoff?: number;
  /**
   * Specifies whether the material is double sided.
   */
  doubleSided?: boolean;
  [k: string]: any;
}
/**
 * A set of parameter values that are used to define the metallic-roughness material model from Physically-Based Rendering (PBR) methodology.
 */
export interface Data_MaterialPBRMetallicRoughness {
  /**
   * The material's base color factor.
   */
  baseColorFactor?: number[];
  /**
   * The base color texture.
   */
  baseColorTexture?: Data_TextureInfo;
  /**
   * The metalness of the material.
   */
  metallicFactor?: number;
  /**
   * The roughness of the material.
   */
  roughnessFactor?: number;
  /**
   * The metallic-roughness texture.
   */
  metallicRoughnessTexture?: Data_TextureInfo;
  extensions?: any;
  extras?: any;
  [k: string]: any;
}
/**
 * Reference to a texture.
 */
export interface Data_TextureInfo {
  /**
   * The index of the texture.
   */
  index: DataGlTFId;
  /**
   * The set index of texture's TEXCOORD attribute used for texture coordinate mapping.
   */
  texCoord?: number;
  extensions?: any;
  extras?: any;
  [k: string]: any;
}
/**
 * A set of primitives to be rendered.  A node can contain one mesh.  A node's transform places the mesh in the scene.
 */
export interface Data_Mesh {
  /**
   * An array of primitives, each defining geometry to be rendered with a material.
   */
  primitives: Data_MeshPrimitive[];
  /**
   * Array of weights to be applied to the Morph Targets.
   */
  weights?: number[];
  name?: any;
  extensions?: any;
  extras?: any;
  [k: string]: any;
}
/**
 * Geometry to be rendered with the given material.
 */
export interface Data_MeshPrimitive {
  /**
   * A dictionary object, where each key corresponds to mesh attribute semantic and each value is the index of the accessor containing attribute's data.
   */
  attributes: {
    [k: string]: DataGlTFId;
  };
  /**
   * The index of the accessor that contains the indices.
   */
  indices?: DataGlTFId;
  /**
   * The index of the material to apply to this primitive when rendering.
   */
  material?: DataGlTFId;
  /**
   * The type of primitives to render.
   */
  mode?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | number;
  /**
   * An array of Morph Targets, each  Morph Target is a dictionary mapping attributes (only `POSITION`, `NORMAL`, and `TANGENT` supported) to their deviations in the Morph Target.
   */
  targets?: {
    [k: string]: DataGlTFId;
  }[];
  extensions?: any;
  extras?: any;
  [k: string]: any;
}
/**
 * A node in the node hierarchy.  When the node contains `skin`, all `mesh.primitives` must contain `JOINTS_0` and `WEIGHTS_0` attributes.  A node can have either a `matrix` or any combination of `translation`/`rotation`/`scale` (TRS) properties. TRS properties are converted to matrices and postmultiplied in the `T * R * S` order to compose the transformation matrix; first the scale is applied to the vertices, then the rotation, and then the translation. If none are provided, the transform is the identity. When a node is targeted for animation (referenced by an animation.channel.target), only TRS properties may be present; `matrix` will not be present.
 */
export interface Data_Node {
  /**
   * The index of the camera referenced by this node.
   */
  camera?: DataGlTFId;
  /**
   * The indices of this node's children.
   */
  children?: DataGlTFId[];
  /**
   * The index of the skin referenced by this node.
   */
  skin?: DataGlTFId;
  /**
   * A floating-point 4x4 transformation matrix stored in column-major order.
   */
  matrix?: number[];
  /**
   * The index of the mesh in this node.
   */
  mesh?: DataGlTFId;
  /**
   * The node's unit quaternion rotation in the order (x, y, z, w), where w is the scalar.
   */
  rotation?: number[];
  /**
   * The node's non-uniform scale, given as the scaling factors along the x, y, and z axes.
   */
  scale?: number[];
  /**
   * The node's translation along the x, y, and z axes.
   */
  translation?: number[];
  /**
   * The weights of the instantiated Morph Target. Number of elements must match number of Morph Targets of used mesh.
   */
  weights?: number[];
  name?: any;
  extensions?: any;
  extras?: any;
  [k: string]: any;
}
/**
 * Texture sampler properties for filtering and wrapping modes.
 */
export interface Data_Sampler {
  /**
   * Magnification filter.
   */
  magFilter?: 9728 | 9729 | number;
  /**
   * Minification filter.
   */
  minFilter?: 9728 | 9729 | 9984 | 9985 | 9986 | 9987 | number;
  /**
   * s wrapping mode.
   */
  wrapS?: 33071 | 33648 | 10497 | number;
  /**
   * t wrapping mode.
   */
  wrapT?: 33071 | 33648 | 10497 | number;
  name?: any;
  extensions?: any;
  extras?: any;
  [k: string]: any;
}
/**
 * The root nodes of a scene.
 */
export interface Data_Scene {
  /**
   * The indices of each root node.
   */
  nodes?: DataGlTFId[];
  name?: any;
  extensions?: any;
  extras?: any;
  [k: string]: any;
}
/**
 * Joints and matrices defining a skin.
 */
export interface Data_Skin {
  /**
   * The index of the accessor containing the floating-point 4x4 inverse-bind matrices.  The default is that each matrix is a 4x4 identity matrix, which implies that inverse-bind matrices were pre-applied.
   */
  inverseBindMatrices?: DataGlTFId;
  /**
   * The index of the node used as a skeleton root.
   */
  skeleton?: DataGlTFId;
  /**
   * Indices of skeleton nodes, used as joints in this skin.
   */
  joints: DataGlTFId[];
  name?: any;
  extensions?: any;
  extras?: any;
  [k: string]: any;
}
/**
 * A texture and its sampler.
 */
export interface Data_Texture {
  /**
   * The index of the sampler used by this texture. When undefined, a sampler with repeat wrapping and auto filtering should be used.
   */
  sampler?: DataGlTFId;
  /**
   * The index of the image used by this texture. When undefined, it is expected that an extension or other mechanism will supply an alternate texture source, otherwise behavior is undefined.
   */
  source?: DataGlTFId;
  name?: any;
  extensions?: any;
  extras?: any;
  [k: string]: any;
}