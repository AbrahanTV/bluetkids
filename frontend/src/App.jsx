import { BrowserRouter, Routes, Route } from 'react-router'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import EnrollPage from './pages/EnrollPage'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inscripcion" element={<EnrollPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
