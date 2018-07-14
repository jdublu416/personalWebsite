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
          <a className="navbar-brand" href="/portfolio">
            Portfolio
          </a>
        </li>
        <li>
          <a className="navbar-brand" href="/contact">
            Contact Me
          </a>
        </li>
      </ul>
  </nav>
);

export default Nav;
