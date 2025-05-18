import React from 'react'
import {Routes, Route} from "react-router-dom"
import Dashboard from './pages/Dashboard'
import ChangeUpdateForm from './components/ChangeUpdateForm'
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='/change-update' element={<ChangeUpdateForm />} />
    </Routes>
  )
}

export default App
