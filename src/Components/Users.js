import React, {Component} from 'react'

class Users extends Component {

  state={
    userName: '',
    userEmail: '',
    userPassword: '',
  }

userName = (e) => {
  this.setState({
    userName: e.target.value
  })
}

userEmail = (e) => {
  this.setState({
    userEmail: e.target.value
  })
}

userPassword = (e) => {
  this.setState({
    userPassword: e.target.value
  })
}

registerUser = (e) => {
e.preventDefault()
let user = {
  name: this.state.userName,
  email: this.state.userEmail,
  password: this.state.userPassword
}
return fetch('http://localhost:5000/users', {
      method: 'Post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: user.name,
        email: user.email,
        password: user.password,
      })
    }),
        this.setState({
          userName: '',
          userEmail: '',
          userPassword: ''
        })
}

  render() {
    return(
      <div style={{textAlign:'center'}}>
        <h1>
          Register as new user
        </h1>
        <form>
          <input onChange={this.userName} placeholder='User Name'></input>
          <input onChange={this.userEmail} placeholder='Email'></input>
          <input onChange={this.userPassword} placeholder='Password'></input>
          <button onClick={this.registerUser}>Register</button>
        </form>
      </div>
    )
  }
}

export default Users;