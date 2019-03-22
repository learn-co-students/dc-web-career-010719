import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Giphy from './Giphy.js'

class App extends Component {
  constructor(){
    super()
    this.state={
      giphies:[]
    }
  }
  componentDidMount(){
    fetch(`https://new-giphy-backend.herokuapp.com/giphies`)
    .then(resp => resp.json())
    .then(data => this.setState({giphies: data}))
  }

  render() {
    return (
      <div className="App">

          {this.state.giphies.map(giphy => <Giphy title={giphy.title} embedUrl={giphy.embedUrl} />)}

      </div>
    );
  }
}

export default App;
