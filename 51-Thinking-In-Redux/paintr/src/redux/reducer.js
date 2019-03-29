import paintingsData from "../paintings.json";
import {combineReducers} from 'redux'

const searchTextReducer = (oldState="", action) => {
  switch(action.type){
    case "CHANGE_SEARCH_TEXT":
      return action.text
    default:
      return oldState
  }
}

const paintingsReducer = (oldState=paintingsData.paintings, action) => {
  switch(action.type){
    case "UPDATE_PAINTING_INFO":
      return oldState.map(p => {
        if(p.id === action.info.paintingId){
          return {
            ...p,
            title: action.info.title,
            artist: action.info.artist
          }
        }
        return p
      })
    case "VOTE_FOR_PAINTING":
      return oldState.map(p => {
        if(p.id === action.paintingId){
          return {
            ...p,
            votes: p.votes + 1
          }
        }
        return p
      })
    default:
      return oldState
  }
}

const rootReducer = combineReducers({
  searchText: searchTextReducer,
  paintings: paintingsReducer
  //state : reducer
})


// const state = {
//   paintings : paintingsData.paintings,
//   searchText : ""
// }

// const rootReducer = (oldState=state, action) => {
//   switch(action.type){
//     case "CHANGE_SEARCH_TEXT":
//       return {
//         ...oldState,
//         searchText: action.text
//       }
//     default:
//       return oldState
//   }
// }

export default rootReducer
