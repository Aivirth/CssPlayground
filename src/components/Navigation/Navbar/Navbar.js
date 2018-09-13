import React from "react";

export default () => {
  return (
    <nav style={{ flex: "0 0 100%" }}>
      <div className="nav-wrapper container">
        <a href="/" className="brand-logo ">
          CSS PlayGround
        </a>
        <ul className="right hide-on-med-and-down">
          <li>
            <a href="/">About</a>
          </li>
          <li className="active">
            <a href="/">Github</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
