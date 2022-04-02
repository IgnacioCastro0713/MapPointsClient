import React, from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { useApplicationState } from '../../../context/application.context'


import PublicRoute from "../PublicRoute"
import Login from "../../../pages/Login"
import PrivateRoute from "../PrivateRoute"
import Home from "../../../pages/Home"
import Register from "../../../pages/Register"


function AppRouter() {
  const { alert } = useApplicationState()

  return (
    <div>
      { alert.message &&
        <div className='align-items-center text-center mt-1'>
          <div className={ `alert w-50 m-auto ${ alert.type }` }>{ alert.message }</div>
        </div>
      }
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={ <PublicRoute><Login/></PublicRoute> }/>
          <Route path="/register" element={ <PublicRoute><Register/></PublicRoute> }/>
          <Route path="/" element={ <PrivateRoute><Home/></PrivateRoute> }/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default AppRouter