import React, { PureComponent } from "react";
import M from "materialize-css";

export default class BottomModal extends PureComponent {
  componentDidMount() {
    M.Modal.init(this.bottomModal);
  }
  render() {
    return (
      <React.Fragment>
        <a
          className="waves-effect waves-light btn modal-trigger"
          href="#modal1"
        >
          Modal
        </a>
        <div
          ref={bottomModal => {
            this.bottomModal = bottomModal;
          }}
          id="modal1"
          className="modal bottom-sheet"
        >
          <div className="modal-content">
            <h4>Modal Header</h4>
            <p>A bunch of text</p>
          </div>
          <div className="modal-footer">
            <a
              href="#!"
              className="modal-close waves-effect waves-green btn-flat"
            >
              Agree
            </a>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
