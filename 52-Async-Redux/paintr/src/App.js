import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import PaintingsContainer from "./components/PaintingsContainer";
import AboutPage from "./components/AboutPage";
import {connect} from 'react-redux'
import {fetchingPaintings} from './redux/actions'
import {withRouter} from 'react-router-dom'

const mockProps = {
  color: "teal",
  icon: "paint brush",
  title: "Paintr",
  description: "Making ur dreams come true"
};

class App extends Component {
  componentDidMount(){
    //where we fetch dispatch
    this.props.fetchingPaintings()
  }

  render() {
    return (
      <div className="App">
        <Navbar
          color={mockProps.color}
          title={mockProps.title}
          icon="paint brush"
          description="All ur paintings"
        />
        <Switch>
          <Route exact path="/about" component={AboutPage} />
          <Route path="/" component={PaintingsContainer} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchingPaintings : ()=>{dispatch(fetchingPaintings())}
  }
}

export default withRouter(connect(null, mapDispatchToProps)(App));
