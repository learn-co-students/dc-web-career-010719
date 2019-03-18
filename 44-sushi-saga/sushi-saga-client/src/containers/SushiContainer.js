import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const API = "http://localhost:3000/sushis"

class SushiContainer extends React.Component {
  constructor(){
    super()
    this.state = {
      sushiArray: [],
      currentIndex: 0
    }
  }

  //get allSushis and update this.state.sushiArray
  componentDidMount(){
    fetch(API)
    .then(res => res.json())
    .then(sushiArray => {
      // console.log(sushiArray)
      this.setState({
        sushiArray
      })
    })
  }

  onChangeIndex = () => {
    if(this.state.currentIndex + 4 >= this.state.sushiArray.length)
    {
      this.setState({
        currentIndex: 0
      })
    }else{
      this.setState({
        currentIndex: this.state.currentIndex + 4
      })
    }
  }

  render(){
    let i = this.state.currentIndex
    return (
      <Fragment>
        <div className="belt">
          {
            this.state.sushiArray.slice(i, i+4).map(sushiObj => <Sushi
              key={sushiObj.id}
              sushi={sushiObj}
              onHandleEat={this.props.onHandleEat}
              budget={this.props.budget}
              eatenSushi={this.props.eatenSushi}
            />)
          }
          <MoreButton onChangeIndex={this.onChangeIndex}/>
        </div>
      </Fragment>
    )
  }
}

export default SushiContainer
