import React, { Component } from 'react';
import API from '../API';

class Department extends Component {
  constructor(props) {
    super(props);
    this.state = {
      departmentDescription: null,
      requestError: null
    };
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const getDepartamentById = async () => {
      const data = await API.getDepartamentById(id);
      if (data.statusText === 'OK') {
        this.setState({
          departmentDescription: data.data.description
        });
      } else {
        this.setState({
          requestError: data
        });
      }
    };

    getDepartamentById();
  }

  render() {
    const { requestError, departmentDescription } = this.state;
    if (requestError) {
      return <h1>{requestError}</h1>;
    }
    return <div>{departmentDescription}</div>;
  }
}

export default Department;
