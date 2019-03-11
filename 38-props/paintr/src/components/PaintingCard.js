import React from 'react'

const PaintingCard = (props) => {
  console.log("PaintingCard props:", props.paintingObj)
  var {image, title, date, dimensions: {width, height}} = props.paintingObj
  return (
    <div className="ui card">
      <div>
        <img src={image} alt="image" />
        <div>{title}</div>
        <div>{date}</div>
        <div>{width} x {height}</div>
      </div>
    </div>
  )
}

export default PaintingCard
