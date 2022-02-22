import React, { Suspense } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PageError from './PageError/PageError'
import PrivateRoute from './PrivateRoute/PrivateRoute'
import Login from './Login/Login'

const Departments = React.lazy(() => import ('./Departments/Departments'))
const Department = React.lazy(() => import ('./Department/Department'))

function App() {
  return (
    <Router>
      <div className='App'>
            <Switch>
              <PrivateRoute exact path='/' />
              <Route path='/login' component={Login} />
              <Suspense fallback={<div>Loading</div>}>
                <Switch>
                  <Route path='/departments/:id' component={Department} />
                  <Route path='/departments' component={Departments} />
                  <Route path='/*' component={PageError} />
                </Switch>
              </Suspense>
            </Switch>
      </div>
    </Router>
  );
}

export default App