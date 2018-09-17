import {
  GET_STYLES,
  UPDT_BOXSHADOW,
  UPDT_BORDERRADIUS,
  UPDT_BORDERS
} from "../actions/types";
const initialState = {
  baseStyle: {
    width: 200,
    height: 200,
    margin: "auto",
    backgroundColor: "#00bcd4"
  },

  borderStyle: {
    borderWidth: 2,
    borderStyle: [
      { name: "Solid", value: "solid" },
      { name: "None", value: "none" },
      { name: "Hidden", value: "hidden" },
      { name: "Dotted", value: "dotted" },
      { name: "Dashed", value: "dashed" },
      { name: "Double", value: "double" },
      { name: "Groove", value: "groove" },
      { name: "Ridge", value: "ridge" },
      { name: "Inset", value: "inset" },
      { name: "Outset", value: "outset" }
    ],
    activeBorderStyle: "solid",
    borderColor: "#1b5e20"
  },
  borderRadius: {
    borderTopLeftRadius: {
      radiusX: 25,
      radiusY: 30
    },
    borderTopRightRadius: {
      radiusX: 15,
      radiusY: 50
    },
    borderBottomLeftRadius: {
      radiusX: 50,
      radiusY: 25
    },
    borderBottomRightRadius: {
      radiusX: 25,
      radiusY: 50
    }
  },

  boxShadow: {
    verticalOffset: 0,
    horizontalOffset: 0,
    blur: 3,
    spread: 5,
    color: "#b71c1c",
    opacity: 0.8,
    inset: ""
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_STYLES:
      return {
        ...state
      };

    case UPDT_BOXSHADOW:
      return {
        ...state,
        boxShadow: action.payload
      };

    case UPDT_BORDERRADIUS:
      return {
        ...state,
        borderRadius: action.payload
      };

    case UPDT_BORDERS:
      return {
        ...state,
        borderStyle: action.payload
      };

    default:
      return state;
  }
}
