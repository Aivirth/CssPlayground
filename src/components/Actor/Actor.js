import React, { Component } from "react";

import { connect } from "react-redux";
import { getStyles } from "../../Redux/actions/actorActions";

import { hexToRgb } from "../../helpers/helpers";

class Actor extends Component {
  state = {
    styles: {}
  };

  mapStateToStyles = () => {
    const baseStyle = this.props.baseStyle;
    const borders = this.props.borders;
    const borderRadiusRaw = this.props.borderRadius;
    const boxShadow = this.props.boxShadow;

    const hexColor = hexToRgb(boxShadow.color.value);
    hexColor.push(boxShadow.opacity.value);
    const computedBoxShadowColor = hexColor.join(",");

    const borderRadius = this.formatBorderRadius(borderRadiusRaw);

    const styles = {
      backgroundColor: baseStyle.backgroundColor.value,
      width: baseStyle.width.value + "px",
      height: baseStyle.height.value + "px",
      margin: baseStyle.margin.value,

      border: `${borders.borderWidth.value}px ${borders.borderStyle.value} ${
        borders.borderColor.value
      }`,

      borderTopLeftRadius: borderRadius.borderTopLeftRadius,
      borderTopRightRadius: borderRadius.borderTopRightRadius,
      borderBottomLeftRadius: borderRadius.borderBottomLeftRadius,
      borderBottomRightRadius: borderRadius.borderBottomRightRadius,

      boxShadow: `${boxShadow.horizontalOffset.value}px ${
        boxShadow.verticalOffset.value
      }px ${boxShadow.blur.value}px ${
        boxShadow.spread.value
      }px rgba(${computedBoxShadowColor}) ${boxShadow.inset.value}`
    };

    return styles;
  };

  componentDidMount() {
    this.props.getStyles();
  }

  formatBorderRadius = borderRadiusRaw => {
    const formattedBorderRadius = {};
    for (const key in borderRadiusRaw) {
      let combinedRadii = `${borderRadiusRaw[key].radii.radiusX}px ${
        borderRadiusRaw[key].radii.radiusY
      }px`;
      formattedBorderRadius[key] = combinedRadii;
    }

    return formattedBorderRadius;
  };

  render() {
    return (
      <div
        ref={domActor => {
          this.domActor = domActor;
        }}
        id="Actor"
        style={this.mapStateToStyles()}
      />
    );
  }
}

const mapStateToProps = state => ({
  baseStyle: state.actor.baseStyle,
  borders: state.actor.borders,
  boxShadow: state.actor.boxShadow,
  borderRadius: state.actor.borderRadius
});

export default connect(
  mapStateToProps,
  { getStyles }
)(Actor);
