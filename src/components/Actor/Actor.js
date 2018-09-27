import React, { Component } from "react";

import { connect } from "react-redux";
import { getStyles, updtStyleCssText } from "../../Redux/actions/actorActions";

class Actor extends Component {
  state = {
    styles: {}
  };

  formatComputedStyleCssTextFromProps = () => {
    //todo - Repetition to address
    const borderStyle = this.props.borderStyle;
    const baseStyle = this.props.baseStyle;
    const borderRadiusRaw = this.props.borderRadius;
    const boxShadow = this.props.boxShadow;

    const hexColor = this.hexToRgb(boxShadow.color);
    hexColor.push(boxShadow.opacity);
    const computedBoxShadowColor = hexColor.join(",");

    const borderRadius = this.formatBorderRadius(borderRadiusRaw);

    const computedStyles = {
      "background-color": baseStyle.backgroundColor,
      border: `${borderStyle.borderWidth}px ${borderStyle.activeBorderStyle} ${
        borderStyle.borderColor
      }`,
      width: baseStyle.width + "px",
      " height": baseStyle.height + "px",
      "box-shadow": `${boxShadow.horizontalOffset}px ${
        boxShadow.verticalOffset
      }px ${boxShadow.blur}px ${
        boxShadow.spread
      }px rgba(${computedBoxShadowColor}) ${boxShadow.inset}`,
      "border-top-left-radius": borderRadius.borderTopLeftRadius,
      "border-top-right-radius": borderRadius.borderTopRightRadius,
      "border-bottom-left-radius": borderRadius.borderBottomLeftRadius,
      "border-bottom-right-radius": borderRadius.borderBottomRightRadius
    };

    return computedStyles;
  };

  mapStateToStyles = () => {
    const borderStyle = this.props.borderStyle;
    const baseStyle = this.props.baseStyle;
    const borderRadiusRaw = this.props.borderRadius;
    const boxShadow = this.props.boxShadow;

    const hexColor = this.hexToRgb(boxShadow.color);
    hexColor.push(boxShadow.opacity);
    const computedBoxShadowColor = hexColor.join(",");

    const borderRadius = this.formatBorderRadius(borderRadiusRaw);

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

    return styles;
  };

  componentDidMount() {
    this.props.getStyles();
    this.props.updtStyleCssText(this.formatComputedStyleCssTextFromProps());

    const styles = this.mapStateToStyles();

    this.setState({ styles: styles });
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      // this.props.updtStyleCssText(this.formatComputedStyleCssTextFromProps());
      const styles = this.mapStateToStyles();

      this.setState({ styles: styles });
    }
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

  formatBorderRadius = borderRadiusRaw => {
    const formattedBorderRadius = {};
    for (const key in borderRadiusRaw) {
      let combinedRadii = `${borderRadiusRaw[key].radiusX}px ${
        borderRadiusRaw[key].radiusY
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
        style={this.state.styles}
      />
    );
  }
}

const mapStateToProps = state => ({
  baseStyle: state.actor.baseStyle,
  borderStyle: state.actor.borderStyle,
  boxShadow: state.actor.boxShadow,
  borderRadius: state.actor.borderRadius,
  computedStyleCssText: state.actor.computedStyleCssText
});

export default connect(
  mapStateToProps,
  { getStyles, updtStyleCssText }
)(Actor);
