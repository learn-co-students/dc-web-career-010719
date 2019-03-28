import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logo from './logo.svg';
import './App.css';
import {createStore} from 'redux';

const BIGGER_COUNT = "BIGGER_COUNT"
const LITTLER_COUNT = "LITTLER_COUNT"

const getInitialState = () => ({count: 0})

//reducer needs to return a newState based on currentState and action
function reducer (currentState=getInitialState(), action) {
  console.log("Current State:", currentState, "Action:", action)
  //based on the action.type, return {newState}
  switch(action.type){
    case BIGGER_COUNT:
      return {...currentState, count: currentState.count + action.payload}
    case LITTLER_COUNT:
      return {...currentState, count: currentState.count - action.payload}
    default:
      return currentState
  }
}

let store = createStore(reducer)
// console.log("STORE:", store.getState())

class App extends Component {
  componentDidMount() {
    store.subscribe(() => this.forceUpdate())
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <Counter/>
      </div>
    );
  }
}

class Header extends Component {
  increment = (payload) => {
    store.dispatch({type:BIGGER_COUNT, payload})
  };

  decrement = (payload) => {
    store.dispatch({type:LITTLER_COUNT, payload})
  };
  render() {
    return (
      <header className="App-header">
        <div><img src={logo} className="App-logo" alt="logo" /></div>
        <button onClick={() => this.decrement(5)}> -5 </button>
        <button onClick={() => this.decrement(1)}> - </button>
        <button onClick={() => this.increment(1)}> + </button>
        <button onClick={() => this.increment(3)}> +3 </button>
        <h1>{store.getState().count}</h1>
      </header>
    );
  }
}

//instead of this.setState, we want to dispatch an action
//store.dispatch({}) where the argument is an action Object
// debugger
class Counter extends Component {

  render() {
    return (
      <div className="Counter">
        <h3>{`The current count is less than ${store.getState().count + (5 - store.getState().count % 5)}`}</h3>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
