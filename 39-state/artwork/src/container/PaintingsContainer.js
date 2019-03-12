import React, {Component} from 'react'
import Painting from '../component/Painting'
import paintings from '../data/paintings'

class PaintingsContainer extends Component{

  render(){
    // console.log(this.props.handleChangeArt)
    return (
      <div>
        {paintings.filter(painting => painting.title.includes(this.props.filterText)).map(painting =>
          <Painting
            key={painting.id}
            painting={painting}
            handleChangeArt={this.props.handleChangeArt}
          />)}
      </div>
    )
  }
}

export default PaintingsContainer
