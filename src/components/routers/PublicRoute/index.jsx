import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuthenticationState } from "../../../context/authentication.context"

function PublicRoute({ children }) {
  const user = useAuthenticationState()

  return user.logged
    ? <Navigate to="/marvel" />
    : children
}

export default PublicRoute