import React from 'react';
import { Link } from "react-router-dom";


function Login() {
  return (
    <div className="container-fluid w-50 p-4 justify-content-center pb-4">
      <h1>Login</h1>
      <form>
        <div className="form-outline mb-4">
          <input type="email" id="form2Example1" className="form-control"/>
          <label className="form-label" htmlFor="form2Example1">Email address</label>
        </div>
        <div className="form-outline mb-4">
          <input type="password" id="form2Example2" className="form-control"/>
          <label className="form-label" htmlFor="form2Example2">Password</label>
        </div>
        <button type="button" className="btn btn-primary btn-block mb-4">Sign in</button>
        <div className="text-center">
          <p>Not a member? <Link to="/register">Register</Link></p>
          <p>or sign in with:</p>
          <button type="button" className="btn btn-link btn-floating mx-1">
            <i className="fa fa-facebook-f"></i>
          </button>
          <button type="button" className="btn btn-link btn-floating mx-1">
            <i className="fa fa-google"></i>
          </button>
          <button type="button" className="btn btn-link btn-floating mx-1">
            <i className="fa fa-twitter"></i>
          </button>
          <button type="button" className="btn btn-link btn-floating mx-1">
            <i className="fa fa-github"></i>
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;