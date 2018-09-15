import React, { Component } from "react";
import Range from "../../UI/Input/Range/Range";

import { connect } from "react-redux";
import { getStyles, updtBoxShadow } from "../../../Redux/actions/actorActions";

class BoxShadow extends Component {
  state = {};

  componentDidMount() {
    this.props.getStyles();
    console.log("BoxShadow", this.props);
  }

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
          title="Opacity"
          min="0"
          max="1"
          value={opacity}
          step="0.1"
          id="idrangetest"
          changed={this.onRangeChange}
          identifier="opacity"
        />
        <Range
          title="Horizontal Height"
          min="1"
          max="200"
          value={horizontalOffset}
          step="1"
          id="idrangetest2"
          changed={this.onRangeChange}
          identifier="horizontalOffset"
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
