import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import './Login.css'

class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {
      login: '',
      password: '',
      isLoggedIn: false
    }
  }

  authFormSubmitHandler = (event) => {
    event.preventDefault()
    localStorage.setItem(process.env.REACT_APP_TOKEN_NAME, process.env.REACT_APP_TOKEN)
    // const { history } = this.props // temp
    // history.push('/departments') // temp
    // return <Redirect to='/departments' /> // <-- this one doesn't work correctly
    this.setState({
      isLoggedIn: true
    })
  }

  loginFormHandler = (event) => {
    this.setState({
      login: event.target.value
    })
  }

  passwordFormHandler = (event) => {
    this.setState({
      password: event.target.value
    })
  }

  render () {
    const { login, password, isLoggedIn } = this.state

    if (isLoggedIn) {
      return <Redirect to='/departments' />
    }
    return (
      <div className='Login Login__wrapper'>
        <form onSubmit={this.authFormSubmitHandler}>
          <label htmlFor='login'>Login:
            <input id='login' type='text' value={login} onChange={this.loginFormHandler} />
          </label>

          <label htmlFor='password'>Password:
            <input id='password' type='password' value={password} onChange={this.passwordFormHandler} />
          </label>

          <button type='submit'>Log in</button>
        </form>
      </div>
    )
  }
}

export default Login