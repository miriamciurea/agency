// import AboutSection from '../Components/AboutUs/History';
import HeroAbout from '../Components/AboutUs/HeroAbout';
import StepComponent from '../Components/AboutUs/Journey';
import MeetTheTeam from '../Components/AboutUs/MeetTheTeam';
import SliderAbout from '../Components/AboutUs/SliderAbout';
// import History from '../Components/AboutUs/History';


const AboutUs: React.FC = () => {
  return (
    <>
      <HeroAbout />
      <SliderAbout />
      <StepComponent />
      <MeetTheTeam />
      {/* <History  /> */}
    </>
  );
}

export default AboutUs;
