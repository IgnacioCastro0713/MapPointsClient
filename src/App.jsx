import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

import { ApplicationProvider } from './context/application.context'
import AppRouter from './components/routers/AppRouter'

function App() {
  return (
    <ApplicationProvider>
      <AppRouter/>
    </ApplicationProvider>
  )
}

export default App
