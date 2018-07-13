import React from "react";
import './Nav.css';

const Nav = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
     <div className="myNav">     
  <h1 className="App-title navh1">Janet Warren</h1>
    <a className="navbar-brand" href="/">
      About
    </a>
    <a className="navbar-brand" href="/">
      Portfolio
    </a>
    <a className="navbar-brand" href="/">
      Contact Me
    </a>
    </div>
  </nav>
);

export default Nav;
