import React from 'react'

class Hog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDetails: false
    };
  }

  handleClick = () => {
    this.setState({showDetails: !this.state.showDetails})
  }

    render(){
      const {name, specialty, greased} = this.props.data
      const weight = this.props.data['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']
      const medal = this.props.data['highest medal achieved']

      let img_url = this.props.data.name.toLowerCase().split(' ').join('_')

      return(
        <div onClick={this.handleClick}>
          <h2>{this.props.data.name}</h2>
          <img src={require(`../hog-imgs/${img_url}.jpg`)} />
          {this.state.showDetails ?
            (<div>
              <p>{specialty}</p>
              <p>Greased? {greased.toString()}</p>
              <p>{weight}</p>
              <p>{medal}</p>
            </div>)
            :
            null
          }
        </div>
      )
    }
}

export default Hog
