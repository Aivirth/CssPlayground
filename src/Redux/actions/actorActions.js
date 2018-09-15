import { GET_STYLES, UPDT_BOXSHADOW } from "./types";

export const getStyles = () => {
  return {
    type: GET_STYLES
  };
};

export const updtBoxShadow = newBowShadow => {
  return {
    type: UPDT_BOXSHADOW,
    payload: newBowShadow
  };
};
