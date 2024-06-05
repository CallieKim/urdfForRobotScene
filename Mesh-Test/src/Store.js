import { create } from "zustand";
import { Timer } from "./Timer";
const useStore = create((set, get) => ({
  ip: "",
  blocks: {},
  Start: {},
  lines: {},
  hulls: {},
  texts: {},
  points: {},
  widgets: {},
  clock: new Timer(),
  tfs: {
    pedestal: {
    frame: "world",
    position: {
        x: 0.0,
        y: -0.15,
        z: -0.38,
        },
    rotation: {
        w: 1.0,
        x: 0.0,
        y: 0.0,
        z: 0.0,
        },
    scale: {
        x: 1,
        y: 1,
        z: 1,
        },
    },
    robot: {
        frame: "pedestal",
        position: {
          x: 0.0,
          y: 0.0,
          z: 0.0,
        },
        rotation: {
          w: 1.0,
          x: 0.0,
          y: 0.0,
          z: 0.0,
        },
        scale: {
          x: 1,
          y: 1,
          z: 1,
        },
    },
    robotBase: {
      frame: "robot",
      position: {
        x: 0.0,
        y: 0.0,
        z: 0.38,
      },
      rotation: {
        w: 0.0,
        x: 0.0,
        y: 0.0,
        z: 1.0,
      },
      scale: {
        x: 1,
        y: 1,
        z: 1,
      },
    },
    robotShoulderLink: {
      frame: "robot",
      position: {
        x: 0.0,
        y: 0.0,
        z: 0.53185,
      },
      rotation: {
        w: 0.6669439077377319,
        x: 0.0,
        y: 0.0,
        z: 0.745107889175415,
      },
      scale: {
        x: 1,
        y: 1,
        z: 1,
      },
    },
    robotUpperArmLink: {
      frame: "robot",
      position: {
        x: 0.0,
        y: 0.0,
        z: 0.53185,
      },
      rotation: {
        w: -0.4478497803211212,
        x: 0.5932892560958862,
        y: -0.3847179114818573,
        z: 0.5472025871276855,
      },
      scale: {
        x: 1,
        y: 1,
        z: 1,
      },
    },
    robotForearmLink: {
      frame: "robot",
      position: {
        x: -0.02560272067785263,
        y: 0.23055101335048675,
        z: 0.45763859629631043,
      },
      rotation: {
        w: 0.6748411655426025,
        x: 0.1353885531425476,
        y: 0.694024384021759,
        z: 0.2111620008945465,
      },
      scale: {
        x: 1,
        y: 1,
        z: 1,
      },
    },
    robotWrist1Link: {
      frame: "robot",
      position: {
        x: 0.11584359407424927,
        y: 0.14418705981224775,
        z: 0.6451554048061371,
      },
      rotation: {
        w: -0.29463568329811096,
        x: 0.6713905930519104,
        y: -0.22188881039619446,
        z: 0.6427983641624451,
      },
      scale: {
        x: 1,
        y: 1,
        z: 1,
      },
    },
    robotWrist2Link: {
      frame: "robot",
      position: {
        x: 0.1089443638920784,
        y: 0.20631420761346816,
        z: 0.7032694268226624,
      },
      rotation: {
        w: 0.9164819121360779,
        x: -0.39580079913139343,
        y: -0.05381776764988899,
        z: -0.022500555962324142,
      },
      scale: {
        x: 1,
        y: 1,
        z: 1,
      },
    },
    robotWrist3Link: {
      frame: "robot",
      position: {
        x: 0.11666648089885712,
        y: 0.2694645017385483,
        z: 0.6366749751567841,
      },
      rotation: {
        w: -0.37005797028541565,
        x: 0.9280606508255005,
        y: -0.01538957841694355,
        z: 0.039035625755786896,
      },
      scale: {
        x: 1,
        y: 1,
        z: 1,
      },
    },
    simulatedTool0: {
        frame: "robot",
        position: {
          x: 0.11666648089885712,
          y: 0.2694645017385483,
          z: 0.6366749751567841,
        },
        rotation: {
          w: -0.37005797028541565,
          x: 0.9280606508255005,
          y: -0.01538957841694355,
          z: 0.039035625755786896,
        },
        scale: {
          x: 1,
          y: 1,
          z: 1,
        },
    },
    gripperBaseLink: {
        frame: "simulatedTool0",
        position: {
          x: 0,
          y: 0,
          z: 0,
        },
        rotation: {
          w: 0.5,
          x: 0.5,
          y: -0.5,
          z: 0.5,
        },
        scale: {
          x: 1,
          y: 1,
          z: 1,
        },
    },
    gripperLeftKnuckle: {
        frame: "gripperBaseLink",
        position: {
          x: 0.05490451627,
          y: 0.03060114443,
          z: 0.0,
        },
        rotation: {
          w: 0.0,
          x: 1.0,
          y: 0.0,
          z: 0.0,
        },
        scale: {
          x: 1,
          y: 1,
          z: 1,
        },
    },
    gripperRightKnuckle: {
        frame: "gripperBaseLink",
        position: {
          x: 0.05490451627,
          y: -0.03060114443,
          z: 0.0,
        },
        rotation: {
          w: 1.0,
          x: 0.0,
          y: 0.0,
          z: 0.0,
        },
        scale: {
          x: 1,
          y: 1,
          z: 1,
        },
    },
    gripperLeftFinger: {
        frame: "gripperLeftKnuckle",
        position: {
          x: -0.00408552455,
          y: -0.03148604435,
          z: 0.0,
        },
        rotation: {
          w: 1.0,
          x: 0.0,
          y: 0.0,
          z: 0.0,
        },
        scale: {
          x: 1,
          y: 1,
          z: 1,
        },
    },
    gripperRightFinger: {
        frame: "gripperRightKnuckle",
        position: {
          x: -0.00408552455,
          y: -0.03148604435,
          z: 0.0,
        },
        rotation: {
          w: 1.0,
          x: 0.0,
          y: 0.0,
          z: 0.0,
        },
        scale: {
          x: 1,
          y: 1,
          z: 1,
        },
    },
    gripperLeftInnerKnuckle: {
        frame: "gripperBaseLink",
        position: {
          x: 0.06142,
          y: 0.0127,
          z: 0.0,
        },
        rotation: {
          w: 0.0,
          x: 1.0,
          y: 0.0,
          z: 0.0,
        },
        scale: {
          x: 1,
          y: 1,
          z: 1,
        },
    },
    gripperRightInnerKnuckle: {
        frame: "gripperBaseLink",
        position: {
          x: 0.06142,
          y: -0.0127,
          z: 0.0,
        },
        rotation: {
          w: 1.0,
          x: 0.0,
          y: 0.0,
          z: 0.0,
        },
        scale: {
          x: 1,
          y: 1,
          z: 1,
        },
    },
    gripperLeftFingerTip: {
        frame: "gripperLeftInnerKnuckle",
        position: {
          x: 0.04303959807,
          y: -0.03759940821,
          z: 0.0,
        },
        rotation: {
          w: 1.0,
          x: 0.0,
          y: 0.0,
          z: 0.0,
        },
        scale: {
          x: 1,
          y: 1,
          z: 1,
        },
    },
    gripperRightFingerTip: {
        frame: "gripperRightInnerKnuckle",
        position: {
          x: 0.04303959807,
          y: -0.03759940821,
          z: 0.0,
        },
        rotation: {
          w: 1.0,
          x: 0.0,
          y: 0.0,
          z: 0.0,
        },
        scale: {
          x: 1,
          y: 1,
          z: 1,
        },
    },
  },
  items: {
    robotBase: {
      shape: "package://ur_description/meshes/ur3/visual/base.dae",
      name: "Robot Base",
      frame: "robotBase",
      position: {
        x: 0.0,
        y: 0.0,
        z: 0.0,
      },
      rotation: {
        w: 0.0,
        x: 0.0,
        y: 0.0,
        z: 1.0,
      },
      scale: {
        x: 1,
        y: 1,
        z: 1,
      },
      highlighted: "False",
    },
    robotShoulderLink: {
      shape: "package://ur_description/meshes/ur3/visual/shoulder.dae",
      name: "Shoulder Link",
      frame: "robotShoulderLink",
      position: {
        x: 0.0,
        y: 0.0,
        z: 0.0,
      },
      rotation: {
        w: 0.0,
        x: 0.0,
        y: 0.0,
        z: 1.0,
      },
      scale: {
        x: 1,
        y: 1,
        z: 1,
      },
      highlighted: "False",
    },
    robotUpperArmLink: {
      shape: "package://ur_description/meshes/ur3/visual/upperarm.dae",
      name: "Upper Arm Link",
      frame: "robotUpperArmLink",
      position: {
        x: 0.0,
        y: 0.0,
        z: 0.12,
      },
      rotation: {
        w: 0.5,
        x: 0.5,
        y: -0.5,
        z: -0.5,
      },
      scale: {
        x: 1,
        y: 1,
        z: 1,
      },
      highlighted: "False",
    },
    robotForearmLink: {
      shape: "package://ur_description/meshes/ur3/visual/forearm.dae",
      name: "Forearm Link",
      frame: "robotForearmLink",
      position: {
        x: 0.0,
        y: 0.0,
        z: 0.027,
      },
      rotation: {
        w: 0.5,
        x: 0.5,
        y: -0.5,
        z: -0.5,
      },
      scale: {
        x: 1,
        y: 1,
        z: 1,
      },
      highlighted: "False",
    },
    robotWrist1Link: {
      shape: "package://ur_description/meshes/ur3/visual/wrist1.dae",
      name: "Wrist 1 Link",
      frame: "robotWrist1Link",
      position: {
        x: 0.0,
        y: 0.0,
        z: -0.104,
      },
      rotation: {
        w: 0.7071068,
        x: 0.7071068,
        y: 0.0,
        z: 0.0,
      },
      scale: {
        x: 1,
        y: 1,
        z: 1,
      },
      highlighted: "False",
    },
    robotWrist2Link: {
      shape: "package://ur_description/meshes/ur3/visual/wrist2.dae",
      name: "Wrist 2 Link",
      frame: "robotWrist2Link",
      position: {
        x: 0.0,
        y: 0.0,
        z: -0.08535,
      },
      rotation: {
        w: 1.0,
        x: 0.0,
        y: 0.0,
        z: 0.0,
      },
      scale: {
        x: 1,
        y: 1,
        z: 1,
      },
      highlighted: "False",
    },
    robotWrist3Link: {
      shape: "package://ur_description/meshes/ur3/visual/wrist3.dae",
      name: "Wrist 3 Link",
      frame: "robotWrist3Link",
      position: {
        x: 0.0,
        y: 0.0,
        z: -0.0921,
      },
      rotation: {
        w: 0.7071068,
        x: 0.7071068,
        y: 0.0,
        z: 0.0,
      },
      scale: {
        x: 1,
        y: 1,
        z: 1,
      },
      highlighted: "False",
    },
    gripperBaseLink: {
        shape: "package://robotiq_85_description/meshes/visual/robotiq_85_base_link.dae",
        name: "Gripper Base",
        frame: "gripperBaseLink",
        position: {
          x: 0.0,
          y: 0.0,
          z: 0.0,
        },
        rotation: {
          w: 1.0,
          x: 0.0,
          y: 0.0,
          z: 0.0,
        },
        scale: {
          x: 1,
          y: 1,
          z: 1,
        },
        highlighted: "False",
      },
      gripperLeftKnuckle: {
        shape: "package://robotiq_85_description/meshes/visual/robotiq_85_knuckle_link.dae",
        name: "Gripper Left Knuckle",
        frame: "gripperLeftKnuckle",
        position: {
          x: 0.0,
          y: 0.0,
          z: 0.0,
        },
        rotation: {
          w: 1.0,
          x: 0.0,
          y: 0.0,
          z: 0.0,
        },
        scale: {
          x: 1,
          y: 1,
          z: 1,
        },
        highlighted: "False",
      },
    gripperRightKnuckle: {
        shape: "package://robotiq_85_description/meshes/visual/robotiq_85_knuckle_link.dae",
        name: "Gripper Right Knuckle",
        frame: "gripperRightKnuckle",
        position: {
        x: 0.0,
        y: 0.0,
        z: 0.0,
        },
        rotation: {
        w: 1.0,
        x: 0.0,
        y: 0.0,
        z: 0.0,
        },
        scale: {
        x: 1,
        y: 1,
        z: 1,
        },
        highlighted: "False",
    },
    gripperLeftFinger: {
        shape: "package://robotiq_85_description/meshes/visual/robotiq_85_finger_link.dae",
        name: "Gripper Left Finger",
        frame: "gripperLeftFinger",
        position: {
        x: 0.0,
        y: 0.0,
        z: 0.0,
        },
        rotation: {
        w: 1.0,
        x: 0.0,
        y: 0.0,
        z: 0.0,
        },
        scale: {
        x: 1,
        y: 1,
        z: 1,
        },
        highlighted: "False",
    },
    gripperRightFinger: {
        shape: "package://robotiq_85_description/meshes/visual/robotiq_85_finger_link.dae",
        name: "Gripper Right Finger",
        frame: "gripperRightFinger",
        position: {
        x: 0.0,
        y: 0.0,
        z: 0.0,
        },
        rotation: {
        w: 1.0,
        x: 0.0,
        y: 0.0,
        z: 0.0,
        },
        scale: {
        x: 1,
        y: 1,
        z: 1,
        },
        highlighted: "False",
    },
    gripperLeftInnerKnuckle: {
        shape: "package://robotiq_85_description/meshes/visual/robotiq_85_inner_knuckle_link.dae",
        name: "Gripper Left Inner Knuckle",
        frame: "gripperLeftInnerKnuckle",
        position: {
        x: 0.0,
        y: 0.0,
        z: 0.0,
        },
        rotation: {
        w: 1.0,
        x: 0.0,
        y: 0.0,
        z: 0.0,
        },
        scale: {
        x: 1,
        y: 1,
        z: 1,
        },
        highlighted: "False",
    },
    gripperRightInnerKnuckle: {
        shape: "package://robotiq_85_description/meshes/visual/robotiq_85_inner_knuckle_link.dae",
        name: "Gripper Right Inner Knuckle",
        frame: "gripperRightInnerKnuckle",
        position: {
        x: 0.0,
        y: 0.0,
        z: 0.0,
        },
        rotation: {
        w: 1.0,
        x: 0.0,
        y: 0.0,
        z: 0.0,
        },
        scale: {
        x: 1,
        y: 1,
        z: 1,
        },
        highlighted: "False",
    },
    gripperLeftFingerTip: {
        shape: "package://robotiq_85_description/meshes/visual/robotiq_85_finger_tip_link.dae",
        name: "Gripper Left Finger Tip",
        frame: "gripperLeftFingerTip",
        position: {
        x: 0.0,
        y: 0.0,
        z: 0.0,
        },
        rotation: {
        w: 1.0,
        x: 0.0,
        y: 0.0,
        z: 0.0,
        },
        scale: {
        x: 1,
        y: 1,
        z: 1,
        },
        highlighted: "False",
    },
    gripperRightFingerTip: {
        shape: "package://robotiq_85_description/meshes/visual/robotiq_85_finger_tip_link.dae",
        name: "Gripper Right Finger Tip",
        frame: "gripperRightFingerTip",
        position: {
        x: 0.0,
        y: 0.0,
        z: 0.0,
        },
        rotation: {
        w: 1.0,
        x: 0.0,
        y: 0.0,
        z: 0.0,
        },
        scale: {
        x: 1,
        y: 1,
        z: 1,
        },
        highlighted: "False",
    },
  },

  setIp: (ip) => set({ ip }),
  addBlock: (id, json) =>
    set((state) => ({
      blocks: { ...state.blocks, [id]: json },
    })),
  removeBlock: (id) =>
    set((state) => {
      // Create a new object excluding the block with the given id
      const newBlocks = Object.keys(state.blocks).reduce((acc, currentId) => {
        if (currentId !== id) {
          acc[currentId] = state.blocks[currentId];
        }
        return acc;
      }, {});

      // Update the state with the new blocks object
      return { blocks: newBlocks };
    }),
  updateBlock: (id, updatedJson) =>
    set((state) => ({
      blocks: { ...state.blocks, [id]: updatedJson },
    })),
  updateTfs: (newTfs) => set({ tfs: newTfs }),
  updateItems: (newItems) => set({ items: newItems }),
  getBlock: (id) => get().blocks[id],

  getBlocksByType: (type) => {
    const blocks = get().blocks;
    return Object.values(blocks).filter((block) => block.type === type)[0];
  },

  addBlocktoStart: (id, json) =>
    set((state) => ({
      Start: { ...state.Start, [id]: json },
    })),
  removeBlockfromStart: (id) =>
    set((state) => {
      // Create a new object excluding the block with the given id
      const newBlocks = Object.keys(state.Start).reduce((acc, currentId) => {
        if (currentId !== id) {
          acc[currentId] = state.Start[currentId];
        }
        return acc;
      }, {});

      // Update the state with the new blocks object
      return { Start: newBlocks };
    }),
}));

export default useStore;
