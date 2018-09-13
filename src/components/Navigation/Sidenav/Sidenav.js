import React from "react";

export default () => {
  return (
    <ul
      id="nav-mobile"
      className="sidenav"
      style={{
        overflow: "auto",
        transform: "translateX(0px)",
        position: "static",
        display: "inline-block",
        height: "calc(100vh - 64px)"
      }}
    >
      <li className="no-padding">
        <ul className="collapsible collapsible-accordion">
          <li className="bold active">
            <a
              className="collapsible-header waves-effect waves-teal"
              tabIndex="0"
            >
              Lorem
            </a>
            <div className="collapsible-body" style={{ display: "block" }}>
              <ul>
                <li className="active">
                  <a href="/">Border Radius</a>
                </li>
                <li>
                  <a href="/">Box Shadow</a>
                </li>
                <li>
                  <a href="/">Borders</a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </li>

      <li className="bold">
        <a href="/" className="waves-effect waves-teal">
          Lorem
        </a>
      </li>
      <li className="bold">
        <a href="/" className="waves-effect waves-teal">
          Lorem
          <span className="new badge" />
        </a>
      </li>
    </ul>
  );
};
