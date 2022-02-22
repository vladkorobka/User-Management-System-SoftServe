import React, { Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PageError from './PageError/PageError'
import PrivateRoute from './PrivateRoute/PrivateRoute'

const Login = React.lazy(() => import ('./Login/Login'))
const Departments = React.lazy(() => import ('./Departments/Departments'))
const Department = React.lazy(() => import ('./Department/Department'))
// const Employees = React.lazy(() => import ('./Employees/Employees'))
// const Employee = React.lazy(() => import ('./Employee/Employee'))

function App() {
  return (
    <Router>
      <div className='App'>
          <Suspense fallback={<div>Loading</div>}>
            <Switch>
            <PrivateRoute exact path='/' />
              <Route path='/login' component={Login} />
              <Route path='/departments/:id' component={Department} />
              <Route path='/departments' component={Departments} />
              <Route path='*' component={PageError} />
            </Switch>
          </Suspense>
      </div>
    </Router>
  );
}

export default App