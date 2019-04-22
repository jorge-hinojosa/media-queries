import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      menuStatus: "closed"
    };
  }
  menuToggle = () => {
    if (this.state.menuStatus === "open") {
      this.setState({ menuStatus: "closed" });
    } else {
      this.setState({ menuStatus: "open" });
    }
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="Masthead">
            <nav>
              <h1>Start Bootstrap</h1>
              <button onClick={() => this.menuToggle()} id="hamburger-btn">
                MENU
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/220px-Hamburger_icon.svg.png"
                  alt="Hamburger Button"
                />
              </button>
              <ul className="Nav-list">
                <li className="Nav-link">
                  <a href="#services">SERVICES</a>
                </li>
                <li className="Nav-link">
                  <a href="#portfolio">PORTFOLIO</a>
                </li>
                <li className="Nav-link">
                  <a href="#about">ABOUT</a>
                </li>
                <li className="Nav-link">
                  <a href="#team">TEAM</a>
                </li>
                <li className="Nav-link">
                  <a href="#contact">CONTACT</a>
                </li>
              </ul>
              <div className={"Side-menu-" + this.state.menuStatus}>
                <ul className="Side-menu-list">
                  <li className="Nav-link">
                    <a href="#services">SERVICES</a>
                  </li>
                  <li className="Nav-link">
                    <a href="#portfolio">PORTFOLIO</a>
                  </li>
                  <li className="Nav-link">
                    <a href="#about">ABOUT</a>
                  </li>
                  <li className="Nav-link">
                    <a href="#team">TEAM</a>
                  </li>
                  <li className="Nav-link">
                    <a href="#contact">CONTACT</a>
                  </li>
                </ul>
              </div>
            </nav>
            <div className="Intro-container">
              <h3>Welcome To Our Studio!</h3>
              <h1>IT'S NICE TO MEET YOU</h1>
              <button>TELL ME MORE</button>
            </div>
          </div>
        </header>
        <section id="services">This is the SERVICES section.</section>
        <section id="portfolio">This is the PORTFOLIO section.</section>
        <section id="about">This is the ABOUT section.</section>
        <section id="team">This is the TEAM section.</section>
        <section id="contact">This is the CONTACT section.</section>
      </div>
    );
  }
}

export default App;
