import React, { Component } from "react"
import API from "../API.js"

class Department extends Component {
  constructor (props) {
    super(props)
    this.state = {
      departmentDescription: null,
      requestError: null
    }
  }

  componentDidMount () {
    const departmentid = this.props.match.params.id;
    const getDepartamentById = async () => {
      const data = await API.getDepartamentById(departmentid);
      if (data.statusText === "OK") {
        this.setState({
          departmentDescription: data.data.description
        })
      } else {
        this.setState({
          requestError: data
        })
      }
    };

    getDepartamentById();
  }

  render () {
    if (this.state.requestError) {
      return <div><h1>{this.state.requestError}</h1></div>
    } else {
      return <div>{this.state.departmentDescription}</div>
    }
  }
}

export default Department