import React, { PureComponent } from "react";
import Input from "../../UI/Input/Input";
import Range from "../../UI/Input/Range/Range";
import ColorPicker from "../../UI/Input/ColorPicker/ColorPicker";

import { connect } from "react-redux";
import { getStyles, updtBase } from "../../../Redux/actions/actorActions";

class Base extends PureComponent {
  state = {};

  componentDidMount() {
    this.props.getStyles();
  }

  onInputChangeHandler = (e, elementKey) => {
    const updatedState = {
      ...this.props.baseStyle
    };
    const updatedProperty = {
      ...updatedState[elementKey]
    };

    updatedProperty.value = e.target.value;
    updatedState[elementKey] = updatedProperty;

    this.props.updtBase(updatedState);
  };

  render() {
    let elementsFromPropsAsArray = [];

    for (let key in this.props.baseStyle) {
      elementsFromPropsAsArray.push({
        id: key,
        config: this.props.baseStyle[key]
      });
    }

    return (
      <div>
        <h4>Base Styles</h4>
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
  baseStyle: state.actor.baseStyle
});

export default connect(
  mapStateToProps,
  { getStyles, updtBase }
)(Base);
