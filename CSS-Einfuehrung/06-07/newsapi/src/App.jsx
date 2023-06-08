import { useState } from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import NewsDetails from './pages/NewsDetails'

import './App.css'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/news/:id" element={<NewsDetails />}/>
      </Routes>
    </>
  )
}

export default App
