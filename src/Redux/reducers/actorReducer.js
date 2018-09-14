import { GET_STYLES } from "../actions/types";
const initialState = {
  actorStyle: {
    width: 250,
    height: 250,
    margin: "auto",
    backgroundColor: "orangered",
    border: {
      borderWidth: 2,
      borderStyle: "solid",
      borderColor: "blue"
    },
    borderRadius: {
      borderTopLeftRadius: {
        radiusX: 25,
        radiusY: 50
      },
      borderTopRightRadius: {
        radiusX: 25,
        radiusY: 50
      },
      borderBottomLeftRadius: {
        radiusX: 25,
        radiusY: 50
      },
      borderBottomRightRadius: {
        radiusX: 25,
        radiusY: 50
      }
    }
  }
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_STYLES:
      return {
        ...state
      };

    default:
      return state;
  }
}
