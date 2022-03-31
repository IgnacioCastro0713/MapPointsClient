import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";


function Login() {
  return (
    <section className="vh-100">
      <div className="container py-5 h-100">
        <div className="row d-flex align-items-center justify-content-center h-100">
          <div className="col-md-8 col-lg-7 col-xl-6">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                 className="img-fluid" alt="Phone image"/>
          </div>
          <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
            <form>
              <div className="form-outline mb-4">
                <input type="email" id="form1Example13" className="form-control form-control-lg"/>
                <label className="form-label" htmlFor="form1Example13">Email address</label>
              </div>

              <div className="form-outline mb-4">
                <input type="password" id="form1Example23" className="form-control form-control-lg"/>
                <label className="form-label" htmlFor="form1Example23">Password</label>
              </div>

              <div className="d-flex mb-4">
                <button type="submit" className="btn btn-primary  btn-block">Sign in</button>{"    "}
                <Link to="/register" className="mt-1 m-lg-1" >Register</Link>
              </div>


              <div className="divider d-flex align-items-center my-4">
                <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
              </div>

              <a className="btn btn-primary btn-lg btn-block" style={ { backgroundColor: '#3b5998' } } href="#!"
                 role="button">
                <i className="fab fa-facebook-f me-2"></i>Continue with Facebook
              </a>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;