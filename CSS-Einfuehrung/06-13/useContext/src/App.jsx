import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import { darkLightContext, loadContext } from "./Context/Context";
import { useState } from 'react'


function App() {
  const [darkLight, setDarkLight] = useState(false)
  const [load, setLoad] = useState(false)

  darkLight?document.body.classList.add("light"):document.body.classList.remove("light")
  
  return (
    <>
    <loadContext.Provider value={{ load, setLoad }}>
      <darkLightContext.Provider value={{ darkLight, setDarkLight}}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </darkLightContext.Provider>
    </loadContext.Provider>
    </>
  )
}

export default App
