import React, { Component } from "react";

export default class Actor extends Component {
  state = {
    width: "300",
    height: "300"
  };

  render() {
    const styles = {
      backgroundColor: "orangered",
      border: "2px solid blue",
      width: this.state.width + "px",
      height: this.state.height + "px",
      margin: "auto"
    };

    return <div id="Actor" style={styles} />;
  }
}
