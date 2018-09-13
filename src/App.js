import React, { Component } from "react";
import Navbar from "./components/Navigation/Navbar/Navbar";
import Sidenav from "./components/Navigation/Sidenav/Sidenav";
import Main from "./containers/Main/Main";

class App extends Component {
  render() {
    return (
      <div className="App" style={{ display: "flex", flexWrap: "wrap" }}>
        <Navbar />
        <Sidenav />
        <Main />
      </div>
    );
  }
}

export default App;
