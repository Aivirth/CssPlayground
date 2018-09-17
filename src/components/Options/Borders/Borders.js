import React, { PureComponent } from "react";
import Range from "../../UI/Input/Range/Range";
import ColorPicker from "../../UI/Input/ColorPicker/ColorPicker";
import Select from "../../UI/Input/Select/Select";

import { connect } from "react-redux";
import { getStyles, updtBorders } from "../../../Redux/actions/actorActions";

class Borders extends PureComponent {
  state = {};

  componentDidMount() {
    this.props.getStyles();
  }

  onRangeChange = e => {
    const updatedProperty = {
      ...this.props.borderStyle
    };

    updatedProperty[e.target.dataset.identifier] = +e.target.value;
    this.props.updtBorders(updatedProperty);
  };

  onSelectChange = e => {
    const updatedProperty = {
      ...this.props.borderStyle
    };

    updatedProperty.activeBorderStyle = e.target.value;

    this.props.updtBorders(updatedProperty);
  };

  onColorChange = e => {
    const updatedProperty = {
      ...this.props.borderStyle
    };
    updatedProperty[e.target.dataset.identifier] = e.target.value;
    this.props.updtBorders(updatedProperty);
  };

  render() {
    const { borderWidth, borderStyle, borderColor } = this.props.borderStyle;

    return (
      <div>
        <h4>Borders</h4>
        <Range
          title="Borders Width"
          min="0"
          max="20"
          value={borderWidth}
          id="borders_width"
          changed={this.onRangeChange}
          identifier="borderWidth"
        />

        <Select
          title="Borders Style"
          values={borderStyle}
          changed={this.onSelectChange}
          identifier="borderStyle"
        />

        <div style={{ marginTop: "15px", marginBottom: "15px" }} />

        <ColorPicker
          identifier="borderColor"
          changed={this.onColorChange}
          value={borderColor}
          id="bordersColorPicker"
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  borderStyle: state.actor.borderStyle
});

export default connect(
  mapStateToProps,
  { getStyles, updtBorders }
)(Borders);
