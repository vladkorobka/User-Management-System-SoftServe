import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export default function PrivateRouteLogin({component: Component, ...rest}) {
  return (
    <Route
    {...rest}
    render={(props) => {
      if (!localStorage.getItem(process.env.REACT_APP_TOKEN_NAME)) {
        return <Component {...props} />
      }
      return <Redirect to={
        {
          pathname: '/departments',
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