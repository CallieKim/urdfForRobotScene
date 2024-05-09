/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import link_arm_l1 from './link_arm_l1.glb';
import { useGLTF } from '@react-three/drei';
export default function Model(props) {
  const { nodes } = useGLTF(link_arm_l1);
  return [{type:'raw', geometry:nodes.link_arm_l1.geometry, material: nodes.link_arm_l1.material}]
  
}
useGLTF.preload(link_arm_l1)