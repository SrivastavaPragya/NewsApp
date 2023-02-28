
import './App.css';
import Navbar from './Components/Navbar';
import News from './Components/News';

import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
 
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <>
        <Router>
        <Navbar/>
      
        <Switch>
          <Route exact path="/">
          <News key="general" pageSize={5} country='in' category="general" />
          </Route>
          <Route  exact path="/Business">
          <News key="Business" pageSize={5} country='in' category="Business" />
          </Route>
          <Route exact path="/Entertainment">
          <News  key="Entertainment"pageSize={5} country='in' category="Entertainment" />
          </Route>
          <Route exact path="/Health">
          <News key="Health" pageSize={5} country='in' category="Health" />
          </Route>
        
        
        </Switch>
        </Router>
        </>
      </div>
    )
  }
}
