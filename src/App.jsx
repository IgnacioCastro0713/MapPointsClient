import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import 'font-awesome/css/font-awesome.min.css';

import { AuthenticationProvider } from "./context/authentication.context";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Layout from "./components/Layout";


function App() {
  return (
    <AuthenticationProvider>
      <Router>
        <Routes>
          <Route path="/" element={ <Layout/> }>
            <Route index element={ <Home/> }/>
            <Route path="login" element={ <Login/> }/>
            <Route path="register" element={ <Register/> }/>
          </Route>
        </Routes>
      </Router>
    </AuthenticationProvider>
  )
}

export default App;
