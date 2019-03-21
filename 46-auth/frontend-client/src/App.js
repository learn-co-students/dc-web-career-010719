import React, { Fragment } from 'react'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import Profile from './components/profile'
import LoginForm from './components/loginForm'
import Nav from './components/nav'
import NotFound from './components/notFound'
import './App.css'
import {isEmpty} from 'lodash'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      user: {}
    }
  }

  componentDidMount(){
    let token = localStorage.getItem('token')
    if(token){
      fetch(`http://localhost:3000/api/v1/profile`,{
        headers:{
          "Authentication": `Bearer ${token}`
        }
      })
      .then(res => res.json())
      .then(data => {
        console.log('Token exists, user is: ', data)
        this.setState({user: data})
      })
    }
  }

  handleUpdateUser = (user) => {
    this.setState({user: user})
  }

  render(){
    console.log(isEmpty(this.state.user))
    return (
      <Fragment>
        <Nav loggedIn={!isEmpty(this.state.user)} handleUpdateUser={this.handleUpdateUser}/>
        <Switch>
          <Route exact path="/" render={() => <Redirect to="/profile" />} />
          <Route exact path="/profile" render={() => {
            return isEmpty(this.state.user) ? <Redirect to="/login" / > :
            <Profile user={this.state.user} />
          }}
          />
          <Route exact path="/login" render={() => {
            return isEmpty(this.state.user) ? <LoginForm
              handleUpdateUser={this.handleUpdateUser}/> :
              <Redirect to="/profile" />
          }}
          />
          <Route component={NotFound} />
        </Switch>
      </Fragment>
    )
  }
}

export default withRouter(App)
