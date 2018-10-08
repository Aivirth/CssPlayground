import React from "react";

export default props => {
  const {
    label,
    id,
    value,
    changed,
    identifier,
    radiusDir,
    htmlProperties
  } = props;

  return (
    <React.Fragment>
      <label>
        {label}: <strong>{value}</strong>
      </label>
      <input
        className="range"
        id={id}
        value={value}
        onChange={changed}
        data-identifier={identifier}
        data-radiusdir={radiusDir}
        {...htmlProperties}
      />
    </React.Fragment>
  );
};
