//---------------------------------------------- Panda
// import Finger from './MeshLoaders/Panda/finger';
// import Hand from './MeshLoaders/Panda/hand';
// import Link0 from './MeshLoaders/Panda/link0';
// import Link1 from './MeshLoaders/Panda/link1';
// import Link2 from './MeshLoaders/Panda/link2';
// import Link3 from './MeshLoaders/Panda/link3';
// import Link4 from './MeshLoaders/Panda/link4';
// import Link5 from './MeshLoaders/Panda/link5';
// import Link6 from './MeshLoaders/Panda/link6';
// import Link7 from './MeshLoaders/Panda/link7';
import Finger from "./MeshLoaders/Panda/finger.js";
import Hand from "./MeshLoaders/Panda/hand.js";
import Link0 from "./MeshLoaders/Panda/link0.js";
import Link1 from "./MeshLoaders/Panda/link1.js";
import Link2 from "./MeshLoaders/Panda/link2.js";
import Link3 from "./MeshLoaders/Panda/link3.js";
import Link4 from "./MeshLoaders/Panda/link4.js";
import Link5 from "./MeshLoaders/Panda/link5.js";
import Link6 from "./MeshLoaders/Panda/link6.js";
import Link7 from "./MeshLoaders/Panda/link7.js";
//--------------------------------------------------Ur3
import Ur3Base from "./MeshLoaders/Ur3/visual/base";
import Ur3Forearm from "./MeshLoaders/Ur3/visual/forearm";
import Ur3Shoulder from "./MeshLoaders/Ur3/visual/shoulder";
import Ur3Upperarm from "./MeshLoaders/Ur3/visual/upperarm";
import Ur3Wrist1 from "./MeshLoaders/Ur3/visual/wrist1";
import Ur3Wrist2 from "./MeshLoaders/Ur3/visual/wrist2";
import Ur3Wrist3 from "./MeshLoaders/Ur3/visual/wrist3";
import Ur3BaseCollision from "./MeshLoaders/Ur3/collision/base";
import Ur3ForearmCollision from "./MeshLoaders/Ur3/collision/forearm";
import Ur3ShoulderCollision from "./MeshLoaders/Ur3/collision/shoulder";
import Ur3UpperarmCollision from "./MeshLoaders/Ur3/collision/upperarm";
import Ur3Wrist1Collision from "./MeshLoaders/Ur3/collision/wrist1";
import Ur3Wrist2Collision from "./MeshLoaders/Ur3/collision/wrist2";
import Ur3Wrist3Collision from "./MeshLoaders/Ur3/collision/wrist3";
//---------------------------------------------- Robotiq2f85
import RobotiqCollision85BaseLink from
'./MeshLoaders/Robotiq2f85/collision/robotiq_arg2f_85_base_link';
import RobotiqCollision85InnerFinger from
'./MeshLoaders/Robotiq2f85/collision/robotiq_arg2f_85_inner_finger';
import RobotiqCollision85InnerKnuckle from
'./MeshLoaders/Robotiq2f85/collision/robotiq_arg2f_85_inner_knuckle';
import RobotiqCollision85OuterFinger from
'./MeshLoaders/Robotiq2f85/collision/robotiq_arg2f_85_outer_finger';
import RobotiqCollision85OuterKnuckle from
'./MeshLoaders/Robotiq2f85/collision/robotiq_arg2f_85_outer_knuckle';
import RobotiqCollisionBaseLink from
'./MeshLoaders/Robotiq2f85/collision/robotiq_arg2f_base_link';
import RobotiqVisual85BaseLink from
'./MeshLoaders/Robotiq2f85/visual/robotiq_arg2f_85_base_link';
import RobotiqVisual85InnerFinger from
'./MeshLoaders/Robotiq2f85/visual/robotiq_arg2f_85_inner_finger';
import RobotiqVisual85InnerKnuckle from
'./MeshLoaders/Robotiq2f85/visual/robotiq_arg2f_85_inner_knuckle';
import RobotiqVisual85OuterFinger from
'./MeshLoaders/Robotiq2f85/visual/robotiq_arg2f_85_outer_finger';
import RobotiqVisual85OuterKnuckle from
'./MeshLoaders/Robotiq2f85/visual/robotiq_arg2f_85_outer_knuckle';
import RobotiqVisual85Pad from
'./MeshLoaders/Robotiq2f85/visual/robotiq_arg2f_85_pad';
import RobotiqVisualGripper from
'./MeshLoaders/Robotiq2f85/visual/robotiq_gripper_coupling';
//---------------------------------------------- RobotiqWisc
import RobotiqWiscVisualBaseLink from 
'./MeshLoaders/RobotiqWisc/visual/robotiq_85_base_link';
import RobotiqWiscVisualKnuckleLink from 
'./MeshLoaders/RobotiqWisc/visual/robotiq_85_knuckle_link';
import RobotiqWiscVisualFingerLink from 
'./MeshLoaders/RobotiqWisc/visual/robotiq_85_finger_link';
import RobotiqWiscVisualFingerTipLink from 
'./MeshLoaders/RobotiqWisc/visual/robotiq_85_finger_tip_link';
import RobotiqWiscVisualInnerKnuckleLink from 
'./MeshLoaders/RobotiqWisc/visual/robotiq_85_inner_knuckle_link';
import RobotiqWiscCollisionBaseLink from 
'./MeshLoaders/RobotiqWisc/collision/robotiq_85_base_link';
import RobotiqWiscCollisionKnuckleLink from 
'./MeshLoaders/RobotiqWisc/collision/robotiq_85_knuckle_link';
import RobotiqWiscCollisionFingerLink from 
'./MeshLoaders/RobotiqWisc/collision/robotiq_85_finger_link';
import RobotiqWiscCollisionFingerTipLink from 
'./MeshLoaders/RobotiqWisc/collision/robotiq_85_finger_tip_link';
import RobotiqWiscCollisionInnerKnuckleLink from 
'./MeshLoaders/RobotiqWisc/collision/robotiq_85_inner_knuckle_link';


