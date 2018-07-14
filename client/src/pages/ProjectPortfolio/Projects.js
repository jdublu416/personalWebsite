import React, { Component } from "react";
import Nav from "../../components/Nav/Nav";
import { Container } from "../../components/Grid/";
import Git from "../../images/github-128.png";
import Stack from "../../images/overflow.png";
import LinkedIn from "../../images/linkedin.png";
import API from "../../utils/API";
import Card from "../../components/Card/Card";
//import ProfilePic from "./images/profilepic2.jpeg";

class Project extends Component {
  state = {
    projects: [],
    title:"",
    description:"",
    aSrc:"",
    github:"",
    imageSrc:""
  };

  // When the component mounts, load the project collection
  componentDidMount() {
    // this.loadProjects();
  }

  loadProjects = () => {
    console.log("yipppeee"),
    API.getProjects()
      .then(res =>
        this.setState({
          projects: res.data,
          title:"",
          description:"",
          aSrc:"",
          github:"",
          imageSrc:""
        })
      )
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title navh1">Janet Warren</h1>
        </header>
        <Nav className="sideNav" />
        <Container className="main-container">
          <section className="main-section">
            <Card
            //   title={project.title}
            //   description={project.description}
            //   aSrc={project.aSrc}
            //   github={project.github}
            //   imageSrc={project.imageSrc}
            />
          </section>
          <section className="sidebar">
            <div id="connect">
              <h2>Connect with Me</h2>

              <a href="https://github.com/jdublu416">
                <img src={Git} className="social" alt="GitHub" />
              </a>
              <a href="https://linkedin.com/in/janet-warren-21ab759b">
                <img src={LinkedIn} className="social" alt="LinkedIn" />
              </a>
              <a href="https://stackoverflow.com">
                <img src={Stack} className="social" alt="Stack Overflow" />
              </a>
            </div>
          </section>
        </Container>
        <footer className="footer">
          <div class="container">Copyright &copy; 2018 Janet Warren</div>
        </footer>
      </div>
    );
  }
}

export default Project;
