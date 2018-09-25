import React, { PureComponent } from "react";
import { Link } from "react-router-dom";
import M from "materialize-css";

export default class Sidenav extends PureComponent {
  componentDidMount() {
    M.Sidenav.init(this.sidenav);
  }
  render() {
    return (
      <ul
        id="slide-out"
        className="sidenav"
        ref={sidenav => {
          this.sidenav = sidenav;
        }}
      >
        <li className="sidenav-close">
          <Link to="/">Base</Link>
        </li>
        <li className="sidenav-close">
          <Link to="/border-radius">Border Radius</Link>
        </li>
        <li className="sidenav-close">
          <Link to="/box-shadow">Box Shadow</Link>
        </li>
        <li className="sidenav-close">
          <Link to="/borders">Borders</Link>
        </li>
      </ul>
    );
  }
}
