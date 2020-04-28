import React, { Component } from "react";
import "./timer.css";


class Timer extends Component {
  state = {
    time: 0,
    hour: 0,
    min: 0,
    sec: 0,
  };

  timeConvert = () => {
    var num = this.state.time;
    this.setState({ hour: Math.floor(num / 3600) });
    this.setState({ min: Math.floor((num % 3600) / 60) });
    this.setState({ sec: num % 60 });
  };

  resertTime = () => {
    var num = this.state.time;
    this.setState({ hour: 0 ,  min: 0 ,sec: 0})}


  render() {
    return (
      <div className="timer">
        <h1>Time till EXPLOSION!!!!!!!!!!</h1>
        <input
          type="text"
          id="time"
          placeholder="Time"
          onChange={(e) => this.setState({ time: e.target.value })}
        />
        <button type="button" onClick={this.timeConvert}> Convert</button>
       
        <br />
       
        <div className="HORLOGE">
          <div><h2>Hour:{this.state.hour}</h2></div>
         <div> <h2>Min:{this.state.min}</h2></div>
          <div><h2>Sec:{this.state.sec}</h2></div>
          <div><img src="https://pixabay.com/get/55e9d5464d50ae14f1dc8460c62d3e761d3fd6e24e5074417d2f78d1964fcc_640.png?attachment=" /></div>
          </div>

          

       
        <button type="button" onClick={this.resertTime}>Reset</button>

      

      </div>
    );
  }
}
export default Timer;