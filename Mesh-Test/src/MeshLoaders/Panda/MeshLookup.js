import Finger from './finger.js';
import Hand from './hand.js';
import Link0 from './link0.js';
import Link1 from './link1.js';
import Link2 from './link2.js';
import Link3 from './link3.js';
import Link4 from './link4.js';
import Link5 from './link5.js';
import Link6 from './link6.js';
import Link7 from './link7.js';

const MeshLookupTable = {
    "package://Panda/meshes/collision/link0.obj": Link0,
    "package://Panda/meshes/collision/link1.obj": Link1,
    "package://Panda/meshes/collision/link2.obj": Link2,
    "package://Panda/meshes/collision/link3.obj": Link3,
    "package://Panda/meshes/collision/link4.obj": Link4,
    "package://Panda/meshes/collision/link5.obj": Link5,
    "package://Panda/meshes/collision/link6.obj": Link6,
    "package://Panda/meshes/collision/link7.obj": Link7,
    "package://Panda/meshes/collision/hand.obj": Hand,
    "package://Panda/meshes/collision/finger.obj": Finger
  };
  
  const MeshLookup = (path) => MeshLookupTable[path]();
  export { MeshLookupTable, MeshLookup };