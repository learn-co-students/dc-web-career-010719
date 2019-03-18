import React from 'react'
import {Link, Redirect} from 'react-router-dom'

const PaintingDetails = ({painting}) => {
  console.log("inside painting details", painting)
  return painting ?
    <div className="ui card">
      <div>
        <img src={painting.image} alt={painting.title}/>
        <h3>
          {painting.title}
        </h3>
        <div>{`Artist: ${painting.artist.name}`}</div>
        <div>{`Born: ${painting.artist.birthday}`}</div>
        <div>{`Died: ${painting.artist.deathday}`}</div>
        <div>{`Date: ${painting.date}`}</div>
        <div>
          {`Dimensions: ${painting.dimensions.width} in. x ${painting.dimensions.height} in.`}
        </div>
      </div>
      <Link to="/paintings"><button>Back to Gallery</button></Link>
    </div>
    :
    <Redirect to="/"/>
}

export default PaintingDetails
