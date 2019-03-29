import React from "react";
import PaintingListItem from "./PaintingListItem";
import {connect} from "react-redux"

const PaintingsList = props => (
  <div className="ui container">
    <div className="ui celled selection list">
      {props.paintings.map(painting => (
        <PaintingListItem
          key={painting.id}
          painting={painting}
        />
      ))}
    </div>
  </div>
);

const filter = (state) => {
  return state.paintings.filter(p => (
    p.title.toLowerCase().includes(state.searchText.toLowerCase()) ||
    p.artist.name
      .toLowerCase()
      .includes(state.searchText.toLowerCase())))
}

const mapStateToProps = state => {
  return{
    paintings: filter(state)
  }
    //props: state.something...
}

export default connect(mapStateToProps)(PaintingsList);
