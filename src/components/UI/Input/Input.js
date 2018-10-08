import React from "react";
import ColorPicker from "./ColorPicker/ColorPicker";
import Select from "./Select/Select";
import Range from "./Range/Range";
import Switch from "./Switch/Switch";

export default props => {
  const {
    value,
    inputType,
    label,
    dataSets,
    htmlProperties,
    changed,
    options
  } = props;

  let inputElement = null;

  switch (inputType) {
    case "range":
      inputElement = (
        <Range
          value={value}
          htmlProperties={htmlProperties}
          label={label}
          dataSets={dataSets}
          changed={changed}
        />
      );
      break;

    case "color":
      inputElement = (
        <ColorPicker
          value={value}
          htmlProperties={htmlProperties}
          label={label}
          dataSets={dataSets}
          changed={changed}
        />
      );
      break;

    case "select":
      inputElement = (
        <Select
          value={value}
          htmlProperties={htmlProperties}
          dataSets={dataSets}
          label={label}
          values={options}
          changed={changed}
        />
      );

      break;

    case "switch":
      inputElement = (
        <Switch
          value={value}
          htmlProperties={htmlProperties}
          dataSets={dataSets}
          label={label}
          changed={changed}
        />
      );

      break;

    case "":
      inputElement = <span style={{ display: "none" }} />;
      break;

    default:
      inputElement = <div>Input type not recognized by application</div>;
  }

  return inputElement;
};
