import React, {Component} from 'react'
import {connect} from 'react-redux'

const Header = (props) => {
  return (
    <header className="App-header">
      <h3>{`The current count is less than ${props.countValue + (5 - props.countValue % 5)}`}</h3>
    </header>
  )
}
//connect is a function that returns a HOC
const mapStateToProps = storeState => ({
  countValue: storeState.count
})

export default connect(mapStateToProps)(Header)

//create a HOC called withCount
//const withCount = (Component) => {
//   const EnhancedComponent = (props) => {
//     return <Component {...props} counterValue={store.getState().count}/>
//   }
//   return EnhancedComponent
// }

//Higher Order Component is a function that takes in a component and returns
//an enhacned version of that component
//Try to create BlueHeader that is an exact copy of Header, => {color:"blue"}
//const withColor = (Component, color) => {
//   const EnhancedComponent = (props) => {
//     return <Component {...props} color={color}/>
//   }
//   return EnhancedComponent
// }
// const BlueHeader = withColor(Header, "blue")
// const RedHeader = withColor(Header, "red")
