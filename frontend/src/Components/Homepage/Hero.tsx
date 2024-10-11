// import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player'; // Make sure to install this package

const Hero = () => {
    return (
        <section className="md:grid md:grid-cols-2 items-center">
            <div className="md:max-w-xl md:pl-12">
                <h1 className="text-2xl m-[10%] mt-0
                              md:text-6xl font-semibold leading-tight md:m-[5%]">
                    Creating <span className="text-[#A1C6EA]">tailored</span>
                    <br />
                    <span className="text-[#FF6B6B]">web solutions</span> to
                    <br />
                    drive your <br />
                    business <span style={{
                          fontStyle: 'italic',
                          fontWeight: '200'
                          }}>forward.</span>
                </h1>
            </div>
            <div className="flex md:mr-5">
                <Player
                    autoplay
                    loop
                    src="https://lottie.host/fa54b301-01df-44d1-8718-8af8fb14ea4f/pzxkdk9iRR.json"
                    className="md:h-[600] md:w-[600]"
                />
            </div>
        </section>
    );
};

export default Hero;
