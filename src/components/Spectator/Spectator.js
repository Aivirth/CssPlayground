import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { getStyles } from "../../Redux/actions/actorActions";
import { objectIsEmpty } from "../../helpers/helpers";

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
        document.getElementById("Actor").style
      )
    });
  }

  getAllProperties = e => {
    const childNodes = [...this.propertiesList.childNodes].filter(
      node => node.className === "collection-item"
    );

    console.log(childNodes);

    const childValues = childNodes.map(node => node.innerText);

    console.log(childValues);

    const formattedValues = childValues.join("");

    console.log(formattedValues);

    this.clipboard.value = formattedValues;

    this.clipboard.select();
    document.execCommand("copy");
  };

  componentDidUpdate(prevProps) {
    if (this.props !== prevProps) {
      this.setState({
        actorStyles: this.formatComputedStyle(
          document.getElementById("Actor").style
        )
      });
    }
  }

  render() {
    const currentActorStyles = { ...this.state.actorStyles };

    let cssProperties = [];

    if (!objectIsEmpty(currentActorStyles)) {
      for (const key in currentActorStyles) {
        cssProperties.push({
          name: key,
          value: currentActorStyles[key]
        });
      }
    }

    return (
      <React.Fragment>
        <ul
          className="collection with-header"
          ref={propertiesList => {
            this.propertiesList = propertiesList;
          }}
          id="Spectator"
        >
          <li className="collection-header">
            <h4>Spectator Data</h4>
          </li>
          {cssProperties.map((property, index) => (
            <li className="collection-item" key={`css_property_${index}`}>
              <strong>{property.name}</strong> : {property.value}; <br />
            </li>
          ))}
        </ul>
        <button onClick={this.getAllProperties}>Test</button>
        <textarea
          ref={clipboard => {
            this.clipboard = clipboard;
          }}
          name="spectator"
          id="spectatorClipboard"
          cols="30"
          rows="70"
        />
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  actor: state.actor
});

export default connect(
  mapStateToProps,
  { getStyles }
)(Spectator);
