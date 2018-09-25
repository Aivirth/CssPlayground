import React from "react";
import { Route, Switch } from "react-router-dom";

import Actor from "../../components/Actor/Actor";
import BoxShadow from "../../components/Options/BoxShadow/BoxShadow";
import BorderRadius from "../../components/Options/BorderRadius/BorderRadius";
import Borders from "../../components/Options/Borders/Borders";
import Base from "../../components/Options/Base/Base";
import NotFound from "../../components/Pages/NotFound";

import Test from "../../components/Test/Test";

import BottomModal from "../Layout/BottomModal/BottomModal";

export default () => {
  return (
    <main className="row" style={{ marginBottom: "0px" }}>
      <div className="col s6">
        <Switch>
          <Route exact path="/" component={Base} />
          <Route exact path="/box-shadow" component={BoxShadow} />
          <Route exact path="/border-radius" component={BorderRadius} />
          <Route exact path="/borders" component={Borders} />
          <Route component={NotFound} />
        </Switch>
      </div>
      <div
        className="col s6"
        style={{
          // display: "flex",
          // height: "calc(100vh - 64px)"
          paddingTop: "5rem"
        }}
      >
        <Actor />
        <Test />
        <BottomModal
          buttonText="Open"
          id="bottom"
          header="Modal header test"
          additionalBtnClasses="light-blue lighten-2"
        >
          Test
        </BottomModal>
      </div>
    </main>
  );
};
