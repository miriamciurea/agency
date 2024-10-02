import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import '../src/Components/Homepage/Navbar.tsx'
import Navbar from '../src/Components/Homepage/Navbar.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar />

  </StrictMode>,
)
