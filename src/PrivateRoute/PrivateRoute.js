import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export default function PrivateRoute({component: Component, ...rest}) {
  return (
    <Route
    {...rest}
    render={(props) => {
      if (localStorage.getItem(process.env.REACT_APP_TOKEN_NAME) && props.location.pathname !== '/') {
        return <Component {...props} />
      }
      return <Redirect to={
        {
          pathname: '/login',
          state: {
            from: props.location
          }
        }
      }
      />
    }}
    />
  )
}