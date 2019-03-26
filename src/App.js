import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      text: "my friend (from state)"
    };
    this.updateText =this.updateText.bind(this);
  }
  updateText(){
    this.setState(
      {
        text:"my friend (from changed state)"

      }
    );

  }
  render() {
    return (
      <div className="App">
      <h1>hi {this.state.text}</h1>
<button onClick ={this.updateText}>click me!</button>
      </div>
    );
  }
}

export default App;
