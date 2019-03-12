import React, { Component } from 'react';
import '../App.css';
import PaintingsContainer from './PaintingsContainer'
import Nav from '../component/Navbar'
import Searchbar from '../component/Searchbar'
import Details from '../component/Details'

class App extends Component {
  constructor(){
    super()
    this.state = {
      searchTerm: "",
      displayedArt: null
    }
  }

  handleSearchChange = (event) => {
    event.persist()
    this.setState({
      searchTerm: event.target.value
    })
  }

  handleChangeArt = (paintingObj) => {
    this.setState({
      displayedArt: paintingObj
    })
  }

  render() {
    // console.log(this) //this -> App
    return (
      <div className="App">
        <Nav
          title="Paintr"
          tagline="List of Paintings"
          icon="paint brush"
          color="blue"
        />
        <Searchbar thisIsAFunction={this.handleSearchChange} text={this.state.searchTerm}/>
        <Details painting={this.state.displayedArt}/>
        <PaintingsContainer
          filterText={this.state.searchTerm}
          handleChangeArt={this.handleChangeArt}
        />
      </div>
    );
  }
}

export default App;
