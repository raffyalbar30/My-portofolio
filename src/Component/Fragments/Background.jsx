import React from 'react';
import Skills from '../UI/Skills';
import Projects from '../UI/Projects';
import Certificates from '../UI/Certificates';


const Background = () => {
    return (
        <>
         <div className='w-full absolute z-10'>
           <img src="/public/img/dark-layered-wave.svg" alt="" className='rotate-180 laptop:mt-4 mt-12' />
          </div>
          <div className='absolute laptop:mt-8 mt-20'>
        <div className='bg-boxes-light bg-[length:20px_20px] dark:bg-boxes-dark laptop:pt-40 tablet:pt-28 pt-12 '>
            <div className='relative pb-12 laptop:mb-28 '>
              <Skills></Skills>
              <Projects></Projects>
            </div>
          <div className='w-full absolute bottom-1 z-10 mt-12'>
           <img src="/public/img/dark-layered-wave.svg" alt="" />
          </div>

          <Certificates></Certificates>
        </div>
          </div>
        </>
    );
}

export default Background;
