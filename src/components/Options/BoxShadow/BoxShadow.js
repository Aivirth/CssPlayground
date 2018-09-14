import React, { Component } from "react";
import Range from "../../UI/Input/Range/Range";

export default class BoxShadow extends Component {
  state = {
    verticalOffset: 0,
    horizontalOffset: 0,
    blur: 0,
    spread: 0,
    color: 0,
    opacity: 0,
    inset: false
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
        <h3>
          Box Shadow : `{verticalOffset}
          px {horizontalOffset}
          px {blur}
          px {spread}
          px {color}`
        </h3>

        <Range
          title="Opacity"
          min="0"
          max="1"
          defaultValue="0.5"
          step="0.1"
          id="idrangetest"
        />
        <Range
          title="Horizontal Heigth"
          min="1"
          max="200"
          defaultValue="130"
          step="1"
          id="idrangetest2"
        />
      </div>
    );
  }
}
