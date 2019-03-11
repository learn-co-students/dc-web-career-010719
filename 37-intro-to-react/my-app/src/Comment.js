import React from 'react'

class Comment extends React.Component{
  generateString(){
    return `${this.props.commentObj.content} - ${this.props.commentObj.author}`
  }

  render(){
    console.log("PROPS:", this.props)
    return (
      <div className="comment">{this.generateString()}</div>
    )
  }
}
export default Comment
