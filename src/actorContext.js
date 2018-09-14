import React, { Component } from "react";

const ActorContext = React.createContext();

export class Provider extends Component {
  state = {
    width: 300,
    height: 300
  };
  render() {
    return (
      <ActorContext.Provider value={this.state}>
        {this.props.children}
      </ActorContext.Provider>
    );
  }
}

export const Consumer = ActorContext.Consumer;
