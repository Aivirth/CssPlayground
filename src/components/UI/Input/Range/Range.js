import React from "react";

export default props => {
  const { title, min, max, value, id } = props;
  let step = props.step;
  if (!step) {
    step = "1";
  }

  const onRangeChange = () => {
    console.log("changed");
  };

  return (
    <React.Fragment>
      <p>{title}:</p>
      <input
        type="range"
        min={min}
        max={max}
        defaultValue={value}
        step={step}
        className="range"
        id={id}
        onChange={onRangeChange}
      />
      <hr />
    </React.Fragment>
  );
};
