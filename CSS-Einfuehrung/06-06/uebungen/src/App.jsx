import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Speisekarte from './pages/Speisekarte'
import Galerie from './pages/Galerie'
import Kontakt from './pages/Kontakt'
import Oeffnungszeiten from './pages/Oeffnungszeiten'
import Nav from './components/Nav'

function App() {

  return (
    <>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Speisekarte" element={<Speisekarte />} />
          <Route path="/Galerie" element={<Galerie />} />
          <Route path="/Kontakt" element={<Kontakt />} />
          <Route path="/Oeffnungszeiten" element={<Oeffnungszeiten />} />
        </Routes>
    </>
  )
}

export default App
