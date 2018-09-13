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
        display: "inline-block"
      }}
    >
      <li className="no-padding">
        <ul className="collapsible collapsible-accordion">
          <li className="bold active">
            <a
              className="collapsible-header waves-effect waves-teal"
              tabIndex="0"
            >
              JavaScript
            </a>
            <div className="collapsible-body" style={{ display: "block" }}>
              <ul>
                <li>
                  <a href="auto-init.html">Auto Init</a>
                </li>
                <li>
                  <a href="carousel.html">Carousel</a>
                </li>
                <li>
                  <a href="collapsible.html">Collapsible</a>
                </li>
                <li>
                  <a href="dropdown.html">Dropdown</a>
                </li>
                <li>
                  <a href="feature-discovery.html">FeatureDiscovery</a>
                </li>
                <li>
                  <a href="media.html">Media</a>
                </li>
                <li>
                  <a href="modals.html">Modals</a>
                </li>
                <li>
                  <a href="parallax.html">Parallax</a>
                </li>
                <li>
                  <a href="pushpin.html">Pushpin</a>
                </li>
                <li>
                  <a href="scrollspy.html">Scrollspy</a>
                </li>
                <li className="active">
                  <a href="sidenav.html">Sidenav</a>
                </li>
                <li>
                  <a href="tabs.html">Tabs</a>
                </li>
                <li>
                  <a href="toasts.html">Toasts</a>
                </li>
                <li>
                  <a href="tooltips.html">Tooltips</a>
                </li>
                <li>
                  <a href="waves.html">Waves</a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </li>

      <li className="bold">
        <a href="showcase.html" className="waves-effect waves-teal">
          Showcase
        </a>
      </li>
      <li className="bold">
        <a href="themes.html" className="waves-effect waves-teal">
          Themes
          <span className="new badge" />
        </a>
      </li>
    </ul>
  );
};
