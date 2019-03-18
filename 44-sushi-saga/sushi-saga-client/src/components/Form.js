import React from 'react'

const Form = (props) => {
  return (
    <div>
      <label>Add More Money: </label>
      <form onSubmit={props.onAddMoney}>
        <input type="number" />
        <input type="submit" value="Submit!"/>
      </form>
    </div>
  )
}

export default Form
