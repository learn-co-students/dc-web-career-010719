//create a component called CommentContainer
import React, {Component} from 'react'
import Comment from './Comment'

const commentsData = [
  {id: 1, content: "I am the first comment", author: "Jake"},
  {id: 2, content: "Sup friends!", author: "Melanie"},
  {id: 3, content: "No global variables", author: "Will"},
]

const CommentContainer = () => {
  return (
    <div className="comment-container">CommentContainer
      {generateCommentComponents()}
    </div>
  )
}

const generateCommentComponents = () => {
  return commentsData.map(c => <Comment key={c.id} commentObj={c} anotherData="somestring"/>)
}

// class CommentContainer extends Component {
//   render(){
//     return (
//       <div className="comment-container">CommentContainer
//         <p>Hello</p>
//       </div>
//     )
//   }
// }

export default CommentContainer
