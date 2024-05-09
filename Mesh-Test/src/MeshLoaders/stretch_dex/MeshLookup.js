import stretch_dex_base_imu from "./MeshLoaders/./stretch_dex/visual/base_imu.js"
import stretch_dex_base_link from "./MeshLoaders/./stretch_dex/visual/base_link.js"
import stretch_dex_laser from "./MeshLoaders/./stretch_dex/visual/laser.js"
import stretch_dex_link_arm_l0 from "./MeshLoaders/./stretch_dex/visual/link_arm_l0.js"
import stretch_dex_link_arm_l1 from "./MeshLoaders/./stretch_dex/visual/link_arm_l1.js"
import stretch_dex_link_arm_l2 from "./MeshLoaders/./stretch_dex/visual/link_arm_l2.js"
import stretch_dex_link_arm_l3 from "./MeshLoaders/./stretch_dex/visual/link_arm_l3.js"
import stretch_dex_link_arm_l4 from "./MeshLoaders/./stretch_dex/visual/link_arm_l4.js"
import stretch_dex_link_aruco_inner_wrist from "./MeshLoaders/./stretch_dex/visual/link_aruco_inner_wrist.js"
import stretch_dex_link_aruco_left_base from "./MeshLoaders/./stretch_dex/visual/link_aruco_left_base.js"
import stretch_dex_link_aruco_right_base from "./MeshLoaders/./stretch_dex/visual/link_aruco_right_base.js"
import stretch_dex_link_aruco_shoulder from "./MeshLoaders/./stretch_dex/visual/link_aruco_shoulder.js"
import stretch_dex_link_aruco_top_wrist from "./MeshLoaders/./stretch_dex/visual/link_aruco_top_wrist.js"
import stretch_dex_link_camera from "./MeshLoaders/./stretch_dex/visual/link_camera.js"
import stretch_dex_link_dry_erase_holder from "./MeshLoaders/./stretch_dex/visual/link_dry_erase_holder.js"
import stretch_dex_link_dry_erase_marker from "./MeshLoaders/./stretch_dex/visual/link_dry_erase_marker.js"
import stretch_dex_link_gripper from "./MeshLoaders/./stretch_dex/visual/link_gripper.js"
import stretch_dex_link_gripper_fingertip_left from "./MeshLoaders/./stretch_dex/visual/link_gripper_fingertip_left.js"
import stretch_dex_link_gripper_fingertip_right from "./MeshLoaders/./stretch_dex/visual/link_gripper_fingertip_right.js"
import stretch_dex_link_gripper_finger_left from "./MeshLoaders/./stretch_dex/visual/link_gripper_finger_left.js"
import stretch_dex_link_gripper_finger_right from "./MeshLoaders/./stretch_dex/visual/link_gripper_finger_right.js"
import stretch_dex_link_head from "./MeshLoaders/./stretch_dex/visual/link_head.js"
import stretch_dex_link_head_pan from "./MeshLoaders/./stretch_dex/visual/link_head_pan.js"
import stretch_dex_link_head_tilt from "./MeshLoaders/./stretch_dex/visual/link_head_tilt.js"
import stretch_dex_link_left_wheel from "./MeshLoaders/./stretch_dex/visual/link_left_wheel.js"
import stretch_dex_link_lift from "./MeshLoaders/./stretch_dex/visual/link_lift.js"
import stretch_dex_link_mast from "./MeshLoaders/./stretch_dex/visual/link_mast.js"
import stretch_dex_link_puller from "./MeshLoaders/./stretch_dex/visual/link_puller.js"
import stretch_dex_link_respeaker from "./MeshLoaders/./stretch_dex/visual/link_respeaker.js"
import stretch_dex_link_right_wheel from "./MeshLoaders/./stretch_dex/visual/link_right_wheel.js"
import stretch_dex_link_straight_gripper from "./MeshLoaders/./stretch_dex/visual/link_straight_gripper.js"
import stretch_dex_link_wrist_pitch from "./MeshLoaders/./stretch_dex/visual/link_wrist_pitch.js"
import stretch_dex_link_wrist_roll from "./MeshLoaders/./stretch_dex/visual/link_wrist_roll.js"
import stretch_dex_link_wrist_yaw from "./MeshLoaders/./stretch_dex/visual/link_wrist_yaw.js"
import stretch_dex_link_wrist_yaw_bottom from "./MeshLoaders/./stretch_dex/visual/link_wrist_yaw_bottom.js"
import stretch_dex_omni_wheel_m from "./MeshLoaders/./stretch_dex/visual/omni_wheel_m.js"
import stretch_dex_respeaker_base from "./MeshLoaders/./stretch_dex/visual/respeaker_base.js"

