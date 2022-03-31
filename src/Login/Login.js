import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import './Login.scss'
import { Form, FormGroup, Input, Button } from 'reactstrap'

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
        <Form className='Login Login__auth_form' onSubmit={this.authFormSubmitHandler}>
          <FormGroup>
            <Input id='login' type='text' value={login} placeholder='Login' onChange={this.loginFormHandler} />
          </FormGroup>
          <FormGroup>
            <Input id='password' type='password' value={password} placeholder='Password' onChange={this.passwordFormHandler} />
          </FormGroup>
          <Button color="primary" outline type='submit'>Log in</Button>
        </Form>
      </div>
    )
  }
}

export default Login