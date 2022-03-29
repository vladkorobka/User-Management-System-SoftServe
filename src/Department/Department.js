import React, { Component } from 'react'
import API from '../departmentsAPI'

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
    // const { match: { params: { id } } } = this.props
    // eslint-disable-next-line react/destructuring-assignment
    const departmentId = this.props?.match?.params?.id
    try {
      const data = await API.getDepartamentById(departmentId)
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
    const { requestError, departmentDescription } = this.state
    if (requestError) {
      return <h1>{requestError}</h1>
    }
    return <div>{departmentDescription}</div>
  }
}

export default Department