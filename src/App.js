import React, { Component } from "react";
import "./App.css";
import mostlycloudy from "../src/img/weather-icons/mostlycloudy.svg";
import clear from "../src/img/weather-icons/clear.svg";
import Search from "./components/Search";
import Main from "./components/Main";
import Today from "./components/Today"


class App extends Component {
  render() {
    return (
      <div className="app">
    <Search />
        <main className="container">
      <Main />
        </main>

        <div className="section">
          <Today />
        </div>
      </div>
    );
  }
}

export default App;
