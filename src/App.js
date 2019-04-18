import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Admin from './Admin';
import MainStore from './MainStore';
import Users from './Components/Users';

class App extends Component {

  render() {
    return (
      <div style={{background:'gray', height:'100vh'}}>
        <Router  >
          <ul style={{listStyleType:'none', display:'flex', margin: 'auto', background:'gray', flexDirection:'row-reverse', }}>
            <li style={{marginLeft:5}}>
              <Link to="/">Home</Link>
            </li>
            <li style={{marginLeft:5}}>
              <Link to="/Admin">Admin</Link>
            </li>
            <li style={{marginLeft:5}}> 
              <Link to="/Users">Register</Link>
            </li>
          </ul>

          <Route exact path="/" exact component={MainStore} />
          <Route path="/Admin" component={Admin} />
          <Route path="/Users" component={Users}/>
        </Router>
      </div>
    );
  }
}

export default App;
