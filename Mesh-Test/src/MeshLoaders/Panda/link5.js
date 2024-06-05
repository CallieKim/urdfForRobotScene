/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/


import { useGLTF } from '@react-three/drei'
import Link5 from '../../Meshes/Panda/link5.glb'

export default function Model(props) {

  const { nodes, materials } = useGLTF(Link5)
  return [{type:'raw', geometry:nodes.node0.geometry,
   material:materials.Part__Feature_002_004_003, position:[0, -0.26, 0]},
   {type:'raw', geometry:nodes.node1.geometry,
    material:materials.Shell_001_001_003, position:[0, -0.26, 0]},
   {type:'raw',geometry:nodes.node2.geometry,
   material:materials.Shell001_001_001_003, position:[0, -0.26, 0]}]




}

useGLTF.preload(Link5)
