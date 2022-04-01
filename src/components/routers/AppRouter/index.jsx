import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"

import PublicRoute from "../PublicRoute"
import Login from "../../../pages/Login"
import PrivateRoute from "../PrivateRoute"
import Home from "../../../pages/Home"
import Register from "../../../pages/Register"


function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={ <PublicRoute><Login/></PublicRoute> }/>
        <Route path="/register" element={ <PublicRoute><Register/></PublicRoute> }/>
        <Route path="/" element={ <PrivateRoute><Home/></PrivateRoute> }/>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter