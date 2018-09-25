import React, { Component } from "react";
import Navbar from "./components/Navigation/Navbar/Navbar";
import Sidenav from "./components/Navigation/Sidenav/Sidenav";
import Main from "./containers/Main/Main";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Provider } from "react-redux";
import store from "./Redux/store";

import About from "./components/Pages/About";
import NotFound from "./components/Pages/NotFound";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Navbar />
            <div className="container">
              <Sidenav />
              <Switch>
                <Route exact path="/about" component={About} />
                <Route path="/" component={Main} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
