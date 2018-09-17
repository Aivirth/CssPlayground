import React from "react";

export default props => {
  const {
    title,
    min,
    max,
    id,
    step,
    value,
    changed,
    identifier,
    radiusDir
  } = props;

  return (
    <React.Fragment>
      <label>
        {title}: <strong>{value}</strong>
      </label>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        className="range"
        id={id}
        value={value}
        onChange={changed}
        data-identifier={identifier}
        data-radiusdir={radiusDir}
      />
    </React.Fragment>
  );
};
