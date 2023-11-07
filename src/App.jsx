import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Create from './components/users/Create'
import Index from './components/users/Index'

function App() {
  return (
   <Routes>
    <Route path='/'/>
    <Route path='/users/index' element={<Index/>}/>
    <Route path='/users/create' element={<Create/>}/>
   </Routes>
  )
}

export default App