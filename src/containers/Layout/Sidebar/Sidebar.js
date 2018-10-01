import React, { PureComponent } from "react";
import M from "materialize-css";

export default class BottomModal extends PureComponent {
  componentDidMount() {
    M.Sidenav.init(this.sidenav);
  }
  render() {
    const { id, icon, buttonText, additionalBtnClasses } = this.props;
    return (
      <React.Fragment>
        <a
          href=""
          onClick={e => {
            e.preventDefault();
          }}
          className={`waves-effect waves-light orange darken-2 btn-small sidenav-trigger ${additionalBtnClasses}`}
          data-target={`${id}`}
          style={{ display: "inline-block" }}
        >
          {icon ? <i className="material-icons left">{icon}</i> : null}
          {buttonText}
        </a>

        <ul
          id={`${id}`}
          className="sidenav "
          ref={sidenav => {
            this.sidenav = sidenav;
          }}
        >
          {this.props.children}
        </ul>
      </React.Fragment>
    );
  }
}
