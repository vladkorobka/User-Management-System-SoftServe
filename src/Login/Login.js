import React, { Component } from 'react'
import './Login.css'

class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {
      login: '',
      password: ''
    }
  }

  authFormSubmitHandler = (event) => {
    event.preventDefault()
    localStorage.setItem('token', process.env.REACT_APP_TOKEN)
    const { history } = this.props
    history.push('/departments')
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
    const { login, password} = this.state

    return (
      <div className='wrapper'>
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