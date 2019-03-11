import React from 'react'
import PaintingCard from '../components/PaintingCard'
import paintingsArray from '../data/paintings'

class PaintingCardContainer extends React.Component {
  render(){
    return (
      <div className="ui container center aligned">
        {paintingsArray.map(painting => (
          <PaintingCard key={painting.id} paintingObj={painting}/>
        ))}
      </div>
    )
  }
}

export default PaintingCardContainer
