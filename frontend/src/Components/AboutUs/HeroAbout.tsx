import { useRef } from 'react';
import useMouseMove from '../hooks/useMouseMove';
import 'animate.css';

const HeroAbout = ({ meetTheTeamRef }: { meetTheTeamRef: React.RefObject<HTMLDivElement> }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Apply the useMouseMove hook to the button within the container
  useMouseMove(containerRef, buttonRef);

  const scrollToMeetTheTeam = () => {
    if (meetTheTeamRef.current) {
      meetTheTeamRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section ref={containerRef} className="p-[7%] gap-[20%]
                                          grid md:grid-cols-[1fr_2fr] items-center md:p-[2%] md:mt-[15%] md:gap-0">
      <div className="flex flex-col gap-[20px]
                      md:h-[100%] md:w-[100%] md:justify-end animate__animated animate__fadeInLeft">
        <div className="md:pr-[20%] md:text-[1.3rem]">
          Curious to know the team you’ll be working with? See how experienced we are in the industry.
        </div>

        <div className="">
          <button ref={buttonRef} className="button" onClick={scrollToMeetTheTeam}>
            Meet our Team
          </button>
        </div>
      </div>

      <div className="animate__animated animate__fadeInRight">
        <h1 className=" text-[1.6rem]
                        md:text-[2.4rem] md:font-[400] leading-tight">
          At MoonCode, we turn your vision into reality with custom web development services that empower your brand and drive your success.
        </h1>
      </div>
    </section>
  );
};

export default HeroAbout;
