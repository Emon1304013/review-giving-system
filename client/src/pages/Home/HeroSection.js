import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (

    <section className="text-gray-800">
      <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center p-6 rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-5xl font-bold leading-none sm:text-6xl text-[#F9E4AF]">
            Give Your Dear Ones
            <span className="text-[#00C1A2]"> A Tasty Treat</span>
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12">
          When life gives you a happy occasion,  
            <br/>
            celebrate it with ROZA'S FLAVOR FUSION!
            <br/>
            As you bite into our delightful treats you will experience a burst of natural flavor and freshness of ingredients that literally melts in your mouth
          </p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <Link
            to='/services'
              className="px-8 py-3 text-lg font-semibold text-center rounded bg-[#00C1A2] text-white"
            >
              Services
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center p-6 mt-8">
        <Player
            autoplay
            loop
            className="w-full lg:w-1/2 rounded-2xl"
            src="https://assets3.lottiefiles.com/private_files/lf30_jxxmergd.json"
          ></Player>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
