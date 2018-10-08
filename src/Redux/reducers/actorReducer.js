import {
  GET_STYLES,
  UPDT_BOXSHADOW,
  UPDT_BORDERRADIUS,
  UPDT_BORDERS,
  UPDT_BASE,
  UPDT_STYLECSSTEXT
} from "../actions/types";

const initialState = {
  computedStyleCssText: {},

  baseStyle: {
    width: {
      value: 200,
      inputType: "range",
      elementConfig: {
        label: "Width"
      },
      htmlProperties: {
        type: "range",
        step: "1",
        min: 0,
        max: 500,
        name: "width"
      },
      dataSets: {
        identifier: "width"
      }
    },

    height: {
      value: 200,
      inputType: "range",
      elementConfig: {
        label: "Height"
      },
      htmlProperties: {
        type: "range",
        step: "1",
        min: 0,
        max: 500,
        name: "height"
      },
      dataSets: {}
    },

    margin: {
      value: "auto",
      inputType: "",
      elementConfig: {},
      htmlProperties: {},
      dataSets: {}
    },

    backgroundColor: {
      value: "#00bcd4",
      inputType: "color",
      elementConfig: {
        label: "Background Color"
      },
      htmlProperties: {
        type: "color",
        name: "backgroundColor"
      },
      dataSets: {}
    }
  },

  borders: {
    borderWidth: {
      value: 1,
      inputType: "range",
      elementConfig: {
        label: "Border Width"
      },
      htmlProperties: {
        type: "range",
        step: "1",
        min: 0,
        max: 20,
        name: "borderWidth"
      },
      dataSets: {}
    },

    borderStyle: {
      value: "solid",
      inputType: "select",
      elementConfig: {
        label: "Border Style",
        options: [
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
        ]
      },
      htmlProperties: {
        name: "borderStyle"
      },
      dataSets: {}
    },

    borderColor: {
      value: "#ffb900",
      inputType: "color",
      elementConfig: {
        label: "Border Color"
      },
      htmlProperties: {
        name: "borderColor",
        type: "color"
      },
      dataSets: {}
    }
  },
  borderRadius: {
    borderTopLeftRadius: {
      inputType: "range",
      elementConfig: {
        label: "Border Top-Left Radius"
      },
      htmlProperties: {
        type: "range",
        step: "1",
        min: 0,
        max: 20,
        name: "borderTopLeftRadius"
      },
      dataSets: {},
      radii: [{ radiusX: 5 }, { radiusY: 2 }]
    },

    borderTopRightRadius: {
      inputType: "range",
      elementConfig: {
        label: "Border Top-Right Radius"
      },
      htmlProperties: {
        type: "range",
        step: "1",
        min: 0,
        max: 20,
        name: "borderTopRightRadius"
      },
      dataSets: {},
      radii: [{ radiusX: 5 }, { radiusY: 4 }]
    },

    borderBottomLeftRadius: {
      inputType: "range",
      elementConfig: {
        label: "Border Bottom Left Radius"
      },
      htmlProperties: {
        type: "range",
        step: "1",
        min: 0,
        max: 20,
        name: "borderBottomLeftRadius"
      },
      dataSets: {},
      radii: [{ radiusX: 3 }, { radiusY: 7 }]
    },

    borderBottomRightRadius: {
      inputType: "range",
      elementConfig: {
        label: "Border Bottom Right Radius"
      },
      htmlProperties: {
        type: "range",
        step: "1",
        min: 0,
        max: 20,
        name: "Border Bottom Right Radius"
      },
      dataSets: {},
      radii: [{ radiusX: 6 }, { radiusY: 10 }]
    }
  },

  boxShadow: {
    verticalOffset: {
      value: 10,
      inputType: "range",
      elementConfig: {
        label: "Vertical Offset"
      },
      htmlProperties: {
        type: "range",
        step: "1",
        min: -100,
        max: 100,
        name: "verticalOffset"
      },
      dataSets: {}
    },

    horizontalOffset: {
      value: 10,
      inputType: "range",
      elementConfig: {
        label: "Horizontal Offset"
      },
      htmlProperties: {
        type: "range",
        step: "1",
        min: -100,
        max: 100,
        name: "horizontalOffset"
      },
      dataSets: {}
    },

    blur: {
      value: 3,
      inputType: "range",
      elementConfig: {
        label: "Blur"
      },
      htmlProperties: {
        type: "range",
        step: "1",
        min: 0,
        max: 200,
        name: "blur"
      },
      dataSets: {}
    },

    spread: {
      value: 3,
      inputType: "range",
      elementConfig: {
        label: "Spread"
      },
      htmlProperties: {
        type: "range",
        step: "1",
        min: 0,
        max: 100,
        name: "spread"
      },
      dataSets: {}
    },

    color: {
      value: "#ffb900",
      inputType: "color",
      elementConfig: {
        label: "Color"
      },
      htmlProperties: {
        type: "color",
        name: "color"
      },
      dataSets: {}
    },

    opacity: {
      value: 10,
      inputType: "range",
      elementConfig: {
        label: "Opacity"
      },
      htmlProperties: {
        type: "range",
        step: "0.1",
        min: 0,
        max: 1,
        name: "opacity"
      },
      dataSets: {}
    },

    inset: {
      value: "",
      inputType: "switch",
      elementConfig: {
        label: "Inset"
      },
      htmlProperties: {
        type: "checkbox",
        name: "inset"
      },
      dataSets: {
        isSwitch: true
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

    case UPDT_BASE:
      return {
        ...state,
        baseStyle: action.payload
      };

    case UPDT_STYLECSSTEXT:
      return {
        ...state,
        computedStyleCssText: action.payload
      };

    default:
      return state;
  }
}
