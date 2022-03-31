import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import React from "react";
import Home from "./pages/Home";
import Layout from "./components/Layout";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Layout/> }>
          <Route index element={ <Home/> }/>
          <Route path="login" element={ <Login/> }/>
          <Route path="register" element={ <Register/> }/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App;
