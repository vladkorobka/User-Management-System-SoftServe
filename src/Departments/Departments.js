import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import API from '../API';

class Departments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      departments: [],
      requestError: null
    };
  }

  componentDidMount() {
    const getDepartaments = async () => {
      const data = await API.getDepartaments();
      if (data.statusText === 'OK') {
        this.setState({
          departments: data.data
        });
      } else {
        this.setState({
          requestError: data
        });
      }
    };

    getDepartaments();
  }

  render() {
    const { requestError, departments } = this.state;
    const error = requestError;
    const dataToRender = departments.map(({ id, name }) => <div key={id}><Link to={`/departments/${id}`}>{`${name}`}</Link></div>);

    const element = error
      ? <h1>{error}</h1>
      : <div>{dataToRender}</div>;

    return element;
  }
}

export default Departments;
