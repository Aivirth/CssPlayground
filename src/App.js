import React, { Component } from "react";
import Navbar from "./components/Navigation/Navbar/Navbar";
import Main from "./containers/Main/Main";
import Footer from "./containers/Layout/Footer/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

import { Provider } from "react-redux";
import store from "./Redux/store";

import About from "./components/Pages/About";
import NotFound from "./components/Pages/NotFound";

library.add(faExternalLinkAlt);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div
            className="App"
            style={{
              display: "flex",
              minHeight: "100vh",
              flexDirection: "column"
            }}
          >
            {/* <Navbar /> */}
            <div
              className="container"
              style={{ flex: "1 0 auto", display: "flex" }}
            >
              <Switch>
                <Route exact path="/about" component={About} />
                <Route path="/" component={Main} />
                <Route component={NotFound} />
              </Switch>
            </div>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
