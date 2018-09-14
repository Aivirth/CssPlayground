import React, { Component } from "react";

import { connect } from "react-redux";
import { getStyles } from "../../Redux/actions/actorActions";

class Actor extends Component {
  componentDidMount() {
    this.props.getStyles();
    console.log(this.props);
  }

  render() {
    const styles = {
      backgroundColor: this.props.styles.backgroundColor,
      width: this.props.styles.width + "px",
      height: this.props.styles.height + "px",
      margin: this.props.styles.margin,
      border: `${this.props.styles.border.borderWidth}px ${
        this.props.styles.border.borderStyle
      } ${this.props.styles.border.borderColor}`
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
