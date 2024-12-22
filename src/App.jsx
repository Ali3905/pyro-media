import './App.css'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom"
import Home from './pages/Home'
import Landing from './pages/Landing'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing />} />
        {/* <Route path='/search' element={<Search />} /> */}
        <Route path='/details/:userName' element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
