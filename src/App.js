import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/home'
import Buceo from './Pages/buceo'
import Robotica from './Pages/robotica'
import Nosotros from './Pages/nosotros'
import Politica from './Pages/politica'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/buceo" element={<Buceo />} />
        <Route path="/robotica" element={<Robotica />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/politica" element={<Politica />} />
      </Routes>
    </Router>
  )
}

export default App;
