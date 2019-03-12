import React from 'react'

class Searchbar extends React.Component {
  render(){
    // console.log(this.props.thisIsAFunction)
    return (
        <input
          onChange={this.props.thisIsAFunction}
          className="search"
          type="text"
          value={this.props.text}
        />
    )
  }
}

export default Searchbar
