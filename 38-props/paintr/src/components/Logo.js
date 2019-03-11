import React from 'react'

const Logo = (props) => {
  console.log("Logo props:", props)
  return (
    <h2 className="ui header">
      <i className={`ui ${props.icon} icon`}></i>
      <div className="content">{props.title}</div>
      <div className="sub header">List of Paintings</div>
    </h2>
  )
}

export default Logo
