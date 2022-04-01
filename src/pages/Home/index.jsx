import React from 'react';
import { useNavigate } from 'react-router-dom'
import { useAuthenticationDispatch } from "../../context/authentication.context";
import { logout } from "../../actions/authentication.action";

function Home() {
  const navigate = useNavigate();
  const dispatch = useAuthenticationDispatch()

  const handleLogout = () => {
    logout(dispatch)
    navigate('/login', { replace: true })
  }
  return (
    <button
      className="nav-item nav-link btn"
      onClick={ handleLogout }
    >
      Logout
    </button>
  )
}

export default Home