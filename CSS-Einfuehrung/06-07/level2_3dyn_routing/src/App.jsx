import { Route, Routes } from 'react-router-dom'
import './App.css'
import Nav from './components/Nav'
import CarSection from './components/CarsSection'
import Details from './pages/Details'
function App() {
  return (
    <>
    <Nav />
      <Routes>
        <Route path="/" element={<CarSection />}/>
        <Route path="/details/:id" element={<Details />}/>
      </Routes>
    </>
  )
}

export default App
