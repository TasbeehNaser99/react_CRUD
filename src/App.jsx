import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Create from './components/users/Create'
import Index from './components/users/Index'
import Details from './components/users/Details'
import Edit from './components/users/Edit'
function App() {
  return (
   <Routes>
    <Route path='/' element={<Index/>}/>
    <Route path='/users/:id' element={<Details/>}/>
    <Route path='/users/index' element={<Index/>}/>
    <Route path='/users/create' element={<Create/>}/>
    <Route path='/users/edit/:id' element={<Edit/>}/>
    <Route path='/*' element={<h2>page Not Found</h2>}/>
   </Routes>
  )
}

export default App