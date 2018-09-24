import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <ul
      id="nav-mobile"
      className="sidenav"
      style={{
        overflow: "auto",
        transform: "translateX(0px)",
        position: "static",
        display: "inline-block",
        height: "calc(100vh - 64px)"
      }}
    >
      <li className="no-padding">
        <ul className="collapsible collapsible-accordion">
          <li className="bold active">
            <a
              className="collapsible-header waves-effect waves-teal"
              tabIndex="0"
            >
              Lorem
            </a>
            <div className="collapsible-body" style={{ display: "block" }}>
              <ul>
                <li>
                  <Link to="/">Base</Link>
                </li>
                <li>
                  <Link to="/border-radius">Border Radius</Link>
                </li>
                <li>
                  <Link to="/box-shadow">Box Shadow</Link>
                </li>
                <li>
                  <Link to="/borders">Borders</Link>
                </li>
                {/* <li className="active">
                  <Link to="/temp">lorem</Link>
                </li> */}
              </ul>
            </div>
          </li>
        </ul>
      </li>

      <li className="bold">
        <a href="/" className="waves-effect waves-teal">
          Lorem
        </a>
      </li>
      <li className="bold">
        <a href="/" className="waves-effect waves-teal">
          Lorem
          <span className="new badge" />
        </a>
      </li>
    </ul>
  );
};
