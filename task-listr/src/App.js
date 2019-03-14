import React, { PureComponent } from 'react';
import Form from './Form'
import TaskList from './TaskList'

class App extends PureComponent {
  constructor(){
    super()
    this.state = {
      formText: '',
      taskList: []
    }
    console.warn('App constructor')
  }

  componentDidMount(){
    console.warn('App componentDidMount')
    fetch(`http://localhost:3000/tasks`)
    .then(res => res.json())
    .then(tasks => {
      this.setState({
        taskList: tasks
      })
    })
  }

  componentDidUpdate(){
    console.warn('App componentDidUpdate')
  }

  onTypingChange = (event) => {
    this.setState({
      formText : event.target.value
    })
  }

  onAddNewTask = (event) => {
    event.preventDefault()
    fetch(`http://localhost:3000/tasks`, {
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify({done: false, text: event.target[0].value})
    }).then(res => res.json())
    .then(newTask => {
      this.setState({
        taskList: [...this.state.taskList, newTask]
      })
    })
  }

  onCheck = (id, isDone) => {
    fetch(`http://localhost:3000/tasks/${id}`,{
      method: "PATCH",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify({done: !isDone})
    })
    this.setState({
      taskList : this.state.taskList.map(task => {
        return task.id !== id ? task : {...task, done: !task.done}
      })
    })
  }

  onDelete = (id) => {
    fetch(`http://localhost:3000/tasks/${id}`, {
      method: "DELETE",
    }).then(res => res.json())
    .then(() => {
      // console.log(id) //find the task with that ID, remove it, and this.setState
      this.setState({
        taskList: this.state.taskList.filter(t => t.id !== id)
      })
    })
  }

  render() {
    console.warn('App render')
    return (
      <div className="App">
        <Form onChange={this.onTypingChange} onSubmit={this.onAddNewTask}/>
        <TaskList
          tasks={this.state.taskList}
          onCheck={this.onCheck}
          onDelete={this.onDelete}
        />
      </div>
    );
  }
}

export default App;
