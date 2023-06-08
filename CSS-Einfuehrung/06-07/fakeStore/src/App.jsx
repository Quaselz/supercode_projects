
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Details from './pages/Details'
import Nav from './components/Nav/Nav'

function App() {

  return (
    <>
    <Nav />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/details/:id" element={<Details />}/>
      </Routes>
    </>
  )
}

export default App
