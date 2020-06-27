import React, { Component } from "react";
import Die from './Die';
import './RollDice.css';

class RollDice extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dieOne: "one",
      dieTwo: "one",
      rolling: false
    };

    this.roll = this.roll.bind(this);
  }

  roll() {
    let faceOne = this.props.diceFaces[Math.floor(Math.random() * this.props.diceFaces.length)];
    let faceTwo = this.props.diceFaces[Math.floor(Math.random() * this.props.diceFaces.length)];
    this.setState({rolling: true});

    setTimeout(function () {
      this.setState({rolling: false});
      this.setState({dieOne: faceOne});
      this.setState({dieTwo: faceTwo});
    }.bind(this), 1000);
  }

  render() {
    return (
      <div className="RollDice">
        <div className="RollDice-dice">
          <Die number={this.state.dieOne} rolling={this.state.rolling}/>
          <Die number={this.state.dieTwo} rolling={this.state.rolling}/>
        </div>
        <button
          onClick={this.roll}
          disabled={this.state.rolling}
          className="RollDice-button">
          {this.state.rolling ? "Rolling..." : "Roll Dice!"}
        </button>
      </div>
    );
  }
}

RollDice.defaultProps = {
  diceFaces: ["one", "two", "three", "four", "five", "six"]
};

export default RollDice;
