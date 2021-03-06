import React from 'react'

class Searchbar extends React.PureComponent {
  render(){
    return (
      <input
        onChange={this.props.onSearch}
        className="search"
        type="text"
        value={this.props.text}/>
    )
  }
}

export default Searchbar
