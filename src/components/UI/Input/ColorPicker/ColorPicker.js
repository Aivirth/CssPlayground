import React from "react";

export default props => {
  const { changed, id, identifier, value, htmlProperties, label } = props;
  return (
    <div>
      <label htmlFor={identifier}>
        {label}: {value}
      </label>
      <input
        {...htmlProperties}
        id={id}
        name={id}
        onChange={changed}
        data-identifier={identifier}
        value={value}
      />
    </div>
  );
};
