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
    >

      <div className="
      text-[4rem] md:text-[5rem]
      font-crazy
      flex
      flex-col
      justify-center
      ">
        <a href="/contact">

          GET IN <br />
          <div className="
          flex
          items-center">
            <img src={halfMoon} alt="Half Moon" className="w-[80px] h-[80px]
            md:w-[100px] md:h-[100px]" />
            TOUCH
          </div>

        </a>

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

            <div className="link"><a href="/about">About Us</a></div>
            <div className="link"><a href="/">Home</a></div>
            <div className="link"><a href="/">Services</a></div>
            <div className="link"><a href="/contact">Contact Us</a></div>

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
              Here is a helpful <a href="/contact" className='underline'>link.</a>
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
