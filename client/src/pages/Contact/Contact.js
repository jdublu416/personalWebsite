import React, { Component } from "react";
import "./Contact.css";
import Nav from "../../components/Nav/Nav";
import { Container } from "../../components/Grid/Container";
import Git from "../../components/images/github-128.png";
import Stack from "../../components/images/overflow.png";
import LinkedIn from "../../components/images/linkedin.png";
import ProfilePic from "../../components/images/profilepic2.jpeg";

class Contact extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h1 className="App-title navh1">Janet Warren</h1>
        </header>
        <Nav className='sideNav' />
        <Container className="main-container">
          <section className="main-section">
            <h1>Contact Me</h1>

            <img
              src={ProfilePic}
              className="auth-image"
              alt="profile picture"
            />
            <h3>
            <strong>Email:</strong>Jdublu416@gmail.com 
            </h3>


           
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

export default Contact;
