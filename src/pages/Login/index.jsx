import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { useAuthenticationDispatch } from "../../context/authentication.context"
import { authenticate } from "../../actions/authentication.action"


function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const dispatch = useAuthenticationDispatch()
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    setSubmitted(true);
    if (email && password) {
      let payload = { email, password }
      try {
        let response = await authenticate(dispatch, payload)
        if (!response?.user) return
        navigate("/", { replace: true })
      } catch (e) {
        console.log(e)
      }
    }
  }

  return (
    <div className="container-fluid w-50 p-4 justify-content-center pb-4">
      <h1>Login</h1>
      <form>
        <div className="form-outline mb-4">
          <label className="form-label">Email address</label>
          <input type="email" id="email"
                 className={ `form-control${ submitted && !email ? ' is-invalid' : '' }` }
                 value={ email }
                 onChange={ (e => setEmail(e.target.value)) }/>
          { submitted && !email && <span className="invalid-feedback">Email is required</span> }
        </div>
        <div className="form-outline mb-4">
          <label className="form-label">Password</label>
          <input type="password" id="password"
                 className={ `form-control${ submitted && !password ? ' is-invalid' : '' }` }
                 value={ password }
                 onChange={ e => setPassword(e.target.value) }/>
          { submitted && !password && <span className="invalid-feedback">Password is required</span> }
        </div>
        <button type="submit" className="btn btn-primary btn-block mb-4" onClick={ handleLogin }>Sign in</button>

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

export default Login