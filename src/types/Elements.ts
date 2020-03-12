import Accessor             from "../elements/Accessor"             ;
import Asset                from "../elements/Asset";
import Buffer               from "../elements/Buffer"               ;
import BufferView           from "../elements/BufferView"           ;
import Camera               from "../elements/Camera"               ;
import Material             from "../elements/Material"             ;
import Mesh                 from "../elements/Mesh"                 ;
import Primitive            from "../elements/Primitive"            ;
import Skin                 from "../elements/Skin"                 ;
import AnimationChannel     from "../elements/AnimationChannel"     ;
import AnimationSampler     from "../elements/AnimationSampler"     ;
import NormalTextureInfo    from "../elements/NormalTextureInfo"    ;
import OcclusionTextureInfo from "../elements/OcclusionTextureInfo" ;
import PbrMetallicRoughness from "../elements/PbrMetallicRoughness" ;
import Sampler              from "../elements/Sampler"              ;
import Scene                from "../elements/Scene"                ;
import Texture              from "../elements/Texture"              ;
import TextureInfo          from "../elements/TextureInfo"          ;
import Image                from "../elements/Image";

import Gltf2 from "./Gltf2";
import GltfTypes from "./GltfTypes";


export type AnyElement = 
  Asset               |
  Buffer               |
  BufferView           |
  AnimationChannel     |
  AnimationSampler     |
  Accessor             |
  Animation            |
  Camera               |
  Image                |
  Material             |
  Mesh                 |
  Node                 |
  NormalTextureInfo    |
  OcclusionTextureInfo |
  PbrMetallicRoughness |
  Primitive            |
  Sampler              |
  Scene                |
  Skin                 |
  Texture              |
  TextureInfo         ;




export type ElementOfType<T extends GltfTypes, E extends AnyElement = AnyElement> = E extends { gltftype : T } ? E : never;
export type PropertyOfType<T extends GltfTypes, E extends Gltf2.Property = Gltf2.Property> = E extends { gltftype : T } ? E : never;


export type PropertyType<T extends Gltf2.Property> = T extends { gltftype : infer E } ? E : never;
export type ElementType<T extends AnyElement> = T extends { gltftype : infer E } ? E : never;


