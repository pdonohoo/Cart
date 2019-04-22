import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';

class Login extends Component {

  state = {
    userName: '',
    password:'',
    user: null,
  }

  verifyUser = (e) => {
    e.preventDefault();
    return fetch('http://localhost:5000/login', {
      method: 'Post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userName: this.state.userName,
        password: this.state.password,
      })
    }).then(response => response.json())
    .then(user => {
     localStorage.setItem('user', JSON.stringify(user))
     this.setState({
       user
     })
    })
  }

  eventHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  componentDidMount() {
    let user = JSON.parse(localStorage.getItem('user'))
    this.setState({
      user
    })
  }



  render(){
    return(
      this.state.user
      ?
      <Redirect to='/admin'/>
      :
      <div style={{textAlign:'center'}}>
      <div>
        Sign In
      </div>
        <form >
        <input name={'userName'} onChange={this.eventHandler} placeholder='Username'></input>
          <input name={'password'} onChange={this.eventHandler} placeholder='Password'></input>
          <button onClick={this.verifyUser}>Login</button>
        </form>

      </div>
    )
  }
}

export default Login;