import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getStyles,
  updtBorderRadius
} from "../../../Redux/actions/actorActions";
import Range from "../../UI/Input/Range/Range";

class BorderRadius extends Component {
  componentDidMount() {
    this.props.getStyles();
  }

  onRangeChange = e => {
    const updatedProperty = {
      ...this.props.borderRadius
    };
    console.log(updatedProperty);
    const radiusDir= e.target.dataset.radiusdir;
    console.log(radiusDir)
    

    updatedProperty[e.target.dataset.identifier][radiusDir]= +e.target.value;
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
        <Range
          title="Border Top-Left (X radius)"
          min="0"
          max="300"
          value={borderTopLeftRadius.radiusX}
          id="btl__x_radius"
          changed={this.onRangeChange}
          identifier="borderTopLeftRadius"
          radiusDir="radiusX"
        />
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
