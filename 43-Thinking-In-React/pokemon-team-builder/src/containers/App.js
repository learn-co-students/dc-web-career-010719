import React, { Component } from 'react';
import '../App.css';
import Header from '../components/Header'
import List from './List'
import PokemonStats from '../components/PokemonStats'
import Searchbar from '../components/Searchbar'

const URL = 'https://pokeapi.co/api/v2/pokemon?limit=1000'

class App extends Component {
  constructor(){
    super()
    this.state = {
      team: [],
      selectedPokemon: null,
      allPokemon: [],
      searchTerm: ''
    }
  }

  onSearch = (event) => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  handleAddPokemon = (pokemonObj) => {
    //add a pokemon to our team
    console.log('attempting to add pokemon to team', pokemonObj)
    if(this.state.team.length <= 5){
      // if(this.state.team.includes(pokemonObj)){
      //   alert('Cannot add the same pokemon')
      // }else{
        this.setState({
          team: [...this.state.team, pokemonObj]
        })
      // }
    }else{
      alert("Max of 6 pokemon, please...")
    }
  }

  handleRemovePokemon = (pokemonObj) => {
    console.log('attempting to remove pokemon from team', pokemonObj)
    this.setState({
      team: this.state.team.filter(p => p.name !== pokemonObj.name)
    })
  }

  componentDidMount(){
    fetch(URL)
    .then(res => res.json())
    .then(apiData => {
      this.setState({
        allPokemon: apiData.results
      })
    })
  }

  handleClickPokemon = (pokemonObj) => {
    fetch(pokemonObj.url)
    .then(res => res.json())
    .then(pokemon => {
      this.setState({
        selectedPokemon:pokemon
      })
    })
  }

  //allPokemon-teams
  getWildPokemon(){
    return this.state.allPokemon.filter(p => !this.state.team.includes(p) && p.name.includes(this.state.searchTerm))
  }

  render() {
    return (
      <div className="App">
        <Header />
        <List
          pokemons={this.state.team}
          onChangeTeam={this.handleRemovePokemon}
          onSelect={this.handleClickPokemon}/>
        <PokemonStats pokemon={this.state.selectedPokemon}/>
        <Searchbar onSearch={this.onSearch} text={this.state.searchTerm}/>
        <List
          pokemons={this.getWildPokemon()}
          onChangeTeam={this.handleAddPokemon}
          onSelect={this.handleClickPokemon}/>
      </div>
    );
  }
}

export default App;
