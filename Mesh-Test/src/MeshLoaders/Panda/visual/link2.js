/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import link2 from './link2.glb';
import { useGLTF } from '@react-three/drei';
export default function Model(props) {
  const { nodes, materials } = useGLTF(link2);
  return [{type:'raw',geometry:nodes.node0.geometry, material:materials.Part__Feature024}]




}
useGLTF.preload(link2)