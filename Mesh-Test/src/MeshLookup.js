import Misty_BASE_FRONT_GRILL_1 from "./MeshLoaders/./Misty/visual/BASE_FRONT_GRILL_1.js"
import Misty_BASE_LEFT_COVER_1 from "./MeshLoaders/./Misty/visual/BASE_LEFT_COVER_1.js"
import Misty_base_link from "./MeshLoaders/./Misty/visual/base_link.js"
import Misty_BASE_RIGHT_COVER_1 from "./MeshLoaders/./Misty/visual/BASE_RIGHT_COVER_1.js"
import Misty_Battery_1 from "./MeshLoaders/./Misty/visual/Battery_1.js"
import Misty_BODY_BASE_CONNECTOR_1 from "./MeshLoaders/./Misty/visual/BODY_BASE_CONNECTOR_1.js"
import Misty_DRIVE_TRACK_LEFT_1 from "./MeshLoaders/./Misty/visual/DRIVE_TRACK_LEFT_1.js"
import Misty_DRIVE_TRACK_RIGHT_1 from "./MeshLoaders/./Misty/visual/DRIVE_TRACK_RIGHT_1.js"
import Misty_EYE_LENS_1 from "./MeshLoaders/./Misty/visual/EYE_LENS_1.js"
import Misty_FACE_1 from "./MeshLoaders/./Misty/visual/FACE_1.js"
import Misty_FRONT_LEFT_WHEEL_1 from "./MeshLoaders/./Misty/visual/FRONT_LEFT_WHEEL_1.js"
import Misty_FRONT_RIGHT_WHEEL_1 from "./MeshLoaders/./Misty/visual/FRONT_RIGHT_WHEEL_1.js"
import Misty_HEAD_1 from "./MeshLoaders/./Misty/visual/HEAD_1.js"
import Misty_HEAD_VENT_LEFT_1 from "./MeshLoaders/./Misty/visual/HEAD_VENT_LEFT_1.js"
import Misty_HEAD_VENT_RIGHT_1 from "./MeshLoaders/./Misty/visual/HEAD_VENT_RIGHT_1.js"
import Misty_LEFT_ARM_1 from "./MeshLoaders/./Misty/visual/LEFT_ARM_1.js"
import Misty_LEFT_ARM_CONNECTOR_1 from "./MeshLoaders/./Misty/visual/LEFT_ARM_CONNECTOR_1.js"
import Misty_MIDDLE_LEFT_WHEEL_1 from "./MeshLoaders/./Misty/visual/MIDDLE_LEFT_WHEEL_1.js"
import Misty_MIDDLE_RIGHT_WHEEL_1 from "./MeshLoaders/./Misty/visual/MIDDLE_RIGHT_WHEEL_1.js"
import Misty_NECK_GLOBE_BASE_1 from "./MeshLoaders/./Misty/visual/NECK_GLOBE_BASE_1.js"
import Misty_REAR_LEFT_WHEEL_1 from "./MeshLoaders/./Misty/visual/REAR_LEFT_WHEEL_1.js"
import Misty_REAR_RIGHT_WHEEL_1 from "./MeshLoaders/./Misty/visual/REAR_RIGHT_WHEEL_1.js"
import Misty_RIGHT_ARM_1 from "./MeshLoaders/./Misty/visual/RIGHT_ARM_1.js"
import Misty_RIGHT_ARM_CONNECTOR_1 from "./MeshLoaders/./Misty/visual/RIGHT_ARM_CONNECTOR_1.js"
import Misty_Torso_1 from "./MeshLoaders/./Misty/visual/Torso_1.js"
import Misty_VISOR_GLASS_1 from "./MeshLoaders/./Misty/visual/VISOR_GLASS_1.js"

const MeshLookupTable = {
  "package://misty_description/meshes/BASE_FRONT_GRILL_1.stl": Misty_BASE_FRONT_GRILL_1,
  "package://misty_description/meshes/BASE_LEFT_COVER_1.stl": Misty_BASE_LEFT_COVER_1,
  "package://misty_description/meshes/base_link.stl": Misty_base_link,
  "package://misty_description/meshes/BASE_RIGHT_COVER_1.stl": Misty_BASE_RIGHT_COVER_1,
  "package://misty_description/meshes/Battery_1.stl": Misty_Battery_1,
  "package://misty_description/meshes/BODY_BASE_CONNECTOR_1.stl": Misty_BODY_BASE_CONNECTOR_1,
  "package://misty_description/meshes/EYE_LENS_1.stl": Misty_EYE_LENS_1,
  "package://misty_description/meshes/FACE_1.stl": Misty_FACE_1,
  "package://misty_description/meshes/FRONT_LEFT_WHEEL_1.stl": Misty_FRONT_LEFT_WHEEL_1,
  "package://misty_description/meshes/FRONT_RIGHT_WHEEL_1.stl": Misty_FRONT_RIGHT_WHEEL_1,
  "package://misty_description/meshes/HEAD_1.stl": Misty_HEAD_1,
  "package://misty_description/meshes/HEAD_VENT_LEFT_1.stl": Misty_HEAD_VENT_LEFT_1,
  "package://misty_description/meshes/HEAD_VENT_RIGHT_1.stl": Misty_HEAD_VENT_RIGHT_1,
  "package://misty_description/meshes/LEFT_ARM_1.stl": Misty_LEFT_ARM_1,
  "package://misty_description/meshes/LEFT_ARM_CONNECTOR_1.stl": Misty_LEFT_ARM_CONNECTOR_1,
  "package://misty_description/meshes/MIDDLE_LEFT_WHEEL_1.stl": Misty_MIDDLE_LEFT_WHEEL_1,
  "package://misty_description/meshes/MIDDLE_RIGHT_WHEEL_1.stl": Misty_MIDDLE_RIGHT_WHEEL_1,
  "package://misty_description/meshes/NECK_GLOBE_BASE_1.stl": Misty_NECK_GLOBE_BASE_1,
  "package://misty_description/meshes/REAR_LEFT_WHEEL_1.stl": Misty_REAR_LEFT_WHEEL_1,
  "package://misty_description/meshes/REAR_RIGHT_WHEEL_1.stl": Misty_REAR_RIGHT_WHEEL_1,
  "package://misty_description/meshes/RIGHT_ARM_1.stl": Misty_RIGHT_ARM_1,
  "package://misty_description/meshes/RIGHT_ARM_CONNECTOR_1.stl": Misty_RIGHT_ARM_CONNECTOR_1,
  "package://misty_description/meshes/Torso_1.stl": Misty_Torso_1,
  "package://misty_description/meshes/VISOR_GLASS_1.stl": Misty_VISOR_GLASS_1,
};

const MeshLookup = (path) => MeshLookupTable[path]();
export { MeshLookupTable, MeshLookup };