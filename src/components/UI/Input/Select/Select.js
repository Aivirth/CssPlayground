import React from "react";

export default props => {
  const { elementConfig, label, changed, identifier, htmlProperties } = props;
  return (
    <div>
      <label>{label}</label>
      <select
        onChange={changed}
        data-identifier={identifier}
        style={{ display: "block" }}
        {...htmlProperties}
      >
        {elementConfig.options.map(el => (
          <option key={el.value} value={el.value}>
            {el.name}
          </option>
        ))}
      </select>
    </div>
  );
};
