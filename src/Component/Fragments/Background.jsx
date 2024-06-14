import React from 'react';
import Skills from '../UI/Skills';
import Projects from '../UI/Projects';

const Background = () => {
    return (
        <>
         <div className='w-full absolute z-10'>
           <img src="/public/img/dark-layered-wave.svg" alt="" />
          </div>
          <div className='absolute laptop:mt-52 mt-20'>
        <div className='bg-boxes-light bg-[length:20px_20px] dark:bg-boxes-dark laptop:pt-40 pt-12 z-10'>
            <div className='relative z-20 '>
              <Skills></Skills>
              <Projects></Projects>
            </div>
          <div className='w-full absolute z-10 bottom-1 pt-12'>
           <img src="/public/img/dark-layered-wave.svg" alt="" />
          </div>
        </div>
          </div>
        </>
    );
}

export default Background;
