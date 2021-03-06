import React, { PureComponent } from "react";

import M from "materialize-css";

import { connect } from "react-redux";
import {
  getStyles,
  updtBorderRadius
} from "../../../Redux/actions/actorActions";
import Range from "../../UI/Input/Range/Range";

class BorderRadius extends PureComponent {
  componentDidMount() {
    this.props.getStyles();
    M.Collapsible.init(this.collapse);
  }

  onRangeChange = e => {
    const updatedProperty = {
      ...this.props.borderRadius
    };

    const radiusDir = e.target.dataset.radiusdir;

    updatedProperty[e.target.dataset.identifier][radiusDir] = +e.target.value;
    this.props.updtBorderRadius(updatedProperty);
  };

  render() {
    const {
      borderTopLeftRadius,
      borderTopRightRadius,
      borderBottomLeftRadius,
      borderBottomRightRadius
    } = this.props.borderRadius;

    return (
      <div>
        <h4>Border Radius</h4>
        <ul
          className="collapsible"
          ref={collapse => {
            this.collapse = collapse;
          }}
        >
          <li className="active">
            <div className="collapsible-header">
              <strong>Border Top-Left</strong>
            </div>
            <div className="collapsible-body">
              <Range
                title="X Radius"
                min="0"
                max="300"
                value={borderTopLeftRadius.radiusX}
                id="btl__x_radius"
                changed={this.onRangeChange}
                identifier="borderTopLeftRadius"
                radiusDir="radiusX"
              />
              <Range
                title="Y Radius"
                min="0"
                max="300"
                value={borderTopLeftRadius.radiusY}
                id="btl__y_radius"
                changed={this.onRangeChange}
                identifier="borderTopLeftRadius"
                radiusDir="radiusY"
              />
            </div>
          </li>

          <li>
            <div className="collapsible-header">
              <strong>Border Top-Right</strong>
            </div>
            <div className="collapsible-body">
              <Range
                title="X Radius"
                min="0"
                max="300"
                value={borderTopRightRadius.radiusX}
                id="btr__x_radius"
                changed={this.onRangeChange}
                identifier="borderTopRightRadius"
                radiusDir="radiusX"
              />
              <Range
                title="Y Radius"
                min="0"
                max="300"
                value={borderTopRightRadius.radiusY}
                id="btr__y_radius"
                changed={this.onRangeChange}
                identifier="borderTopRightRadius"
                radiusDir="radiusY"
              />
            </div>
          </li>

          <li>
            <div className="collapsible-header">
              <strong>Border Bottom-Right</strong>
            </div>
            <div className="collapsible-body">
              <Range
                title="X Radius"
                min="0"
                max="300"
                value={borderBottomRightRadius.radiusX}
                id="bbr__x_radius"
                changed={this.onRangeChange}
                identifier="borderBottomRightRadius"
                radiusDir="radiusX"
              />
              <Range
                title="Y Radius"
                min="0"
                max="300"
                value={borderBottomRightRadius.radiusY}
                id="bbr__y_radius"
                changed={this.onRangeChange}
                identifier="borderBottomRightRadius"
                radiusDir="radiusY"
              />
            </div>
          </li>

          <li>
            <div className="collapsible-header">
              <strong>Border Bottom-Left</strong>
            </div>
            <div className="collapsible-body">
              <Range
                title="X Radius"
                min="0"
                max="300"
                value={borderBottomLeftRadius.radiusX}
                id="bbl__x_radius"
                changed={this.onRangeChange}
                identifier="borderBottomLeftRadius"
                radiusDir="radiusX"
              />
              <Range
                title="Y Radius"
                min="0"
                max="300"
                value={borderBottomLeftRadius.radiusY}
                id="bbl__y_radius"
                changed={this.onRangeChange}
                identifier="borderBottomLeftRadius"
                radiusDir="radiusY"
              />
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  borderRadius: state.actor.borderRadius
});

export default connect(
  mapStateToProps,
  { getStyles, updtBorderRadius }
)(BorderRadius);
