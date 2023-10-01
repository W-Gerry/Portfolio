import './App.scss'

import { HashRouter as Router, Routes, Route} from 'react-router-dom'

import Navbar from './components/navbar/Navbar'
import Home from './pages/Home'
import Projects from './pages/Projects'
import About from './pages/About'
import Contact from './pages/Contact'
import Recipes from './pages/Recipes'

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/projects' element={<Projects />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/recipes' element={<Recipes />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
