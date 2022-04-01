import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthenticationDispatch, useAuthenticationState } from "../../context/authentication.context"
import { logout } from "../../actions/authentication.action"

function Home() {
  const navigate = useNavigate();
  const { user } = useAuthenticationState()
  const dispatch = useAuthenticationDispatch()

  const handleLogout = () => {
    logout(dispatch)
    navigate('/login', { replace: true })
  }
  return (
    <div>
      <h1> Welcome, {user.firstName} {user.lastName} </h1>
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