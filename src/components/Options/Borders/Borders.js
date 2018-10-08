import React, { PureComponent } from "react";
import Input from "../../UI/Input/Input";

import { connect } from "react-redux";
import { getStyles, updtBorders } from "../../../Redux/actions/actorActions";

class Borders extends PureComponent {
  state = {};

  componentDidMount() {
    this.props.getStyles();
  }

  onInputChangeHandler = (e, elementKey) => {
    const updatedState = {
      ...this.props.borders
    };
    const updatedProperty = {
      ...updatedState[elementKey]
    };

    updatedProperty.value = e.target.value;
    updatedState[elementKey] = updatedProperty;

    this.props.updtBorders(updatedState);
  };

  render() {
    let elementsFromPropsAsArray = [];

    for (let key in this.props.borders) {
      elementsFromPropsAsArray.push({
        id: key,
        config: this.props.borders[key]
      });
    }

    return (
      <div>
        <h4>Borders</h4>
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
                elementConfig={elementConfig}
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
  borders: state.actor.borders
});

export default connect(
  mapStateToProps,
  { getStyles, updtBorders }
)(Borders);
