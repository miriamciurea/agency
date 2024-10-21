import aptLogo from '../../assets/Apt.png'; // Ensure the path is correct
import dnnLogo from '../../assets/DNNovation.png';
import 'animate.css';
import { useVisibilityAnimation } from '../hooks/useVisibilityAnimation';

const CompaniesSection: React.FC = () => {
  const { elementRef, isVisible } = useVisibilityAnimation('animate__fadeInUp', 0.2);

  return (
    <div
      ref={elementRef}
      className={`flex justify-center items-center gap-[5%] p-[5%] ${
        isVisible ? 'animate__animated animate__fadeInUp' : 'opacity-0'
      }`}
      style={{ transition: 'opacity 0.5s ease-in-out' }}
    >
      {/* Link to APT Telecommunications */}
      <a href="https://www.aptelecommunication.co.uk" target="_blank" rel="noopener noreferrer"
      className="transform transition-transform duration-300 hover:scale-110 hover:opacity-80">
        <div
          className="h-[100px] w-[100px] bg-no-repeat bg-center bg-contain"
          style={{
            backgroundImage: `url(${aptLogo})`
          }}
        ></div>
      </a>

      <div className="" style={{ fontFamily: "var(--crazy)" }}>TRUSTED BY</div>

      {/* Link to DNNovation Construction */}
      <a href="https://www.dnnovationconstruction.co.uk" target="_blank" rel="noopener noreferrer"
      className="transform transition-transform duration-300 hover:scale-110 hover:opacity-80">
        <div
          className="h-[100px] w-[100px] bg-no-repeat bg-center bg-contain"
          style={{
            backgroundImage: `url(${dnnLogo})`
          }}
        ></div>
      </a>
    </div>
  );
};


export default CompaniesSection;