// import { Sphere, Cube, Cylinder, Arrow } from './Util/StandardMeshes';

const MeshLookupTable = {
  //------------------------------------------------------Panda
  // 'package://franka_ros/franka_description/meshes/visual/finger.dae': Finger,
  // 'package://franka_ros/franka_description/meshes/visual/hand.dae': Hand,
  // 'package://franka_ros/franka_description/meshes/visual/link0.dae': Link0,
  // 'package://franka_ros/franka_description/meshes/visual/link1.dae': Link1, // missing
  // 'package://franka_ros/franka_description/meshes/visual/link2.dae': Link2,
  // 'package://franka_ros/franka_description/meshes/visual/link3.dae': Link3,
  // 'package://franka_ros/franka_description/meshes/visual/link4.dae': Link4,
  // 'package://franka_ros/franka_description/meshes/visual/link5.dae': Link5,
  // 'package://franka_ros/franka_description/meshes/visual/link6.dae': Link6,
  // 'package://franka_ros/franka_description/meshes/visual/link7.dae': Link7,
  "package://Panda/meshes/collision/link0.obj": Link0,
  "package://Panda/meshes/collision/link1.obj": Link1,
  "package://Panda/meshes/collision/link2.obj": Link2,
  "package://Panda/meshes/collision/link3.obj": Link3,
  "package://Panda/meshes/collision/link4.obj": Link4,
  "package://Panda/meshes/collision/link5.obj": Link5,
  "package://Panda/meshes/collision/link6.obj": Link6,
  "package://Panda/meshes/collision/link7.obj": Link7,
  "package://Panda/meshes/collision/hand.obj": Hand,
  "package://Panda/meshes/collision/finger.obj": Finger,
  //---------------------------------------------------------------------Ur3
  "package://ur_description/meshes/ur3/visual/base.dae": Ur3Base,
  "package://ur_description/meshes/ur3/visual/forearm.dae": Ur3Forearm,
  "package://ur_description/meshes/ur3/visual/shoulder.dae": Ur3Shoulder,
  "package://ur_description/meshes/ur3/visual/upperarm.dae": Ur3Upperarm,
  "package://ur_description/meshes/ur3/visual/wrist1.dae": Ur3Wrist1,
  "package://ur_description/meshes/ur3/visual/wrist2.dae": Ur3Wrist2,
  "package://ur_description/meshes/ur3/visual/wrist3.dae": Ur3Wrist3,
  "package://ur_description/meshes/ur3/collision/base.stl": Ur3BaseCollision,
  "package://ur_description/meshes/ur3/collision/forearm.stl":
    Ur3ForearmCollision,
  "package://ur_description/meshes/ur3/collision/shoulder.stl":
    Ur3ShoulderCollision,
  "package://ur_description/meshes/ur3/collision/upperarm.stl":
    Ur3UpperarmCollision,
  "package://ur_description/meshes/ur3/collision/wrist1.stl":
    Ur3Wrist1Collision,
  "package://ur_description/meshes/ur3/collision/wrist2.stl":
    Ur3Wrist2Collision,
  "package://ur_description/meshes/ur3/collision/wrist3.stl":
    Ur3Wrist3Collision,
    //---------------------------------------------------------Robotiq2f85
  'package://robotiq/robotiq_2f_85_gripper_visualization/meshes/collision/robotiq_arg2f_85_base_link.stl': RobotiqCollision85BaseLink,
  'package://robotiq/robotiq_2f_85_gripper_visualization/meshes/collision/robotiq_arg2f_85_inner_finger.dae': RobotiqCollision85InnerFinger,// huge
  'package://robotiq/robotiq_2f_85_gripper_visualization/meshes/collision/robotiq_arg2f_85_inner_knuckle.dae': RobotiqCollision85InnerKnuckle,// tooo huge
  'package://robotiq/robotiq_2f_85_gripper_visualization/meshes/collision/robotiq_arg2f_85_outer_finger.dae': RobotiqCollision85OuterFinger,// too huge
  'package://robotiq/robotiq_2f_85_gripper_visualization/meshes/collision/robotiq_arg2f_85_outer_knuckle.dae': RobotiqCollision85OuterKnuckle,//too huge
  'package://robotiq/robotiq_2f_85_gripper_visualization/meshes/collision/robotiq_arg2f_base_link.stl': RobotiqCollisionBaseLink, // too huge
  'package://robotiq/robotiq_2f_85_gripper_visualization/meshes/visual/robotiq_arg2f_85_base_link.dae': RobotiqVisual85BaseLink,
  'package://robotiq/robotiq_2f_85_gripper_visualization/meshes/visual/robotiq_arg2f_85_inner_finger.dae': RobotiqVisual85InnerFinger, // too huge
  'package://robotiq/robotiq_2f_85_gripper_visualization/meshes/visual/robotiq_arg2f_85_inner_knuckle.dae': RobotiqVisual85InnerKnuckle, // too huge
  'package://robotiq/robotiq_2f_85_gripper_visualization/meshes/visual/robotiq_arg2f_85_outer_finger.dae': RobotiqVisual85OuterFinger,// huge
  'package://robotiq/robotiq_2f_85_gripper_visualization/meshes/visual/robotiq_arg2f_85_outer_knuckle.dae': RobotiqVisual85OuterKnuckle, //huge
  'package://robotiq/robotiq_2f_85_gripper_visualization/meshes/visual/robotiq_arg2f_85_pad.dae': RobotiqVisual85Pad,// huge
  'package://robotiq/robotiq_2f_85_gripper_visualization/meshes/visual/robotiq_gripper_coupling.stl': RobotiqVisualGripper, //huge
  //---------------------------------------------------------RobotiqWisc
  'package://robotiq_85_description/meshes/visual/robotiq_85_base_link.dae':RobotiqWiscVisualBaseLink,
  'package://robotiq_85_description/meshes/visual/robotiq_85_knuckle_link.dae':RobotiqWiscVisualKnuckleLink,
  'package://robotiq_85_description/meshes/visual/robotiq_85_finger_link.dae':RobotiqWiscVisualFingerLink,
  'package://robotiq_85_description/meshes/visual/robotiq_85_inner_knuckle_link.dae':RobotiqWiscVisualInnerKnuckleLink,
  'package://robotiq_85_description/meshes/visual/robotiq_85_finger_tip_link.dae':RobotiqWiscVisualFingerTipLink,
  'package://robotiq_85_description/meshes/collision/robotiq_85_base_link.stl':RobotiqWiscCollisionBaseLink,
  'package://robotiq_85_description/meshes/collision/robotiq_85_knuckle_link.stl':RobotiqWiscCollisionKnuckleLink,
  'package://robotiq_85_description/meshes/collision/robotiq_85_finger_link.stl':RobotiqWiscCollisionFingerLink,
  'package://robotiq_85_description/meshes/collision/robotiq_85_inner_knuckle_link.stl':RobotiqWiscCollisionInnerKnuckleLink,
  'package://robotiq_85_description/meshes/collision/robotiq_85_finger_tip_link.stl':RobotiqWiscCollisionFingerTipLink,
};

const MeshLookup = (path) => MeshLookupTable[path]();

export { MeshLookupTable, MeshLookup };
