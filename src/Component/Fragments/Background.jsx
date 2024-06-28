import React from "react";
import Skills from "../UI/Skills";
import Projects from "../UI/Projects";
import Footer from "../UI/Footer";
import Certificates from "../UI/Certificates";


const Background = () => {
  return (
    <>
      <div className="w-full absolute z-10">
        <div className="w-full  black backdrop-blur-sm laptop:opacity-75 opacity-60 h-24 absolute laptop:z-20 z-0"></div>
        <img
          src="/public/img/dark-layered-wave.svg"
          alt=""
          className="rotate-180 laptop:mt-4 mt-8"
        />
      </div>
      <div className="absolute laptop:mt-8 mt-10">
        <div className="bg-boxes-light bg-[length:20px_20px] dark:bg-boxes-dark bg-black laptop:pt-40 tablet:pt-28 pt-12 ">
          <div className="relative laptop:pb-52 pb-16 z-20 ">
            <Skills></Skills>
            <Projects></Projects>
          <div className="w-full absolute end-0 ">
            <img
              src="/public/img/dark-layered-wave.svg"
              alt=""
              className="mx-auto laptop:mb-12 opacity-70"
            />
             <div className="flex justify-center">
                <Certificates></Certificates>
             </div>
             <div className="mt-12">
             <Footer></Footer>
             </div>
          </div>
          </div>
          <div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Background;
