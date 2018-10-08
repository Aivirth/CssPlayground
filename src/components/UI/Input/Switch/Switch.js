import React from "react";

export default props => {
  const { changed, identifier, value, htmlProperties } = props;

  return (
    <div className="switch">
      <label>
        Outline
        <input
          onChange={changed}
          data-identifier={identifier}
          value={value}
          {...htmlProperties}
          data-switch="isSwitch"
        />
        <span className="lever" />
        Inset
      </label>
    </div>
  );
};
