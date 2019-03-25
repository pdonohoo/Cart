import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Admin from './Admin'
import MainStore from './MainStore'

class App extends Component {

  render() {
    return (
      <div>
        <Router>
          <ul style={{listStyleType:'none', display:'flex', }}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Admin">Admin</Link>
            </li>
          </ul>

          <Route exact path="/" exact component={MainStore} />
          <Route path="/Admin" exact component={Admin} />
        </Router>

        
        
        

       
      </div>
    );
  }
}

export default App;
