import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

import { AuthenticationProvider } from './context/authentication.context'
import AppRouter from './components/routers/AppRouter'

function App() {
  return (
    <AuthenticationProvider>
      <AppRouter/>
    </AuthenticationProvider>
  )
}

export default App
