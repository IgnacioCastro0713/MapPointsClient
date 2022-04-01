import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useAuthenticationDispatch } from "../../context/authentication.context";
import { authenticate } from "../../actions/authentication.action";


function Login({ history }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useAuthenticationDispatch()

  const handleLogin = async (e) => {
    e.preventDefault()
    let payload = { email, password }
    try {
      let response = await authenticate(dispatch, payload)
      if (!response.user) return
      history.push("/home")
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div className="container-fluid w-50 p-4 justify-content-center pb-4">
      <h1>Login</h1>
      <form>
        <div className="form-outline mb-4">
          <input type="email" id="email" className="form-control" value={ email }
                 onChange={ (e => setEmail(e.target.value)) }/>
          <label className="form-label">Email address</label>
        </div>
        <div className="form-outline mb-4">
          <input type="password" id="password" className="form-control" value={ password }
                 onChange={ e => setPassword(e.target.value) }/>
          <label className="form-label">Password</label>
        </div>
        <button type="button" className="btn btn-primary btn-block mb-4" onClick={ handleLogin }>Sign in</button>
        <div className="text-center">
          <p>Not a member? <Link to="/register">Register</Link></p>
          <p>or sign in with:</p>
          <button type="button" className="btn btn-link btn-floating mx-1">
            <i className="fa fa-facebook-f"/>
          </button>
          <button type="button" className="btn btn-link btn-floating mx-1">
            <i className="fa fa-google"/>
          </button>
          <button type="button" className="btn btn-link btn-floating mx-1">
            <i className="fa fa-twitter"/>
          </button>
          <button type="button" className="btn btn-link btn-floating mx-1">
            <i className="fa fa-github"/>
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;