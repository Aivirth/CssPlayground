import React from "react";

export default props => {
  const { title, values, changed, identifier } = props;
  return (
    <div>
      <label>{title}</label>
      <select
        onChange={changed}
        data-identifier={identifier}
        style={{ display: "block" }}
      >
        {values.map(el => (
          <option key={el.value} value={el.value}>
            {el.name}
          </option>
        ))}
      </select>
    </div>
  );
};
