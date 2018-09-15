import { GET_STYLES, UPDT_BOXSHADOW } from "./types";

export const getStyles = () => {
  return {
    type: GET_STYLES
  };
};

export const updtBoxShadow = newBoxShadow => {
  return {
    type: UPDT_BOXSHADOW,
    payload: newBoxShadow
  };
};
