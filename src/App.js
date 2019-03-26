import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      num1: 0,
      num2: 0,
      result: 0
    };
    this.add = this.add.bind(this);
    this.handlenum1Change = this.handlenum1Change.bind(this);
    this.handlenum2Change = this.handlenum2Change.bind(this);
  }
  handlenum1Change(event) {
    this.setState({ num1: Number(event.target.value) });
  }
  handlenum2Change(event) {
    this.setState({ num2: Number(event.target.value) });
  }
  add() {
    this.setState({
      result: this.state.num1 + this.state.num2
    });
  }
  render() {
    return (
      <div className="App">
        <input type="number" onChange={this.handlenum1Change} />
        <input type="number" onChange={this.handlenum2Change} />
        <button onClick={this.add}> Add</button>
        <input type="text" value={this.state.result} />
      </div>
    );
  }
}

export default App;
