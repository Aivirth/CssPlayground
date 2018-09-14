import React, { Component } from "react";
import Navbar from "./components/Navigation/Navbar/Navbar";
import Sidenav from "./components/Navigation/Sidenav/Sidenav";
import Main from "./containers/Main/Main";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import About from "./components/Pages/About";
import NotFound from "./components/Pages/NotFound";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App" style={{ display: "flex", flexWrap: "wrap" }}>
          <Navbar />
          <Sidenav />
          <Switch>
            <Route exact path="/about" component={About} />
            <Route path="/" component={Main} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
