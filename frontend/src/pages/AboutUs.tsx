import HeroAbout from '../Components/AboutUs/HeroAbout';
import StepComponent from '../Components/AboutUs/Journey';
import MeetTheTeam from '../Components/AboutUs/MeetTheTeam';
import SliderAbout from '../Components/AboutUs/SliderAbout';
import { useRef } from 'react';

const AboutUs: React.FC = () => {
  const meetTheTeamRef = useRef<HTMLDivElement>(null); // Reference for MeetTheTeam section

  return (
    <>
      <HeroAbout meetTheTeamRef={meetTheTeamRef} /> {/* Pass ref to HeroAbout */}
      <SliderAbout />
      <StepComponent />
      <div ref={meetTheTeamRef}> {/* Attach the ref to this div wrapping MeetTheTeam */}
        <MeetTheTeam />
      </div>
      {/* <History  /> */}
    </>
  );
}

export default AboutUs;
