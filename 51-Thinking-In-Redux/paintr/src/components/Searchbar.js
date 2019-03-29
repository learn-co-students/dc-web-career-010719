import React from "react";
import {connect} from 'react-redux'
import {changeSearchText} from '../redux/actionCreators'

const Searchbar = props => {
  console.log("Searchbar's props:", props)
  return(
    <div className="ui container">
      <div className="ui very large fluid input">
        <input
          type="text"
          placeholder="Search"
          value={props.value}
          onChange={e => props.onSearch(e.target.value)}
        />
      </div>
      <div className="ui clearing section divider" />
    </div>
  )

}
const mapStateToProps = state => {
  return {
    value: state.searchText
    //props: state.something...
  }
}
// const mapDispatchToProps = dispatch => {
//   return {
//     onSearch: (text) => {dispatch(changeSearchText(text))}
//     //props: dispatch process
//   }
// }

export default connect(mapStateToProps, {onSearch: changeSearchText})(Searchbar);
