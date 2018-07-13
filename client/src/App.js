import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Nav/Nav";
import { Container } from "./components/Grid/Container";
import Git from "./images/github-128.png";
import Stack from "./images/overflow.png";
import LinkedIn from "./images/linkedin.png";
import ProfilePic from "./images/profilepic2.jpeg";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Nav />
        </header>
        <Container className="main-container">
          <section className="main-section">
            <h1>About Me</h1>

            <img
              src={ProfilePic}
              className="auth-image"
              alt="profile picture"
            />
            <p>
              I am a Full Stack Web Developer who is proficient with MERN, mySQL, React, javaScript, HTML/CSS,
              concerned with UI asthetics and functionality, and eager to learn anything I can to improve my coding prowess!
            </p>

            <p>
              I returned to school to change careers after getting bit by the coding bug. I have a BS in Nursing and
              started out my career as a Labor and Delivery Nurse and then as a trailing spouse of a medical professional,
              I became a stay at home mom.
      
            </p>

            <p>
              I most enjoy building things...I enjoy the satisfaction of seeing my
              vision come to life on the page. I am determined, detail-oriented,
              and definitely excited about my future!
            </p>
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

export default App;
