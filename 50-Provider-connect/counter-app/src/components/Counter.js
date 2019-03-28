import React, {Component} from 'react'
import {connect} from 'react-redux'
import {BIGGER_COUNT, LITTLER_COUNT} from '../redux/actionTypes'

class Counter extends Component {
  increment = (payload) => {
    this.props.dispatch({type:BIGGER_COUNT, payload})
  };

  decrement = (payload) => {
    this.props.dispatch({type:LITTLER_COUNT, payload})
  };

  render() {
    // console.log("Counter's props:", this.props)
    return (
      <div className="Counter">
        <button onClick={() => this.decrement(5)}> -5 </button>
        <button onClick={() => this.decrement(1)}> - </button>
        <button onClick={() => this.increment(1)}> + </button>
        <button onClick={() => this.increment(3)}> +3 </button>
        <h1>{this.props.countValue}</h1>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  countValue: state.count
})

export default connect(mapStateToProps)(Counter)
