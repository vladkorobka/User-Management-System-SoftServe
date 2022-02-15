import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    if (true) { // in future there will be checking for token
      return <Link to="./departments">Departments</Link>;
    }
    return null;
  }
}

export default Login;
