import React, { Component } from "react";
import Range from "../../UI/Input/Range/Range";

export default class BoxShadow extends Component {
  state = {
    verticalOffset: 130,
    horizontalOffset: 130,
    blur: 0,
    spread: 0,
    color: 0,
    opacity: 0.5,
    inset: false
  };

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
    } = this.state;
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
