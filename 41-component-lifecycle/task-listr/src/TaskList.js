import React from 'react'
import Task from './Task'

const TaskList = (props) => {
  console.warn('TaskList render')
  return(
    props.tasks !== null ? props.tasks.map(task => <Task
      key={task.id}
      task={task}
      onCheck={props.onCheck}
      onDelete={props.onDelete}
    />) : null
  )
}

export default TaskList
