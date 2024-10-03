// import React from 'react';
import { Player } from '@lottiefiles/react-lottie-player'; // Make sure to install this package

const Hero = () => {
    return (
        <section className="flex justify-between items-center bg-gray-100">
            <div className="max-w-xl pl-12">
                <h1 className="text-5xl font-semibold leading-tight ml-8">
                    Creating <span className="text-[#A1C6EA]">tailored</span>
                    <br />
                    <span className="text-[#FF6B6B]">web solutions</span> to
                    <br />
                    drive your <br />
                    business forward.
                </h1>
            </div>
            <div className="flex justify-end">
                <Player
                    autoplay
                    loop
                    src="https://lottie.host/fa54b301-01df-44d1-8718-8af8fb14ea4f/pzxkdk9iRR.json" // Lottie animation URL
                    style={{ height: '500px', width: '500px' }} // Adjust size as needed
                />
            </div>
        </section>
    );
};

export default Hero;
