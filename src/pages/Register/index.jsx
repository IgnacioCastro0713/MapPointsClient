import React from 'react'
import { Link } from "react-router-dom"


function Register() {
  return (
    <div className="container p-4 w-50 justify-content-center pb-4">
      <h1>Register</h1>
      <form>
        <div className="form-outline mb-4">
          <input type="text" id="name" className="form-control"/>
          <label className="form-label">Name</label>
        </div>
        <div className="form-outline mb-4">
          <input type="email" id="first_name" className="form-control"/>
          <label className="form-label">First name</label>
        </div>
        <div className="form-outline mb-4">
          <input type="email" id="last_name" className="form-control"/>
          <label className="form-label">Last name</label>
        </div>
        <div className="form-outline mb-4">
          <input type="email" id="email" className="form-control"/>
          <label className="form-label">Email</label>
        </div>
        <div className="form-outline mb-4">
          <input type="password" id="registerPassword" className="form-control"/>
          <label className="form-label">Password</label>
        </div>
        <div className="form-outline mb-4">
          <input type="password" id="registerRepeatPassword" className="form-control"/>
          <label className="form-label">Repeat password</label>
        </div>
        <button type="submit" className="btn btn-primary btn-block mb-3">Sign in</button>
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