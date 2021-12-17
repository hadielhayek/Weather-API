import React, { Component } from "react";
import Search from "./components/Search";

import SayHi, { SayHello } from "./components/WeatherItem";
import fakeWeatherData from "./fakeWeatherData.json";
import storm from "./img/weather-icons/storm.svg"
import mostlycloudy from "./img/weather-icons/mostlycloudy.svg"
import clear from "./img/weather-icons/clear.svg"
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Karim"
    };
  }

  handleInputChange = value => {
    this.setState({ name: value });
  };

  render() {
    return (
      <div className="app">
        {/* <SayHi />
        <SayHello color="black" name={this.state.name} />
        <Search handleInput={this.handleInputChange} /> */}
        <div className="nav">
          <div classname="nav2">
          <input type="text" placeholder="type in a city name" ></input>
          <button type="submit">Find the weather</button>
          </div>
       </div>
       <div className="part2">
         < img src={storm} alt="storm" width="200" height="180"/>
         <h3>Rain</h3>
         <h2 color="#030348">Temperature 10&#176;C to 11&#176;C</h2>
         <h4>Humidity&nbsp; &nbsp; 78% &nbsp; &nbsp;  pressure  &nbsp; &nbsp;1008.48</h4>
          </div>
          <div className="part3">
         <div >
           <p>03:00</p>
           <img src={mostlycloudy} alt="clouds" width="100" height="70"></img>
           <p>8&#176;C</p>
         </div>
         <div >
           <p>06:00</p>
           <img src={mostlycloudy} alt="clouds" width="100" height="70"></img>
           <p>9&#176;C</p>
         </div>
         <div >
           <p>09:00</p>
           <img src={clear} alt="clear" width="100" height="70"></img>
           <p>14&#176;C</p>
         </div>
         <div >
           <p>12:00</p>
           <img src={clear} alt="clear" width="100" height="70"></img>
           <p>17&#176;C</p>
         </div>
         <div >
           <p>15:00</p>
           <img src={clear} alt="clear" width="100" height="70"></img>
           <p>18&#176;C</p>
         </div>
         <div >
           <p>18:00</p>
           <img src={clear} alt="clear" width="100" height="70"></img>
           <p>16&#176;C</p>
         </div>
         <div >
           <p>21:00</p>
           <img src={mostlycloudy} alt="mostlycloudy" width="100" height="70"></img>
           <p>13&#176;C</p>
         </div>
         </div>
      </div>
    );
  }
}
export default App;
