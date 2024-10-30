import aptLogo from '../../assets/Apt.png'; // Ensure the path is correct
import dnnLogo from '../../assets/DNNovation.png';
import 'animate.css';
import { useVisibilityAnimation } from '../hooks/useVisibilityAnimation';

const CompaniesSection: React.FC = () => {
  const { elementRef, isVisible } = useVisibilityAnimation('animate__fadeInUp', 0.1);

  return (
    <div
      ref={elementRef}
      className={`flex justify-center items-center gap-[5%] p-[5%] ${
        isVisible ? 'animate__animated animate__fadeInUp' : 'opacity-0'
      }`}
      style={{ transition: 'opacity 0.1s ease-in-out' }}
    >
      {/* Link to APT Telecommunications */}
      <a href="https://www.aptelecommunication.co.uk" target="_blank" rel="noopener noreferrer"
      className="transform transition-transform duration-300 hover:scale-110 hover:opacity-80">
        <div
          className="w-[65px] h-[100px] md:w-[100px] bg-no-repeat bg-center bg-contain"
          style={{
            backgroundImage: `url(${aptLogo})`
          }}
        ></div>
      </a>

      <div className="text-[0.8rem] text-center md:text-[1rem]" style={{ fontFamily: "var(--crazy)" }}>TRUSTED BY</div>

      {/* Link to DNNovation Construction */}
      <a href="https://www.dnnovationconstruction.co.uk" target="_blank" rel="noopener noreferrer"
      className="transform transition-transform duration-300 hover:scale-110 hover:opacity-80">
        <div
          className="w-[65px] h-[100px] md:w-[100px] bg-no-repeat bg-center bg-contain bg-black bg-opacity-10 rounded-full"
          style={{
            backgroundImage: `url(${dnnLogo})`
          }}
        ></div>
      </a>
    </div>
  );
};


export default CompaniesSection;
