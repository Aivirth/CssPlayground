import React, { Component } from "react";

import { connect } from "react-redux";
import { getStyles } from "../../Redux/actions/actorActions";

class Actor extends Component {
  componentDidMount() {
    this.props.getStyles();
    // console.log(this.props);
  }

  hexToRgb = hex => {
    let r = null;
    // long version
    r = hex.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i);
    if (r) {
      return r.slice(1, 4).map(x => parseInt(x, 16));
    }
    // short version
    r = hex.match(/^#([0-9a-f])([0-9a-f])([0-9a-f])$/i);
    if (r) {
      return r.slice(1, 4).map(x => 0x11 * parseInt(x, 16));
    }

    return r;
  };

  render() {
    const borderStyle = this.props.borderStyle;
    const baseStyle = this.props.baseStyle;
    const borderRadiusRaw = this.props.borderRadius;
    const boxShadow = this.props.boxShadow;

    const hexColor = this.hexToRgb(boxShadow.color);
    hexColor.push(boxShadow.opacity);
    const computedBoxShadowColor = hexColor.join(",");

    const borderRadius = {};
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

      border: `${borderStyle.borderWidth}px ${borderStyle.activeBorderStyle} ${
        borderStyle.borderColor
      }`,

      borderTopLeftRadius: borderRadius.borderTopLeftRadius,
      borderTopRightRadius: borderRadius.borderTopRightRadius,
      borderBottomLeftRadius: borderRadius.borderBottomLeftRadius,
      borderBottomRightRadius: borderRadius.borderBottomRightRadius,

      boxShadow: `${boxShadow.horizontalOffset}px ${
        boxShadow.verticalOffset
      }px ${boxShadow.blur}px ${
        boxShadow.spread
      }px rgba(${computedBoxShadowColor}) ${boxShadow.inset}`
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
