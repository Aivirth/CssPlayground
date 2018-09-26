import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { getStyles } from "../../Redux/actions/actorActions";

class Spectator extends PureComponent {
  formatComputedStyleCssTextFromProps = () => {
    const cssTextRaw = this.props.computedStyleCssText;

    const cssText = cssTextRaw.split(";");
    const cssTextEmptySpaceTrimmed = cssText.map(el => el.trim());
    const cssTextPropertiesArrays = cssTextEmptySpaceTrimmed
      .filter(el => el !== "")
      .map(property => property.split(": "));

    const cssTextPropertiesFlattenedArrays = [];

    cssTextPropertiesArrays.forEach(
      el => (cssTextPropertiesFlattenedArrays[el[0]] = el[1])
    );

    console.log(cssText);
    console.log(cssTextEmptySpaceTrimmed);
    console.log(cssTextPropertiesArrays);
    console.log(cssTextPropertiesFlattenedArrays);

    const borderRadius = cssTextPropertiesFlattenedArrays[
      "border-radius"
    ].split(" ");
    console.log(borderRadius);

    //handling of each Border Radius case
  };

  componentDidMount() {
    this.props.getStyles();
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      if (this.props.computedStyleCssText !== "") {
        this.formatComputedStyleCssTextFromProps();
      }
    }
  }
  render() {
    return <div>Spectator Data : </div>;
  }
}

const mapStateToProps = state => ({
  computedStyleCssText: state.actor.computedStyleCssText
});

export default connect(
  mapStateToProps,
  { getStyles }
)(Spectator);
