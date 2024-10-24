import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import Navbar from "../src/Components/Shared/Navbar";
import Footer1 from "../src/Components/Shared/Footer1";
import AboutUs from './pages/AboutUs';
// import AboutPage from './pages/AboutPage';
// import NotFoundPage from './pages/NotFoundPage';

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutUs />} />

        {/* <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
      <Footer1 />
      </>
  );
};

export default App;
