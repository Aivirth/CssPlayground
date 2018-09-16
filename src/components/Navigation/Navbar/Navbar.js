import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <nav style={{ flex: "0 0 100%" }}>
      <div className="nav-wrapper container">
        <a href="/" className="brand-logo ">
          CSS PlayGround
        </a>

        <ul className="right hide-on-med-and-down">
          <li>
            <Link to="/about">About</Link>
          </li>
          <li className="active">
            <a href="/">Github</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
