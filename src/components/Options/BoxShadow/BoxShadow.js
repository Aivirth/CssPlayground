import React, { Component } from "react";
import Range from "../../UI/Input/Range/Range";

import { connect } from "react-redux";
import { getStyles, updtBoxShadow } from "../../../Redux/actions/actorActions";

class BoxShadow extends Component {
  state = {};

  componentDidMount() {
    this.props.getStyles();
  }

  onColorChange = () => {};

  onRangeChange = e => {
    const updatedProperty = {
      ...this.props.boxShadow
    };
    updatedProperty[e.target.dataset.identifier] = e.target.value;
    this.props.updtBoxShadow(updatedProperty);
  };

  render() {
    const {
      verticalOffset,
      horizontalOffset,
      blur,
      spread,
      color,
      opacity,
      inset
    } = this.props.boxShadow;
    return (
      <div>
        <Range
          title="Vertical Offset"
          min="0"
          max="200"
          value={verticalOffset}
          id="vertical_offset"
          changed={this.onRangeChange}
          identifier="verticalOffset"
        />
        <Range
          title="Horizontal Offset"
          min="0"
          max="200"
          value={horizontalOffset}
          id="horizontal_offset"
          changed={this.onRangeChange}
          identifier="horizontalOffset"
        />
        <Range
          title="Blur"
          min="0"
          max="200"
          value={blur}
          id="blur"
          changed={this.onRangeChange}
          identifier="blur"
        />
        <Range
          title="Spread"
          min="0"
          max="75"
          value={spread}
          step="1"
          id="spread"
          changed={this.onRangeChange}
          identifier="spread"
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  boxShadow: state.actor.boxShadow
});

export default connect(
  mapStateToProps,
  { getStyles, updtBoxShadow }
)(BoxShadow);
