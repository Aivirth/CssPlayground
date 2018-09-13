import React, { Component } from "react";
import Navbar from "./components/Navigation/Navbar/Navbar";
import Sidenav from "./components/Navigation/Sidenav/Sidenav";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Sidenav />
      </div>
    );
  }
}

export default App;
