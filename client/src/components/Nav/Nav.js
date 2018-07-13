import React from "react";
import "./Nav.css";

const Nav = () => (

  <nav className="bnav flex-columm">
      <ul className="myNav">
        <li>
          <a className="navbar-brand" href="/">
            About
          </a>
        </li>
        <li>
          <a className="navbar-brand" href="/">
            Portfolio
          </a>
        </li>
        <li>
          <a className="navbar-brand" href="/">
            Contact Me
          </a>
        </li>
      </ul>
  </nav>
);

export default Nav;
