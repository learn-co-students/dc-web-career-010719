import React from 'react'
import Logo from './Logo'

const Navbar = (props) => {
  console.log("Navbar props:", props)
  return (
    <div className={`ui inverted ${props.color} menu navbar`}>
      <a className="item">
        <Logo
          title="JSON Derulo Fan Club"
          icon="paw"
        />
      </a>
    </div>
  )
}

export default Navbar
