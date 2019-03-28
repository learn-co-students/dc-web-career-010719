import {BIGGER_COUNT, LITTLER_COUNT} from './actionTypes'

const getInitialState = () => ({count: 0})

function reducer (currentState=getInitialState(), action) {
  switch(action.type){
    case BIGGER_COUNT:
      return {...currentState, count: currentState.count + action.payload}
    case LITTLER_COUNT:
      return {...currentState, count: currentState.count - action.payload}
    default:
      return currentState
  }
}

export default reducer
