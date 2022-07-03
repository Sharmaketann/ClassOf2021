import React from 'react'
import Home from './Home'
import { Route, Routes } from 'react-router-dom'
import Details from './Details'

function Pages() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/student/:name' element={<Details />} />
    </Routes>
  )
}

export default Pages
