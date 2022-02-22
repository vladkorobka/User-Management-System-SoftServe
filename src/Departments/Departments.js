import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import API from '../API'

class Departments extends Component {
  constructor (props) {
    super(props)
    this.state = {
      departments: [],
      requestError: null
    }
  }

  componentDidMount () {
    this.getDepartaments()
  }

  getDepartaments = async () => {
    try {
      const data = await API.getDepartaments()
      this.setState({
        departments: data.data
      })
    } catch (error) {
      this.setState({
        requestError: error.message
      })
    }
  }

  render () {
    const {requestError, departments} = this.state
    if (requestError) {
      return <h1>{requestError}</h1>
    }

    if (!localStorage.getItem('token')) {
      return <Redirect to='/login' />
    }

    const dataToRender = departments.map(({id, name}) => <li key={id}><Link to={`/departments/${id}`}>{`${name}`}</Link></li>)
    return <ul>{dataToRender}</ul>
  }
}

export default Departments