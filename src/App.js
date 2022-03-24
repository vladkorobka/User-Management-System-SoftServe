import React, { Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import PageError from './PageError/PageError'
import PrivateRoute from './PrivateRoute/PrivateRoute'
// import PrivateRouteLogin from './PrivateRouteLogin/PrivateRouteLogin'

import Login from './Login/Login'

const Departments = React.lazy(() => import ('./Departments/Departments'))
const Department = React.lazy(() => import ('./Department/Department'))

function redirectToDepartments () {
  return <Redirect to='/departments' />
}

function App () {
  return (
    <Router>
      <div className='App'>
        <Switch>
          <Route path='/login' component={Login} />
          <Suspense fallback={<div>Loading</div>}>
            <Switch>
            <PrivateRoute exact path='/' component={redirectToDepartments} />
              <PrivateRoute path='/departments/:id' component={Department} />
              <PrivateRoute path='/departments' component={Departments} />
              <Route path='/*' component={PageError} />
            </Switch>
          </Suspense>
        </Switch>
      </div>
    </Router>
  )
}

export default App