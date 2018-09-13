import React from "react";
import Actor from "../../components/Actor/Actor";
import BoxShadow from "../../components/Options/BoxShadow/BoxShadow";

export default () => {
  return (
    <main style={{ flex: "1", paddingLeft: "25px" }}>
      <h3>Option title</h3>

      <div className="row">
        <div className="col s8">
          <BoxShadow />
        </div>
        <div className="col s4">
          <Actor />
        </div>
      </div>
    </main>
  );
};
