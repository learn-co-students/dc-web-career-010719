import React from "react"
import Hog from './Hog'

export default class PigPen extends React.Component{

render(){
  return(
    <div>{
      this.props.hogs.map(hog => {
      return <Hog key={hog.name} data={hog}/>
    })}</div>
  )
}


}
