import React, { PureComponent } from "react";
import Input from "../../UI/Input/Input";

import { connect } from "react-redux";
import { getStyles, updtBoxShadow } from "../../../Redux/actions/actorActions";

class BoxShadow extends PureComponent {
  state = {};

  componentDidMount() {
    this.props.getStyles();
  }

  onInputChangeHandler = (e, elementKey) => {
    const updatedState = {
      ...this.props.boxShadow
    };
    const updatedProperty = {
      ...updatedState[elementKey]
    };

    if (
      e.target.type === "checkbox" &&
      e.target.dataset.switch === "isSwitch"
    ) {
      if (e.target.checked) {
        e.target.value = "inset";
      } else {
        e.target.value = "";
      }
    }

    updatedProperty.value = e.target.value;
    updatedState[elementKey] = updatedProperty;

    this.props.updtBoxShadow(updatedState);
  };

  render() {
    let elementsFromPropsAsArray = [];

    for (let key in this.props.boxShadow) {
      elementsFromPropsAsArray.push({
        id: key,
        config: this.props.boxShadow[key]
      });
    }

    return (
      <div>
        <h4>Box Shadows</h4>
        <div className="section">
          {elementsFromPropsAsArray.map(element => {
            const {
              htmlProperties,
              elementConfig,
              value,
              dataSets,
              inputType
            } = element.config;

            return (
              <Input
                key={element.id}
                htmlProperties={htmlProperties}
                value={value}
                label={elementConfig.label}
                dataSets={dataSets}
                inputType={inputType}
                changed={event => this.onInputChangeHandler(event, element.id)}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  boxShadow: state.actor.boxShadow
});

export default connect(
  mapStateToProps,
  { getStyles, updtBoxShadow }
)(BoxShadow);
