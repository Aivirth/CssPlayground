import { GET_STYLES, UPDT_BOXSHADOW } from "../actions/types";
const initialState = {
  baseStyle: {
    width: 200,
    height: 200,
    margin: "auto",
    backgroundColor: "orangered"
  },

  borderStyle: {
    borderWidth: 2,
    borderStyle: "solid",
    borderColor: "blue"
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
    verticalOffset: 20,
    horizontalOffset: 10,
    blur: 3,
    spread: 5,
    color: "#000",
    opacity: 0.3,
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

    default:
      return state;
  }
}
