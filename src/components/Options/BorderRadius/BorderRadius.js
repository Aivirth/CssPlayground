import React, { PureComponent } from "react";

import M from "materialize-css";

import { connect } from "react-redux";
import {
  getStyles,
  updtBorderRadius
} from "../../../Redux/actions/actorActions";
import Input from "../../UI/Input/Input";

class BorderRadius extends PureComponent {
  componentDidMount() {
    this.props.getStyles();
    M.Collapsible.init(this.collapse);
  }

  onInputChangeHandler = (e, elementKey, parentElement) => {
    const updatedState = {
      ...this.props.borderRadius
    };
    const updatedProperty = {
      ...updatedState[parentElement].radii
    };

    updatedProperty[elementKey] = +e.target.value;
    updatedState[parentElement].radii[elementKey] = updatedProperty[elementKey];

    this.props.updtBorderRadius(updatedState);
  };

  render() {
    let elementsFromPropsAsArray = [];

    for (let key in this.props.borderRadius) {
      elementsFromPropsAsArray.push({
        id: key,
        config: this.props.borderRadius[key]
      });
    }

    return (
      <div>
        <h4>Border Radius</h4>
        <ul
          className="collapsible"
          ref={collapse => {
            this.collapse = collapse;
          }}
        >
          {elementsFromPropsAsArray.map((element, index) => {
            const {
              htmlProperties,
              elementConfig,
              value,
              dataSets,
              inputType,
              radii
            } = element.config;

            const parsedRadii = [];

            for (let key in radii) {
              parsedRadii.push({
                direction: key,
                value: radii[key]
              });
            }

            return (
              <li key={element.id} className={index === 0 ? "active" : ""}>
                <div className="collapsible-header">
                  <strong>{elementConfig.label}</strong>
                </div>

                <div className="collapsible-body">
                  {parsedRadii.map((radius, index) => (
                    <Input
                      key={`${element.id}__${radius.direction}`}
                      htmlProperties={htmlProperties}
                      value={radius.value}
                      label={radius.direction}
                      dataSets={dataSets}
                      inputType={inputType}
                      changed={event =>
                        this.onInputChangeHandler(
                          event,
                          radius.direction,
                          element.id
                        )
                      }
                    />
                  ))}
                </div>
              </li>
            );
          })}
        </ul>
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
