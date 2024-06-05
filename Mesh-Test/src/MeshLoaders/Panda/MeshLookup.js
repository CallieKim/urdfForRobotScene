import Finger from "./MeshLoaders/Panda/visual/finger.js";
import Hand from "./MeshLoaders/Panda/visual/hand.js";
import Link0 from "./MeshLoaders/Panda/visual/link0.js";
import Link1 from "./MeshLoaders/Panda/visual/link1.js";
import Link2 from "./MeshLoaders/Panda/visual/link2.js";
import Link3 from "./MeshLoaders/Panda/visual/link3.js";
import Link4 from "./MeshLoaders/Panda/visual/link4.js";
import Link5 from "./MeshLoaders/Panda/visual/link5.js";
import Link6 from "./MeshLoaders/Panda/visual/link6.js";
import Link7 from "./MeshLoaders/Panda/visual/link7.js";

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