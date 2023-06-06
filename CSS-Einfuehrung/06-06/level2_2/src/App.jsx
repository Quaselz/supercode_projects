
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Details from './pages/Details'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='Blog' element={<Blog />}/>
        {/* <Route path='Details' element={<Details />}/> */}
        <Route path='Details/:userId' element={<Details />}/>
      </Routes>
    </>
  )
}

export default App
