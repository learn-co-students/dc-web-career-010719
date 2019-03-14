import React, {PureComponent} from 'react'

class Task extends PureComponent {
  constructor(props){
    super()
    this.state = {
      color: props.task.done ? 'green' : 'red'
    }
    console.warn(`Task ${props.task.id} constructor`)
  }

  sayHi(){
    console.log('hi')
  }

  componentDidMount(){
    window.addEventListener('resize', this.sayHi)
    console.warn(`Task ${this.props.task.id} componentDidMount`)
  }

  componentDidUpdate(){
    console.warn(`Task ${this.props.task.id} componentDidUpdate`)
  }

  componentWillUnmount(){
    window.removeEventListener('resize', this.sayHi)
    console.warn(`Task ${this.props.task.id} componentWillUnmount`)
  }

  toggleColor = (event) => {
    event.stopPropagation()
    let newColor
    if(this.state.color === 'red'){
      newColor = 'green'
    }else if(this.state.color === 'green'){
      newColor = 'red'
    }
    this.setState({
      color: newColor
    })
  }

  removeColor = () => {
    this.setState({
      color: 'black'
    })
  }

  render(){
    console.warn(`Task ${this.props.task.id} render`)
    let {text, done, id} = this.props.task
    return(
      <div onClick={this.removeColor} style={{color: this.state.color}}>
        <button onClick={() => {this.props.onDelete(id)}}>x</button>
        {text}
        <input type="checkbox" checked={done} onChange={(event) => {
          this.toggleColor(event)
          this.props.onCheck(id, done)}
        }/>
      </div>
    )
  }
}

export default Task
