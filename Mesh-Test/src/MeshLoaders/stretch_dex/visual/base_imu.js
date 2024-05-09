/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import base_imu from './base_imu.glb';
import { useGLTF } from '@react-three/drei';
export default function Model(props) {
  const { nodes } = useGLTF(base_imu);
  return [{type:'raw', geometry:nodes.base_imu.geometry, material: nodes.base_imu.material}]
  
}
useGLTF.preload(base_imu)