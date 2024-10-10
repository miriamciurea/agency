// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import '../src/Components/Homepage/Navbar.tsx'
// import Navbar from '../src/Components/Homepage/Navbar.tsx'
// import Hero from '../src/Components/Homepage/Hero.tsx'
// import Slider from './Components/Homepage/Slider.tsx'
// import Statement from './Components/Homepage/Statement.tsx'

// createRoot(document.getElementById('root')!).render(
//   <StrictMode>
//     <Navbar />
//     <Hero />
//     <Slider />
//     <Statement />
//   </StrictMode>,
// )

import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import App from './App'
import './index.css'
import {BrowserRouter} from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </StrictMode>,
)
