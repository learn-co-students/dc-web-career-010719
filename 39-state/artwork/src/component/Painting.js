import React from 'react'

const Painting = (props) => {
  let {painting:{title, image, artist: {name}, dimensions: {height, width}}} = props
  return (
    <div onClick={() => {props.handleChangeArt(props.painting)}} className="ui card">
      <p>{`${title} by ${name}`}</p>
      <p>{`${height} x ${width}`}</p>
    </div>
  )
}

export default Painting
