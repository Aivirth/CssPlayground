import React, { Component } from "react";

import { connect } from "react-redux";
import { getStyles } from "../../Redux/actions/actorActions";

class Actor extends Component {
  componentDidMount() {
    this.props.getStyles();
    console.log(this.props);
  }

  render() {
    const borderStyle = this.props.borderStyle;
    const baseStyle = this.props.baseStyle;
    const borderRadiusRaw = this.props.borderRadius;

    let borderRadius = {};

    for (const key in borderRadiusRaw) {
      let combinedRadii = `${borderRadiusRaw[key].radiusX}px ${
        borderRadiusRaw[key].radiusY
      }px`;
      borderRadius[key] = combinedRadii;
    }

    const styles = {
      backgroundColor: baseStyle.backgroundColor,
      width: baseStyle.width + "px",
      height: baseStyle.height + "px",
      margin: baseStyle.margin,

      border: `${borderStyle.borderWidth}px ${borderStyle.borderStyle} ${
        borderStyle.borderColor
      }`,

      borderTopLeftRadius: borderRadius.borderTopLeftRadius,
      borderTopRightRadius: borderRadius.borderTopRightRadius,
      borderBottomLeftRadius: borderRadius.borderBottomLeftRadius,
      borderBottomRightRadius: borderRadius.borderBottomRightRadius
    };

    return <div id="Actor" style={styles} />;
  }
}

const mapStateToProps = state => ({
  baseStyle: state.actor.baseStyle,
  borderStyle: state.actor.borderStyle,
  boxShadow: state.actor.boxShadow,
  borderRadius: state.actor.borderRadius
});

export default connect(
  mapStateToProps,
  { getStyles }
)(Actor);
