import React, { PureComponent } from "react";
import { connect } from "react-redux";
import {
  getStyles,
  updtBorderRadius
} from "../../../Redux/actions/actorActions";
import Range from "../../UI/Input/Range/Range";

class BorderRadius extends PureComponent {
  componentDidMount() {
    this.props.getStyles();
  }

  onRangeChange = e => {
    const updatedProperty = {
      ...this.props.borderRadius
    };
    console.log(updatedProperty);
    const radiusDir = e.target.dataset.radiusdir;
    console.log(radiusDir);

    updatedProperty[e.target.dataset.identifier][radiusDir] = +e.target.value;
    this.props.updtBorderRadius(updatedProperty);
  };

  render() {
    const {
      borderTopLeftRadius,
      borderTopRightRadius,
      borderBottomLeftRadius,
      borderBottomRightRadius
    } = this.props.borderRadius;

    return (
      <div>
        <Range
          title="Border Top-Left (X radius)"
          min="0"
          max="300"
          value={borderTopLeftRadius.radiusX}
          id="btl__x_radius"
          changed={this.onRangeChange}
          identifier="borderTopLeftRadius"
          radiusDir="radiusX"
        />
        <Range
          title="Border Top-Left (Y radius)"
          min="0"
          max="300"
          value={borderTopLeftRadius.radiusY}
          id="btl__y_radius"
          changed={this.onRangeChange}
          identifier="borderTopLeftRadius"
          radiusDir="radiusY"
        />

        <hr style={{ margin: "20px 0" }} />

        <Range
          title="Border Top-Right (X radius)"
          min="0"
          max="300"
          value={borderTopRightRadius.radiusX}
          id="btr__x_radius"
          changed={this.onRangeChange}
          identifier="borderTopRightRadius"
          radiusDir="radiusX"
        />
        <Range
          title="Border Top-Right (Y radius)"
          min="0"
          max="300"
          value={borderTopRightRadius.radiusY}
          id="btr__y_radius"
          changed={this.onRangeChange}
          identifier="borderTopRightRadius"
          radiusDir="radiusY"
        />

        <hr style={{ margin: "20px 0" }} />

        <Range
          title="Border Bottom-Right (X radius)"
          min="0"
          max="300"
          value={borderBottomRightRadius.radiusX}
          id="bbr__x_radius"
          changed={this.onRangeChange}
          identifier="borderBottomRightRadius"
          radiusDir="radiusX"
        />
        <Range
          title="Border Bottom-Right (Y radius)"
          min="0"
          max="300"
          value={borderBottomRightRadius.radiusY}
          id="bbr__y_radius"
          changed={this.onRangeChange}
          identifier="borderBottomRightRadius"
          radiusDir="radiusY"
        />

        <hr style={{ margin: "20px 0" }} />

        <Range
          title="Border Bottom-Left (X radius)"
          min="0"
          max="300"
          value={borderBottomLeftRadius.radiusX}
          id="bbl__x_radius"
          changed={this.onRangeChange}
          identifier="borderBottomLeftRadius"
          radiusDir="radiusX"
        />
        <Range
          title="Border Bottom-Left (Y radius)"
          min="0"
          max="300"
          value={borderBottomLeftRadius.radiusY}
          id="bbl__y_radius"
          changed={this.onRangeChange}
          identifier="borderBottomLeftRadius"
          radiusDir="radiusY"
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  borderRadius: state.actor.borderRadius
});

export default connect(
  mapStateToProps,
  { getStyles, updtBorderRadius }
)(BorderRadius);
