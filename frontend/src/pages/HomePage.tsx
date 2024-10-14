import Hero from '../Components/Homepage/Hero';
import Slider from "../Components/Homepage/Slider";
import Statement from "../Components/Homepage/Statement";
import What from "../Components/Homepage/WhatWeDo";
import Aesthetics from "../Components/Homepage/AestheticsSection";
import Portofolio from "../Components/Homepage/PortfolioSection";
import Companies from "../Components/Homepage/CompaniesSection";
import Cta from '../Components/Homepage/Cta';

const HomePage = () => {
  return (
    <>
      <Hero />
      <Slider />
      <Statement />
      <What />
      <Aesthetics />
      <Portofolio />
      <Companies />
      <Cta />
    </>
  );
}

export default HomePage;
