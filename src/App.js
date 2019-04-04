import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Admin from './Admin'
import MainStore from './MainStore'

class App extends Component {

  render() {
    return (
      <div >
        <Router >
          <ul style={{listStyleType:'none', display:'flex', margin: 0}}>
            <li style={{marginRight: 5}}>
              <Link to="/">Home</Link>
            </li>
            <li style={{marginRight: 5}}>
              <Link to="/Admin">Admin</Link>
            </li>
          </ul>

          <Route exact path="/" exact component={MainStore} />
          <Route path="/Admin" component={Admin} />
        </Router>
      </div>
    );
  }
}

export default App;
