import 'animate.css';
// import { useVisibilityAnimation } from '../hooks/useVisibilityAnimation';
// import { ReactComponent as Halfmoon } from './assets/halfMoon.svg';
import  halfMoon from '../../../src/assets/halfMoon.svg';


const Footer1: React.FC = () => {
  // const { elementRef, isVisible } = useVisibilityAnimation('animate__fadeInUp', 0.1);

  return (
    // grid-rows-[3fr_2fr]
    <div className="grid
    grid-rows-auto md:grid-rows-[auto auto]
    md:grid-cols-[2fr_1fr]
    gap-[15px]
    grid-flow-row-reverse md:grid-flow-row
    pl-[3%] pr-[3%] pt-[17%]
    pb-[17%] md:pb-[3%] md:pt-[3%]
    text-white
    bg-grey
    "

    // background: 'radial-gradient(circle, rgba(2,0,36,1) 40%, rgba(9,9,121,1) 76%, rgba(0,106,255,1) 100%)'
    >

      <div className="
      text-[4rem] md:text-[8rem]
      font-crazy
      flex
      flex-col
      justify-center
      ">

        GET IN <br />
        <div className="
        flex
        items-center">
          <img src={halfMoon} alt="Half Moon" className="w-[80px] h-[80px]
          md:w-[150px] md:h-[150px]" />
          TOUCH
        </div>

      </div>

      {/* row-start-1 */}
      <div className="cta
      flex
      flex-col
      justify-between
      col-span-1
      ">

        <div className="
        font-crazy
        hidden md:block
        text-[1rem]">
          We care about your business, so we are making sure everyone will see your passion and heart for it.
        </div>

        <div className="
        flex
        justify-between
        pt-[20px]
        pb-[20px]
        text-[1rem] md:text-[1.2rem]
        ">

          <div className="
                text-[1rem] md:text-[1.2rem]">

            <div className="
            text-[1.2rem]
            text-blue">
              Overview
            </div>

            <div className="link">About Us</div>
            <div className="link">Home</div>
            <div className="link">Services</div>
            <div className="link">Contact Us</div>

          </div>

          <div className="
          flex
          flex-col
          justify-around
          ">
            <div className="
            text-[1.2rem]
            text-blue">
              Legals
            </div>

            <div className="">Terms&Privacy</div>

            <div className="faq">

            <div className="
            text-[1.2rem]
            text-blue
            ">
              FAQ
            </div>

            <div className="text">
              Here is a helpfull <a href="/contact">link</a>.
            </div>

            </div>
          </div>
        </div>


      </div>

      <div className="text-center
      md:col-span-2">
            Copyright @MoonCode 2024
          </div>

    </div>
  );
};



export default Footer1;
