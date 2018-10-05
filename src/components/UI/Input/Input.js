import React from "react";
import ColorPicker from "./ColorPicker/ColorPicker";
import Select from "./Select/Select";
import Range from "./Range/Range";
import Switch from "./Switch/Switch";

export default props => {
  const {
    value,
    inputType,
    elementConfig,
    dataSets,
    htmlProperties,
    changed
  } = props;

  let inputElement = null;

  switch (inputType) {
    case "range":
      inputElement = (
        <Range
          value={value}
          htmlProperties={htmlProperties}
          label={elementConfig.label}
          dataSets={dataSets}
          onChange={changed}
        />
      );
      break;

    case "color":
      inputElement = (
        <ColorPicker
          value={value}
          htmlProperties={htmlProperties}
          label={elementConfig.label}
          dataSets={dataSets}
          onChange={changed}
        />
      );
      break;

    case "select":
      <Select
        value={value}
        htmlProperties={htmlProperties}
        dataSets={dataSets}
        label={elementConfig.label}
        values={elementConfig.options}
        onChange={changed}
      />;

      break;

    case "switch":
      <Switch
        value={value}
        htmlProperties={htmlProperties}
        dataSets={dataSets}
        label={elementConfig.label}
        onChange={changed}
      />;

      break;

    default:
      inputElement = <div>Input type not recognized by application</div>;
  }

  return inputElement;
};
