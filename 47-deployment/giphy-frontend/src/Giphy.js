import React from 'react'

const Giphy = (props) => {
  let {title, embedUrl} = props
  console.log(props)
  return(
    <div>
      <h1>{title}</h1>
      <img src={embedUrl} alt="giphy" />
    </div>
  )
}

export default Giphy
