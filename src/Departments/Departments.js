import React, { Component } from "react"
import { Link } from "react-router-dom"
import API from "../API"

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
      const data = await API.getDepartaments()
      if (data.statusText === "OK") {
        this.setState({
          departments: data.data
        })
      } else {
        this.setState({
          requestError: data
        })
      }
    };

    getDepartaments();
  }

  render() {
    if (this.state.requestError) {
      return <div>{this.state.requestError}</div>
    }
    return (
      this.state.departments.map(({ id, name }) => {
        return <div key={id}>
          <Link to={`/departments/${id}`}>{name}</Link>
        </div>
      })
    )
  }
}

export default Departments