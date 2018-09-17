import {
  GET_STYLES,
  UPDT_BOXSHADOW,
  UPDT_BORDERRADIUS,
  UPDT_BORDERS
} from "./types";

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

export const updtBorderRadius = newBorderRadius => {
  return {
    type: UPDT_BORDERRADIUS,
    payload: newBorderRadius
  };
};

export const updtBorders = newBorders => {
  return {
    type: UPDT_BORDERS,
    payload: newBorders
  };
};
