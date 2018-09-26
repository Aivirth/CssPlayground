import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { getStyles } from "../../Redux/actions/actorActions";

class Spectator extends PureComponent {
  componentDidMount() {
    this.props.getStyles();
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      if (this.props.computedStyleCssText !== "") {
        const cssTextRaw = this.props.computedStyleCssText;

        const cssText = cssTextRaw.split(";");
        const cssTextCleaned = cssText.map(el => el.trim());
        const cssTextAtomized = cssTextCleaned
          .filter(el => el !== "")
          .map(property => property.split(": "));

        const cssTextProcessed = [];

        cssTextAtomized.forEach(el => (cssTextProcessed[el[0]] = el[1]));

        console.log(cssText);
        console.log(cssTextCleaned);
        console.log(cssTextAtomized);
        console.log(cssTextProcessed);

        const borderRadius = cssTextProcessed["border-radius"];
        console.log(borderRadius);

        //handling of each Border Radius case
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
