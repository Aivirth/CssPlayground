import React from "react";

export default props => {
  const { changed, identifier, value } = props;

  return (
    <div className="switch">
      <label>
        Outline
        <input
          type="checkbox"
          onChange={changed}
          data-identifier={identifier}
          value={value}
        />
        <span className="lever" />
        Inset
      </label>
    </div>
  );
};
