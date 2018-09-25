import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

export default () => {
  return (
    <div className="col s4">
      <ul
        id="nav-mobile"
        className="sidenav "
        style={{
          overflow: "auto",
          transform: "translateX(0px)",
          position: "static",
          display: "inline-block",
          height: "calc(100vh - 70px)",
          paddingBottom: "0px"
        }}
      >
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
    </div>
  );
};
