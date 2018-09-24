import React, { Component } from "react";
import M from "materialize-css";

export default class Test extends Component {
  componentDidMount() {
    M.FloatingActionButton.init(this.floating);
    M.Sidenav.init(this.sidenav);
  }
  render() {
    return (
      <React.Fragment>
        <div
          className="fixed-action-btn"
          ref={floatingActionButton => {
            this.floating = floatingActionButton;
          }}
        >
          <a className="btn-floating btn-large red">
            <i className="large material-icons">mode_edit</i>
          </a>
          <ul>
            <li>
              <a className="btn-floating red">
                <i className="material-icons">insert_chart</i>
              </a>
            </li>
            <li>
              <a className="btn-floating yellow darken-1">
                <i className="material-icons">format_quote</i>
              </a>
            </li>
            <li>
              <a className="btn-floating green">
                <i className="material-icons">publish</i>
              </a>
            </li>
            <li>
              <a className="btn-floating blue">
                <i className="material-icons">attach_file</i>
              </a>
            </li>
          </ul>
        </div>

        <ul
          id="slide-out"
          className="sidenav"
          ref={sidenav => {
            this.sidenav = sidenav;
          }}
        >
          <li>
            <a href="#!">
              <i className="material-icons">cloud</i>
              First Link With Icon
            </a>
          </li>
          <li>
            <a href="#!">Second Link</a>
          </li>
          <li>
            <div className="divider" />
          </li>
          <li>
            <a className="subheader">Subheader</a>
          </li>
          <li>
            <a className="waves-effect" href="#!">
              Third Link With Waves
            </a>
          </li>
        </ul>
      </React.Fragment>
    );
  }
}
