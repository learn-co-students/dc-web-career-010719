import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { votingForPainting as vote } from "../redux/actions";

class PaintingDetail extends React.Component {
  render() {
    return !this.props.painting ? null : (
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
          onClick={() => {
            this.props.vote(this.props.painting);
          }}
        >
          Vote! {this.props.painting.votes}
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    painting: state.paintings.find(p => p.id === ownProps.match.params.paintingId)
  };
};

export default connect(
  mapStateToProps,
  { vote }
)(PaintingDetail);
