/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import hand from './hand.glb';
import { useGLTF } from '@react-three/drei';
export default function Model(props) {
  const { nodes } = useGLTF(hand);
  return [{type:'raw', geometry:nodes.hand.geometry, material: nodes.hand.material}]
  
}
useGLTF.preload(hand)