import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuthenticationState } from "../../../context/authentication.context"

function PrivateRoute({ children }) {
  const user = useAuthenticationState()

    return user.logged
    ? children
    : <Navigate to="/login" />
}

export default PrivateRoute