const MeshLookupTable = {
  "package://stretch_description/meshes/base_imu.STL": stretch_dex_base_imu,
  "package://stretch_description/meshes/base_link.STL": stretch_dex_base_link,
  "package://stretch_description/meshes/laser.STL": stretch_dex_laser,
  "package://stretch_description/meshes/link_arm_l0.STL": stretch_dex_link_arm_l0,
  "package://stretch_description/meshes/link_arm_l1.STL": stretch_dex_link_arm_l1,
  "package://stretch_description/meshes/link_arm_l2.STL": stretch_dex_link_arm_l2,
  "package://stretch_description/meshes/link_arm_l3.STL": stretch_dex_link_arm_l3,
  "package://stretch_description/meshes/link_arm_l4.STL": stretch_dex_link_arm_l4,
  "package://stretch_description/meshes/link_aruco_inner_wrist.STL": stretch_dex_link_aruco_inner_wrist,
  "package://stretch_description/meshes/link_aruco_left_base.STL": stretch_dex_link_aruco_left_base,
  "package://stretch_description/meshes/link_aruco_right_base.STL": stretch_dex_link_aruco_right_base,
  "package://stretch_description/meshes/link_aruco_shoulder.STL": stretch_dex_link_aruco_shoulder,
  "package://stretch_description/meshes/link_aruco_top_wrist.STL": stretch_dex_link_aruco_top_wrist,
  "package://stretch_description/meshes/link_gripper_finger_right.STL": stretch_dex_link_gripper_finger_right,
  "package://stretch_description/meshes/link_gripper_fingertip_right.STL": stretch_dex_link_gripper_fingertip_right,
  "package://stretch_description/meshes/link_gripper_finger_left.STL": stretch_dex_link_gripper_finger_left,
  "package://stretch_description/meshes/link_gripper_fingertip_left.STL": stretch_dex_link_gripper_fingertip_left,
  "package://stretch_description/meshes/link_head.STL": stretch_dex_link_head,
  "package://stretch_description/meshes/link_head_pan.STL": stretch_dex_link_head_pan,
  "package://stretch_description/meshes/link_head_tilt.STL": stretch_dex_link_head_tilt,
  "package://stretch_description/meshes/link_left_wheel.STL": stretch_dex_link_left_wheel,
  "package://stretch_description/meshes/link_lift.STL": stretch_dex_link_lift,
  "package://stretch_description/meshes/link_mast.STL": stretch_dex_link_mast,
  "package://stretch_description/meshes/link_right_wheel.STL": stretch_dex_link_right_wheel,
  "package://stretch_description/meshes/link_straight_gripper.STL": stretch_dex_link_straight_gripper,
  "package://stretch_description/meshes/link_wrist_pitch.STL": stretch_dex_link_wrist_pitch,
  "package://stretch_description/meshes/link_wrist_roll.STL": stretch_dex_link_wrist_roll,
  "package://stretch_description/meshes/link_wrist_yaw_bottom.STL": stretch_dex_link_wrist_yaw_bottom,
  "package://stretch_description/meshes/link_wrist_yaw.STL": stretch_dex_link_wrist_yaw,
  "package://stretch_description/meshes/omni_wheel_m.STL": stretch_dex_omni_wheel_m,
  "package://stretch_description/meshes/respeaker_base.STL": stretch_dex_respeaker_base,
};

const MeshLookup = (path) => MeshLookupTable[path]();
export { MeshLookupTable, MeshLookup };