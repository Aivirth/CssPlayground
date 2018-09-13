import React from "react";

export default () => {
  return (
    <nav style={{ flex: "0 0 100%" }}>
      <div className="nav-wrapper container">
        <a href="#!" className="brand-logo ">
          Logo
        </a>
        <ul className="right hide-on-med-and-down">
          <li>
            <a href="sass.html">Sass</a>
          </li>
          <li>
            <a href="badges.html">Components</a>
          </li>
          <li className="active">
            <a href="collapsible.html">JavaScript</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
