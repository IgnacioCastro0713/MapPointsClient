import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { useApplicationDispatch } from "../../context/application.context";
import { alertTypes } from "../../types/alert.type";

const ROOT_URL = 'https://localhost:7163';


function Register() {
  const [email, setEmail] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [password, setPassword] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const { alertDispatch } = useApplicationDispatch()


  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitted(true)

    if (email && firstName && lastName && password) {
      try {
        const config = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email,
            firstName,
            lastName,
            password
          })
        }
        const response = await fetch(`${ ROOT_URL }/User/Register`, config)
        const data = await response.json()
        alertDispatch({ type: alertTypes.SUCCESS, message: data.message })
      } catch (error) {
        alertDispatch({ type: alertTypes.ERROR, message: error.message })
      }
    }
  }

  return (
    <div className="container p-4 w-50 justify-content-center pb-4">
      <h1>Register</h1>
      <form>
        <div className="form-outline mb-4">
          <label className="form-label">First name</label>
          <input type="text" id="first_name"
                 className={ `form-control ${ submitted && !firstName ? ' is-invalid' : '' }` }
                 value={ firstName }
                 onChange={ (e => setFirstName(e.target.value)) }/>
          { submitted && !firstName && <span className="invalid-feedback">Firstname is required</span> }
        </div>
        <div className="form-outline mb-4">
          <label className="form-label">Last name</label>
          <input type="email" id="last_name"
                 className={ `form-control ${ submitted && !lastName ? ' is-invalid' : '' }` }
                 value={ lastName }
                 onChange={ (e => setLastName(e.target.value)) }/>
          { submitted && !lastName && <span className="invalid-feedback">Lastname is required</span> }
        </div>
        <div className="form-outline mb-4">
          <label className="form-label">Email</label>
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
        <button type="submit" className="btn btn-primary btn-block mb-3" onClick={ handleSubmit }>Sign up</button>
        <div className="text-center">
          <p>Are you Member? <Link to="/login">Login</Link></p>
          <p>or sign up with:</p>
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

export default Register