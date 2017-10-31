import React, { Component } from "react";
import logo from "./logo.svg";
import QuoteGenerator from "./QuoteGenerator.js";
import "./App.css";

class App extends Component {
  render() {
    let motivationQuotes = [
      "Hey good lookin' ;)",
      "The world is your oyster",
      "You are a React GOD"
    ];
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <QuoteGenerator quotes={motivationQuotes} />
      </div>
    );
  }
}

export default App;
