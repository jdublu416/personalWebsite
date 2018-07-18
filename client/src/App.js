import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About/About";
import Wrapper from "./components/Wrapper";
import Project from "./pages/ProjectPortfolio/Projects";
import './App.css';
import Contact from './pages/Contact/Contact';

const App = () => (
  <Router>
    <div>
      <Wrapper>
        <Route exact path="/" component={About} />
        <Route exact path="/portfolio" component={Project} />
        <Route exact path="/contact" component={Contact}/>
      </Wrapper>
     
    </div>
  </Router>
);

export default App;
