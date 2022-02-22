import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {
      login: '',
      password: '',
      auth: false
    }
    this.loginFormHandler = this.loginFormHandler.bind(this)
    this.passwordFormHandler = this.passwordFormHandler.bind(this)
    this.authFormSubmitHandler = this.authFormSubmitHandler.bind(this)
  }

  authFormSubmitHandler (event) {
    event.preventDefault()
    localStorage.setItem('token', process.env.REACT_APP_TOKEN)
    this.setState({
      auth: true
    })
  }

  loginFormHandler (event) {
    this.setState({
      login: event.target.value
    })
  }

  passwordFormHandler (event) {
    this.setState({
      password: event.target.value
    })
  }

  render () {
    const { login, password, auth } = this.state
    if (auth) {
      return <Redirect to='/departments' />
    }
    return (
      <form onSubmit={this.authFormSubmitHandler}>
        <label htmlFor='login'>Login:
          <input id='login' type='text' value={login} onChange={this.loginFormHandler} placeholder='login' />
        </label>

        <label htmlFor='password'>Password:
          <input id='password' type='password' value={password} onChange={this.passwordFormHandler} placeholder='password' />
        </label>

        <button type='submit'>Log in</button>
      </form>
    )
  }
}

export default Login