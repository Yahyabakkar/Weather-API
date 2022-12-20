import React from "react";
import clear from "../img/weather-icons/clear.svg";
import "./Search.css";
class Search extends React.Component {

  render() {
    return (
      <div>
        <header className="head">
          <input
            type="text"
            name="weather"
            className="input_city"
            placeholder="Type in a city name"
          />
          <button className="btn">FIND WEATHER</button>
        </header>
      </div>
    );
  }
}
export default Search;
