import { GET_STYLES, UPDT_BOXSHADOW } from "../actions/types";
const initialState = {
  baseStyle: {
    width: 250,
    height: 250,
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
    verticalOffset: 100,
    horizontalOffset: 100,
    blur: 0,
    spread: 0,
    color: 0,
    opacity: 0.3,
    inset: false
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
