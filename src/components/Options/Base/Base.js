import React, { PureComponent } from "react";
import Range from "../../UI/Input/Range/Range";
import ColorPicker from "../../UI/Input/ColorPicker/ColorPicker";

import { connect } from "react-redux";
import { getStyles, updtBase } from "../../../Redux/actions/actorActions";

class Base extends PureComponent {
  state = {};

  componentDidMount() {
    this.props.getStyles();
  }

  onRangeChange = e => {
    const updatedProperty = {
      ...this.props.baseStyle
    };

    updatedProperty[e.target.dataset.identifier] = +e.target.value;
    this.props.updtBase(updatedProperty);
  };

  onColorChange = e => {
    const updatedProperty = {
      ...this.props.baseStyle
    };
    updatedProperty[e.target.dataset.identifier] = e.target.value;
    this.props.updtBase(updatedProperty);
  };

  render() {
    const { width, height, backgroundColor } = this.props.baseStyle;
    return (
      <div>
        <h4>Base Styles</h4>
        <Range
          title="Width"
          min="0"
          max="500"
          value={width}
          id="box_width"
          changed={this.onRangeChange}
          identifier="width"
        />

        <Range
          title="Height"
          min="0"
          max="500"
          value={height}
          id="box_height"
          changed={this.onRangeChange}
          identifier="height"
        />

        <ColorPicker
          identifier="backgroundColor"
          changed={this.onColorChange}
          value={backgroundColor}
          id="baseColorPicker"
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  baseStyle: state.actor.baseStyle
});

export default connect(
  mapStateToProps,
  { getStyles, updtBase }
)(Base);
