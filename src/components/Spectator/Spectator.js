import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { getStyles } from "../../Redux/actions/actorActions";

class Spectator extends PureComponent {
  state = {
    actorStyles: {}
  };

  formatComputedStyle = domStyles => {
    const styles = { ...domStyles };

    const computedStyles = {
      "background-color": styles.backgroundColor,
      width: styles.width,
      height: styles.height,
      "box-shadow": styles.boxShadow,
      "border-top-left-radius": styles.borderTopLeftRadius,
      "border-top-right-radius": styles.borderTopRightRadius,
      "border-bottom-left-radius": styles.borderBottomLeftRadius,
      "border-bottom-right-radius": styles.borderBottomRightRadius,
      border: styles.border
    };

    return computedStyles;
  };

  componentDidMount() {
    this.props.getStyles();

    this.setState({
      actorStyles: this.formatComputedStyle(
        window.getComputedStyle(document.getElementById("Actor"))
      )
    });
  }

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      this.setState({
        actorStyles: this.formatComputedStyle(
          window.getComputedStyle(document.getElementById("Actor"))
        )
      });
    }
  }

  render() {
    const currentActorStyles = { ...this.state.actorStyles };

    let cssProperties = [];

    for (const key in currentActorStyles) {
      cssProperties.push({
        name: key,
        value: currentActorStyles[key]
      });
    }

    return (
      <ul className="collection with-header">
        <li className="collection-header">
          <h4>Spectator Data</h4>
        </li>
        {cssProperties.map((property, index) => (
          <li className="collection-item" key={`css_property_${index}`}>
            <strong>{property.name}</strong> : {property.value}; <br />
          </li>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  baseStyle: state.actor.baseStyle,
  borders: state.actor.borders,
  boxShadow: state.actor.boxShadow,
  borderRadius: state.actor.borderRadius
});

export default connect(
  mapStateToProps,
  { getStyles }
)(Spectator);
