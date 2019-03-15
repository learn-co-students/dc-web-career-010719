import React from 'react'
import PokemonCard from '../components/PokemonCard'

class List extends React.PureComponent {
  render(){
    return(
      <div>
        {this.props.pokemons.map(pokemonObj => <PokemonCard
          key={pokemonObj.name}
          pokemon={pokemonObj}
          onChangeTeam={this.props.onChangeTeam}
          onSelect={this.props.onSelect}
          />)}
      </div>
    )
  }
}

export default List
