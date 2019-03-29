import React from "react";
import { Link } from "react-router-dom";
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {voteForPainting} from '../redux/actionCreators'

class PaintingDetail extends React.Component {
  render() {
    console.log("PaintingDetail's props:", this.props)
    return (
      <div>
        <img alt={this.props.painting.title} src={this.props.painting.image} />
        <h3>{this.props.painting.title}</h3>
        <h4>
          {this.props.painting.artist.name}{" "}
          {this.props.painting.artist.birthday}-{
            this.props.painting.artist.deathday
          }
        </h4>
        <Link to={`/paintings/${this.props.painting.id}/edit`}>
          <button className="ui button">Edit</button>
        </Link>
        <button
          className="ui button"
          onClick={() => {this.props.vote(this.props.painting.id)}}>
          Vote! {this.props.painting.votes}
        </button>
      </div>
    );
  }
}

//read from the store
const mapStateToProps = (state, ownProps) => {
  console.log("OWN PROPS:", ownProps)
  return {
    painting: state.paintings.find(
      painting => painting.id === ownProps.match.params.paintingId
    )
    //props: state.something....
  }
}
//update the store
// const mapDispatchToProps = dispatch => {
//   return{
//     vote: (paintingId) => {dispatch(voteForPainting(paintingId))}
//     //props: dispatch()
//   }
// }

export default withRouter(connect(mapStateToProps, {vote: voteForPainting})(PaintingDetail));
