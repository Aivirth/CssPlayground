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
