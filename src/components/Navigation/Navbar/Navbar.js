import React from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <nav>
      <div className="nav-wrapper container">
        <ul className="left">
          <li>
            <a
              href="#"
              className="waves-effect waves-light orange darken-2 btn-small sidenav-trigger"
              data-target="slide-out"
              style={{ display: "inline-block" }}
            >
              <i className="material-icons left">menu</i>
              Menu
            </a>
          </li>
          <li>
            <a href="/" className="brand-logo ">
              CSS PlayGround
            </a>
          </li>
        </ul>

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
