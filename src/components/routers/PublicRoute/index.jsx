import React from 'react'
import { Navigate } from 'react-router-dom'
import { useApplicationState } from "../../../context/application.context"

function PublicRoute({ children }) {
  const { auth:user } = useApplicationState()

  return user.logged
    ? <Navigate to="/" />
    : children
}

export default PublicRoute