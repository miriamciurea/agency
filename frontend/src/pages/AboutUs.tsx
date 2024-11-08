import HeroAbout from '../Components/AboutUs/HeroAbout';
import MeetTheTeam from '../Components/AboutUs/MeetTheTeam';
import SliderAbout from '../Components/AboutUs/SliderAbout';
import StoryLine from '../Components/AboutUs/StoryLine';
// import MissionStatement from '../Components/AboutUs/MissionStatement';
import { useRef } from 'react';

const AboutUs: React.FC = () => {
  const meetTheTeamRef = useRef<HTMLDivElement>(null); // Reference for MeetTheTeam section

  return (
    <>
      <HeroAbout meetTheTeamRef={meetTheTeamRef} /> {/* Pass ref to HeroAbout */}
      <SliderAbout />
      <div ref={meetTheTeamRef}> {/* Attach the ref to this div wrapping MeetTheTeam */}
        {/* <MissionStatement /> */}
        <StoryLine />
        <MeetTheTeam />
      </div>
      {/* <History  /> */}
    </>
  );
}

export default AboutUs;
