import React from "react";
import { Route, Switch } from "react-router-dom";

import Actor from "../../components/Actor/Actor";
import BoxShadow from "../../components/Options/BoxShadow/BoxShadow";
import BorderRadius from "../../components/Options/BorderRadius/BorderRadius";
import Borders from "../../components/Options/Borders/Borders";
import Base from "../../components/Options/Base/Base";
import NotFound from "../../components/Pages/NotFound";

import Test from "../../components/Test/Test";

export default () => {
  return (
    <main style={{ flex: "1", paddingLeft: "25px" }}>
      <div className="row">
        <div className="col s6">
          <Switch>
            <Route exact path="/" component={Base} />
            <Route exact path="/box-shadow" component={BoxShadow} />
            <Route exact path="/border-radius" component={BorderRadius} />
            <Route exact path="/borders" component={Borders} />
            <Route component={NotFound} />
          </Switch>
        </div>
        <div className="col s6" style={{ paddingTop: "40px" }}>
          <Actor />
          <Test />
        </div>
      </div>
    </main>
  );
};
