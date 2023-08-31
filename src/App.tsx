import './App.css'

import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Navbar from './components/navbar/Navbar'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Projects from './pages/Projects'




function App() {

  return (
    <>
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/profile' element={<Profile />}/>
            <Route path='/projects' element={<Projects />}/>
          </Routes>
        </Router>
    </>
  )
}

export default App
