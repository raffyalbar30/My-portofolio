import React from "react";
import Skills from "../UI/Skills";
import Projects from "../UI/Projects";
import Footer from "../UI/Footer";
import Certificates from "../UI/Certificates";
import Profil from "../UI/profil";


const Background = () => {
  return (
    <>
    
      <Profil></Profil>
      <div className="w-full absolute z-10 lg:mt-12 mt-0">
        <div className="w-full black backdrop-blur-sm lg:opacity-75 opacity-60 h-24 absolute lg:z-20 z-0"></div>
        <img
          src="/public/img/dark-layered-wave.svg"
          alt=""
          className="rotate-180 laptop:mt-4 mt-8"
        />
      </div>
      <div className="absolute lg:mt-24 mt-8">
        <div className="bg-[length:20px_20px] dark:bg-boxes-dark bg-black lg:pt-40 md:pt-28 pt-12 ">
          <div className="relative lg:pb-52 pb-16 ">
            <Skills></Skills>
            <Projects></Projects>
          <div className="w-full absolute end-0 ">
            <img
              src="/public/img/dark-layered-wave.svg"
              alt=""
              className="mx-auto lg:mb-12 opacity-70"
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
