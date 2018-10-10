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
    e.preventDefault();
    const childNodes = [...this.propertiesList.childNodes].filter(
      node => node.className === "collection-item"
    );

    const childValues = childNodes.map(node => node.innerText);

    const formattedValues = childValues.join("");

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
        <div className="card" style={{ margin: "0" }}>
          <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">
              Styles
              <i className="material-icons right">more_vert</i>
            </span>

            <ul
              className="collection with-header"
              ref={propertiesList => {
                this.propertiesList = propertiesList;
              }}
              id="Spectator"
              style={{ width: "100%" }}
            >
              {cssProperties.map((property, index) => (
                <li className="collection-item" key={`css_property_${index}`}>
                  <strong>{property.name}</strong> : {property.value}; <br />
                </li>
              ))}
            </ul>
            <a
              onClick={this.getAllProperties}
              href="#/"
              className="waves-effect waves-light btn green accent-4 activator"
              style={{ display: "block" }}
            >
              Copy To Clipboard
              <i className="material-icons right">content_copy</i>
            </a>
          </div>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">
              Styles copied
              <i className="material-icons right">close</i>
            </span>
            <p>
              <textarea
                ref={clipboard => {
                  this.clipboard = clipboard;
                }}
                style={{
                  height: "20rem"
                }}
                name="spectator"
                id="spectatorClipboard"
                // cols="70"
                rows="70"
              />
            </p>
          </div>
        </div>
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
