import React from "react";

export default class Range extends React.Component {
  state = {
    title: this.props.title,
    min: this.props.min,
    max: this.props.max,
    defaultValue: this.props.defaultValue,
    id: this.props.id,
    step: "1",
    value: this.props.defaultValue
  };

  componentDidMount() {
    if (this.props.step) {
      this.setState({
        step: this.props.step
      });
    }
  }

  onRangeChange = e => {
    console.log(e.target.value);
    this.setState({
      value: e.target.value
    });
  };

  render() {
    const { title, min, max, defaultValue, id, step, value } = this.state;

    return (
      <React.Fragment>
        <p>
          {title}: {value}
        </p>
        <input
          type="range"
          min={min}
          max={max}
          defaultValue={defaultValue}
          step={step}
          className="range"
          id={id}
          value={value}
          onChange={this.onRangeChange}
        />
      </React.Fragment>
    );
  }
}
