import React, { Component } from 'react';
import '../App.css';
import Navbar from '../components/Navbar'
import PaintingCardContainer from './PaintingCardContainer'



class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar
          color="purple"
        />
        <PaintingCardContainer />
      </div>
    );
  }
}

export default App;
