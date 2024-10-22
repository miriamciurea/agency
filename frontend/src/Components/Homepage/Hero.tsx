import { useRef } from 'react';
import useMouseMove from '../hooks/useMouseMove';
import 'animate.css';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Apply the useMouseMove hook to the button within the container
  useMouseMove(containerRef, buttonRef);

  return (
    <section ref={containerRef} className="md:grid md:grid-cols-[1fr_2fr] items-center md:p-[2%] md:mt-[15%]">
      <div className="md:h-[100%] md:w-[100%] md:flex md:flex-col md:gap-[20px] md:justify-end animate__animated animate__fadeInLeft">
        <div className="md:pr-[20%] md:text-[1.3rem]">
          Pick a plan, submit a job request, and your project will kickoff within 24 hours.
        </div>

        <div className="">
          <button ref={buttonRef} className="button">Explore our services</button>
        </div>
      </div>

      <div className="animate__animated animate__fadeInRight">
        <h1 className="md:text-[2.4rem] md:font-[400] leading-tight">
          Creating tailored web solutions to drive your business forward. We build customized, high-performance websites for every company, bringing your vision to life.
        </h1>
      </div>
    </section>
  );
};

export default Hero;
