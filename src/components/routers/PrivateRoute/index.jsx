import React, { useEffect } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { useApplicationDispatch, useApplicationState } from "../../../context/application.context"
import { alertActions } from "../../../actions/alert.action"

function PrivateRoute({ children }) {
  const { auth: user } = useApplicationState()
  const { alertDispatch } = useApplicationDispatch()
  const location = useLocation()

  useEffect(() => {
    alertDispatch(alertActions.clear());
  }, [location]);

  return user.logged
    ? children
    : <Navigate to="/login"/>
}

export default PrivateRoute