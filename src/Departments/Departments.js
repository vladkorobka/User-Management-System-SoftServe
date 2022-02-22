import React, { Component } from 'react'
import { Link , Redirect } from 'react-router-dom'
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
      const getDepartaments = async () => {
        try {
          const data = await API.getDepartaments()
          if (data.status === 200) {
            this.setState({
              departments: data.data
            })
          }
        } catch (error) {
          this.setState({
            requestError: error.message
          })
        }
      }
      getDepartaments()
  }

  render () {
    if (!localStorage.getItem('token')) {
      return <Redirect to='/login' />
    }

    const {requestError, departments} = this.state

    const dataToRender = departments.map(({id, name}) =>
      <li key={id}>
        <Link to={`/departments/${id}`}>{`${name}`}</Link>
      </li>
    )

    if (requestError) {
      return <h1>{requestError}</h1>
    }
    return <ul>{dataToRender}</ul>
  }
}

export default Departments