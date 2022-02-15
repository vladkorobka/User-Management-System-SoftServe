import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Error from './Error/Error';
import Login from './Login/Login';
import Departments from './Departments/Departments';
import Department from './Department/Department';
import Employees from './Employees/Employees';
import Employee from './Employee/Employee';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/departments/:id" component={Department} />
          <Route path="/departments" component={Departments} />
          <Route path="/employee:id" component={Employee} />
          <Route path="/employees" component={Employees} />
          <Route path="/*" component={Error} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
