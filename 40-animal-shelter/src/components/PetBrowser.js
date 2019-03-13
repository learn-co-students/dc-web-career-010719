import React from 'react'

import Pet from './Pet'

export default props => <div className="ui cards">{props.pets.map((pet) => <Pet pet={pet} key={pet.id} onAdoptPet={props.onAdoptPet}/>)}</div>
