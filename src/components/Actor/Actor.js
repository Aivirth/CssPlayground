import React, { Component } from "react";

import { connect } from "react-redux";
import { getStyles } from "../../Redux/actions/actorActions";

class Actor extends Component {
  componentDidMount() {
    this.props.getStyles();
    console.log(this.props);
  }

  render() {
    const actorStylesFromProps = this.props.styles;

    let borderRadius = {};

    for (const key in actorStylesFromProps.borderRadius) {
      let combinedRadii = `${
        actorStylesFromProps.borderRadius[key].radiusX
      }px ${actorStylesFromProps.borderRadius[key].radiusY}px`;
      borderRadius[key] = combinedRadii;
    }

    const styles = {
      backgroundColor: actorStylesFromProps.backgroundColor,
      width: actorStylesFromProps.width + "px",
      height: actorStylesFromProps.height + "px",
      margin: actorStylesFromProps.margin,
      border: `${actorStylesFromProps.border.borderWidth}px ${
        actorStylesFromProps.border.borderStyle
      } ${actorStylesFromProps.border.borderColor}`,
      borderTopLeftRadius: borderRadius.borderTopLeftRadius,
      borderTopRightRadius: borderRadius.borderTopRightRadius,
      borderBottomLeftRadius: borderRadius.borderBottomLeftRadius,
      borderBottomRightRadius: borderRadius.borderBottomRightRadius
    };

    return <div id="Actor" style={styles} />;
  }
}

const mapStateToProps = state => ({
  styles: state.actor.actorStyle
});

export default connect(
  mapStateToProps,
  { getStyles }
)(Actor);
