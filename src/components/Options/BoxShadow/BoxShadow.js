import React, { Component } from "react";
import Range from "../../UI/Input/Range/Range";

import { connect } from "react-redux";
import { getStyles } from "../../../Redux/actions/actorActions";

class BoxShadow extends Component {
  state = {};

  componentDidMount() {
    this.props.getStyles();
    console.log("BoxShadow", this.props);
  }

  onRangeChange = e => {
    console.log(e.target.value);
    console.log(e.target.id);
    e.target.value = e.target.value;
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
          defaultValue={opacity}
          step="0.1"
          id="idrangetest"
          changed={this.onRangeChange}
        />
        <Range
          title="Horizontal Height"
          min="1"
          max="200"
          defaultValue={horizontalOffset}
          step="1"
          id="idrangetest2"
          changed={this.onRangeChange}
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
  { getStyles }
)(BoxShadow);
