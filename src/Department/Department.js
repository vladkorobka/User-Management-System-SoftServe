import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import API from '../API'

class Department extends Component {
  constructor (props) {
    super(props)
    this.state = {
      departmentDescription: null,
      requestError: null
    }
  }

  componentDidMount () {
    this.getDepartamentById()
  }

  getDepartamentById = async () => {
    const { match: { params: { id } } } = this.props
    try {
      const data = await API.getDepartamentById(id)
      this.setState({
        departmentDescription: data.data.description
      })
    } catch (error) {
      this.setState({
        requestError: error.message
      })
    }
  }

  render () {
    const { requestError, departmentDescription } = this.state;
    if (requestError) {
      return <h1>{requestError}</h1>;
    }

    if (!localStorage.getItem('token')) {
      return <Redirect to='/login' />
    }

    return <div>{departmentDescription}</div>;
  }
}

export default Department