import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import Form from './components/Form'

class App extends Component {
  constructor(){
    super()
    this.state = {
      budget: 100,
      eatenSushi: []
    }
  }

  onHandleEat = (sushi) => {
    this.setState({
      eatenSushi: [...this.state.eatenSushi, sushi],
      budget: this.state.budget - sushi.price
    })
  }

  onAddMoney = (event) => {
    event.preventDefault()
    this.setState({
      budget: this.state.budget + parseInt(event.target[0].value)
    })
  }

  render() {
    return (
      <div className="app">
        <SushiContainer
          onHandleEat={this.onHandleEat}
          budget={this.state.budget}
          eatenSushi={this.state.eatenSushi}
        />
        <Table eatenSushi={this.state.eatenSushi} budget={this.state.budget}/>
        <Form onAddMoney={this.onAddMoney}/>
      </div>
    );
  }
}

export default App;
