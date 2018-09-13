import React, { Component } from "react";
import Range from "../../UI/Input/Range/Range";

export default class BoxShadow extends Component {
  render() {
    return (
      <div>
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
