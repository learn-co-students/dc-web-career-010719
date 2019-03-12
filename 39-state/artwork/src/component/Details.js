import React from 'react'

const Details = (props) => {
  // let {painting:{title, image, artist: {name}, dimensions: {height, width}}} = props
  return props.painting ? (
    <div className="ui card">
      <div>
        <img alt={props.painting.title} src={props.painting.image} />
      </div>
      <p>{`${props.painting.title} by ${props.painting.artist.name}`}</p>
      <p>{`${props.painting.dimensions.height} x ${props.painting.dimensions.width}`}</p>
    </div>
  ) : null
}

export default Details
