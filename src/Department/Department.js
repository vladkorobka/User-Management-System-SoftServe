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
    const { match: { params: { id } } } = this.props
    const getDepartamentById = async () => {
      try {
        const data = await API.getDepartamentById(id)
        if (data.status === 200) {
          this.setState({
            departmentDescription: data.data.description
          })
        }
      } catch (error) {
        this.setState({
          requestError: error.message
        })
      }
    }
    getDepartamentById()
  }

  render () {
    if (!localStorage.getItem('token')) {
      return <Redirect to='/login' />
    }

    const { requestError, departmentDescription } = this.state;
    if (requestError) {
      return <h1>{requestError}</h1>;
    }
    return <div>{departmentDescription}</div>;
  }
}

export default Department;
