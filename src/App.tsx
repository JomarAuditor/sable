import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Menu from './pages/Menu'
import About from './pages/About'
import Visit from './pages/Visit'

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-cream">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<About />} />
            <Route path="/visit" element={<Visit />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}