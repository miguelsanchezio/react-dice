import React, { Component } from "react";
import './Die.css';

class Die extends Component {
  render() {
    return (
      <div className={`Die ${this.props.rolling ? "Die-animation" : ""}`}>
        <i
          className={"fas fa-dice-" + this.props.number}>
        </i>
      </div>
    );
  }
}

export default Die;
