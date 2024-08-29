import './App.css'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import Home from './pages/Home'
import Search from './pages/Search'
import Landing from './pages/Landing'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/search' element={<Search />} />
        <Route path='/landing' element={<Landing />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
