import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
//import Discover from "./pages/Discover";
import About from "./pages/About/About";
//import Search from "./pages/Search";
//import Nav from "./components/Nav/Nav";
import Wrapper from "./components/Wrapper";
import Project from "./pages/ProjectPortfolio/Projects";
import './App.css';

const App = () => (
  <Router>
    <div>
      <Wrapper>
        <Route exact path="/" component={About} />
        <Route exact path="/portfolio" component={Project} />
        {/* <Route exact path="/about" component={About} />
        <Route exact path="/discover" component={Discover} />
        <Route exact path="/search" component={Search} /> */}
      </Wrapper>
     
    </div>
  </Router>
);

export default App;
