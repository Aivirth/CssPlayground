import React from "react";

export default props => {
  const { changed, id, identifier, value } = props;
  return (
    <React.Fragment>
      <label htmlFor={identifier}>
        Color: {value}
        {"   "}
      </label>
      <input
        type="color"
        id={id}
        name={id}
        onChange={changed}
        data-identifier={identifier}
        value={value}
      />
    </React.Fragment>
  );
};
