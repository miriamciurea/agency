import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import '../src/Components/Homepage/Navbar.tsx'
import Navbar from '../src/Components/Homepage/Navbar.tsx'
import Hero from '../src/Components/Homepage/Hero.tsx'
import Slider from './Components/Homepage/Slider.tsx'
import Statement from './Components/Homepage/Statement.tsx'
import WhatWeDo from './Components/Homepage/WhatWeDo.tsx'
import AestheticsSection from './Components/Homepage/AestheticsSection.tsx'
import PortfolioSection from './Components/Homepage/PortfolioSection.tsx'
import CompaniesSection from './Components/Homepage/CompaniesSection.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Navbar />
    <Hero />
    <Slider />
    <Statement />
    <WhatWeDo />
    <AestheticsSection />
    <PortfolioSection />
    <CompaniesSection />

  </StrictMode>,
)
