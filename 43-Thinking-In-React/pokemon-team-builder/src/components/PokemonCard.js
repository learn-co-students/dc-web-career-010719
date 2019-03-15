import React from 'react'

const PokemonCard = (props) => {
  return (
    <div
      onDoubleClick={() => props.onChangeTeam(props.pokemon)}
      onClick={() => props.onSelect(props.pokemon)}
      className="pokemon card">{props.pokemon.name}
    </div>
  )
}

export default PokemonCard
