import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import '../src/Components/Homepage/Navbar.tsx'
import Navbar from '../src/Components/Homepage/Navbar.tsx'
import Hero from '../src/Components/Homepage/Hero.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar />
    <Hero />

  </StrictMode>,
)
