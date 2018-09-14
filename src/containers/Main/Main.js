import React from "react";
import { Route, Switch } from "react-router-dom";

import Actor from "../../components/Actor/Actor";
import BoxShadow from "../../components/Options/BoxShadow/BoxShadow";
import BorderRadius from "../../components/Options/BorderRadius/BorderRadius";
import NotFound from "../../components/Pages/NotFound";

export default () => {
  return (
    <main style={{ flex: "1", paddingLeft: "25px" }}>
      <h3>Option title</h3>

      <div className="row">
        <div className="col s6">
          <Switch>
            <Route exact path="/box-shadow" component={BoxShadow} />
            <Route exact path="/border-radius" component={BorderRadius} />
            <Route component={NotFound} />
          </Switch>
        </div>
        <div className="col s6">
          <Actor />
        </div>
      </div>
    </main>
  );
};
