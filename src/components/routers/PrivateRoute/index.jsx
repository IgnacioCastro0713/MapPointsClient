import React from 'react'
import { Navigate } from 'react-router-dom'
import { useApplicationState } from "../../../context/application.context"

function PrivateRoute({ children }) {
  const { auth:user } = useApplicationState()

  return user.logged
    ? children
    : <Navigate to="/login"/>
}

export default PrivateRoute