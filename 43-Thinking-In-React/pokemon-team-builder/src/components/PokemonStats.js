import React from 'react'

const PokemonStats = (props) => {
  console.log(props.pokemon)
  return props.pokemon ?
    (<div className="card details">
      <div>
        <div className="row">{props.pokemon.name}</div>
        <div className="row">
          <div><img alt="" src={props.pokemon.sprites.front_default} /></div>
          {props.pokemon.stats.map(stat => (<div
            className="block">{stat.stat.name}: {stat.base_stat}
          </div>))}
        </div>
      </div>
    </div>) : null
}

export default PokemonStats
