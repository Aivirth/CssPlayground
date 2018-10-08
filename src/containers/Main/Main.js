import React from "react";
import { Route, Switch } from "react-router-dom";

import Actor from "../../components/Actor/Actor";
import BoxShadow from "../../components/Options/BoxShadow/BoxShadow";
// import BorderRadius from "../../components/Options/BorderRadius/BorderRadius";
// import Borders from "../../components/Options/Borders/Borders";
import Base from "../../components/Options/Base/Base";
import NotFound from "../../components/Pages/NotFound";

export default () => {
  return (
    <main
      className="row"
      style={{
        marginBottom: "0px",
        flex: "0 0 100%",
        display: "flex",
        flexWrap: "wrap"
      }}
    >
      <div className="col m6">
        <Switch>
          <Route exact path="/" component={Base} />
          <Route exact path="/box-shadow" component={BoxShadow} />
          {/* <Route exact path="/border-radius" component={BorderRadius} />
          <Route exact path="/borders" component={Borders} /> */}
          <Route component={NotFound} />
        </Switch>
      </div>
      <div
        className="col m6"
        style={{
          display: "flex"
        }}
      >
        {/* <Actor /> */}
      </div>
    </main>
  );
};
