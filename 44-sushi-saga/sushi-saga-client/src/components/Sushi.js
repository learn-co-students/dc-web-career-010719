import React, { Fragment } from 'react'

class Sushi extends React.Component{
  constructor(props){
    super(props)
    let isEaten = this.props.eatenSushi.includes(this.props.sushi) ? true : false
    this.state = {
      eaten: isEaten
    }
  }

  eatSushi = () => {
    if(this.props.budget >= this.props.sushi.price){
      this.setState({
        eaten: true
      })
      this.props.onHandleEat(this.props.sushi)
    }else{
      alert('you broke!')
    }
  }

  render(){
    // console.log(this.props.sushi)
    return (
      <div className="sushi">
        <div className="plate"
             onClick={this.eatSushi}>
          {
            /* Tell me if this sushi has been eaten! */
            this.state.eaten ?
              null
            :
              <img src={this.props.sushi.img_url} width="100%" />
          }
        </div>
        <h4 className="sushi-details">
          {this.props.sushi.name} - ${this.props.sushi.price}
        </h4>
      </div>
    )
  }
}

export default Sushi
