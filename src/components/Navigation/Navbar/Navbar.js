import React from "react";
import { Link } from "react-router-dom";
import BottomModal from "../../../containers/Layout/BottomModal/BottomModal";
import Spectator from "../../Spectator/Spectator";
import Sidebar from "../../../containers/Layout/Sidebar/Sidebar";
import Sidenav from "../../Navigation/Sidenav/Sidenav";

export default () => {
  return (
    <nav>
      <div className="nav-wrapper container">
        <ul className="left">
          <li>
            <Sidebar id="options_sidebar" icon="build" buttonText="Options">
              <Sidenav />
            </Sidebar>
          </li>
          <li>
            <Sidebar
              buttonText="Styles"
              id="styles_sidebar"
              header="Modal header test"
              icon="developer_mode"
              additionalBtnClasses="light-blue lighten-2"
            >
              <Spectator />
            </Sidebar>
          </li>
          <li>
            <Link
              to="/"
              style={{ fontSize: "2rem", padding: "0px 5px" }}
              className="center brand-logo"
            >
              CSS PlayGround
            </Link>
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
