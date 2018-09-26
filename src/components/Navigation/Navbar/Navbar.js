import React from "react";
import { Link } from "react-router-dom";
import BottomModal from "../../../containers/Layout/BottomModal/BottomModal";
import Spectator from "../../Spectator/Spectator";

export default () => {
  return (
    <nav>
      <div className="nav-wrapper container">
        <ul className="left">
          <li>
            <a
              href=""
              onClick={e => {
                e.preventDefault();
              }}
              className="waves-effect waves-light orange darken-2 btn-small sidenav-trigger"
              data-target="slide-out"
              style={{ display: "inline-block" }}
            >
              <i className="material-icons left">build</i>
              Options
            </a>
          </li>
          <li>
            <BottomModal
              buttonText="Styles"
              id="bottom"
              header="Modal header test"
              additionalBtnClasses="light-blue lighten-2"
            >
              <Spectator />
            </BottomModal>
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
