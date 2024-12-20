import { useRef } from 'react';
import useMouseMove from '../hooks/useMouseMove';
import 'animate.css';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const navigate = useNavigate();

  // Apply the useMouseMove hook to the button within the container
  useMouseMove(containerRef, buttonRef);

  return (
    <section ref={containerRef} className="p-[7%] gap-[20%]
                                            grid md:grid-cols-[1fr_2fr] items-center md:p-[2%] md:mt-[12%] md:gap-0">
      <div className="flex flex-col gap-[20px]
                      md:h-[100%] md:w-[100%] md:justify-end animate__animated animate__fadeInLeft">
        <div className="md:pr-[20%] md:text-[1.3rem]">
        Submit a job request, and we’ll get back to you as soon as possible to start your project.

        </div>

        <div className="">
          <button ref={buttonRef} className="button" onClick={() => navigate('/services')}>Explore our services</button>
        </div>
      </div>

      <div className="animate__animated animate__fadeInRight">
        <h1 className=" text-[1.6rem]
                        md:text-[2.4rem] md:font-[400] leading-tight">
          Creating tailored web solutions to drive your business forward. We build customized, high-performance websites for every company, bringing your vision to life.
        </h1>
      </div>
    </section>
  );
};

export default Hero;
