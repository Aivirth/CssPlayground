import React, { PureComponent } from "react";
import M from "materialize-css";

export default class BottomModal extends PureComponent {
  componentDidMount() {
    M.Modal.init(this.bottomModal);
  }
  render() {
    const { id, header, buttonText, additionalBtnClasses } = this.props;
    return (
      <React.Fragment>
        <a
          className={`waves-effect waves-light btn modal-trigger ${additionalBtnClasses}`}
          href={`#${id}`}
        >
          {buttonText}
        </a>
        <div
          ref={bottomModal => {
            this.bottomModal = bottomModal;
          }}
          id={`${id}`}
          className="modal bottom-sheet"
        >
          <div className="container">
            <div className="modal-content">
              <h4>{`${header}`}</h4>
              <div>{this.props.children}</div>
            </div>
            <div className="modal-footer" style={{ height: "auto" }}>
              <a
                href=""
                onClick={e => {
                  e.preventDefault();
                }}
                className="modal-close waves-effect waves-light btn-large"
              >
                <i className="material-icons right">check_circle</i>
                Close
              </a>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
