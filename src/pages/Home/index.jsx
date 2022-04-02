import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useApplicationDispatch, useApplicationState } from "../../context/application.context"
import { logout } from "../../actions/authentication.action"

function Home() {
  const navigate = useNavigate();
  const { auth: { user } } = useApplicationState()
  const { authDispatch } = useApplicationDispatch()

  const handleLogout = () => {
    logout(authDispatch)
    navigate('/login', { replace: true })
  }
  return (
    <div>
      <h1> Welcome, { user.firstName } { user.lastName } </h1>
      <button
        className="nav-item nav-link btn"
        onClick={ handleLogout }
      >
        Logout
      </button>
    </div>
  )
}

export default Home