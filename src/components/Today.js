import React from "react";
import mostlycloudy from "../img/weather-icons/mostlycloudy.svg"
import clear from "../img/weather-icons/clear.svg"
import "./Today.css"

class Today extends React.Component {

    render() {
      return (
        <section className="weather-bot">
            <section className="detail">
              <p>03:00 </p>
              <img src={mostlycloudy} />
              <p>8°C</p>
            </section>
            <section className="detail">
              <p>06:00 </p>
              <img src={mostlycloudy} />
              <p>9°C</p>
            </section>
            <section className="detail">
              <p>09:00 </p>
              <img src={clear} />
              <p>14°C</p>
            </section>
            <section className="detail">
              <p>12:00 </p>
              <img src={clear} />
              <p>17°C</p>
            </section>
            <section className="detail">
              <p>15:00 </p>
              <img src={clear} />
              <p>18°C</p>
            </section>
            <section className="detail">
              <p>18:00 </p>
              <img src={clear} />
              <p>16°C</p>
            </section>
            <section className="detail">
              <p>21:00 </p>
              <img src={mostlycloudy} />
              <p>13°C</p>
            </section>
          </section>
      );
    }
  }
  export default Today;