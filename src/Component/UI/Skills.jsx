import React from 'react';
import IconsReact from "/img/react.webp";
import IconsTailwind from "/img/tailwind.webp"
import IconsRedux from "/img/redux.svg";
import IconsJavascript from "/img/javascript.webp";
import IconsHtml from "/img/html.webp";
import IconsCss from "/img/css.webp";
import IconsBootstrap from "/img/bootstrap.webp";
import IconsSas from "/img/sass.svg"
import IconsNext from "/img/nextjs.svg";
import IconsNodejs from "/img/node-js.svg";
import IconsMysql from "/img/mysql.webp";
import Iconsgit from "/img/git.webp";
import Iconfigma from "/img/figma.svg";
import IconsLinux from "/img/linux.png";
import IconsMongo from "/img/mongodb.svg";

const Skills = ({ skils }) => {
    return (
        <>
       <div ref={skils} className='flex justify-center lg:top-0 z-10 relative'>
        <div className='cursor-pointer mt-8'>
         <p  className='text-white font-bold hover:scale-[1.02] text-center text-4xl pb-2'>Skills⚒️</p>
         <div className="md:w-32 w-full md:h-[6px] h-1 bg-gradient-to-l from-purple-400 via-purple-300 to-purple-500 -translate-x-1 rounded-full"></div>
         <div className="md:w-32 w-full md:h-[6px] h-1 bg-purple-200 rounded-full translate-x-1 mb-8"></div>
        </div>
          </div>
          <div className='flex justify-center mr-4 ml-4'>
            <div className=' grid grid-cols-4 sm:grid-cols-5 lg:grid-cols-6 gap-x-2 lg:gap-x-12 md:grid-cols-6 md:gap-x-8'>
              <div data-tooltip-content="Tailwind CSS" class="icon-tooltip transition-colors duration-200 group inline-block rounded-md p-3.5 hover:bg-indigo-200/30 dark:hover:bg-zinc-500/30">
              <img src={IconsHtml} alt="" className=' lg:w-[100px] w-[70px] mx-auto ' />
              <span className='bg-indigo-100/30 rounded-sm flex justify-center mt-2  text-xs lg:text-base opacity-0 group-hover:opacity-100 text-[10px]'>Html</span>
             </div>
          <div data-tooltip-content="Tailwind CSS" class="icon-tooltip transition-colors duration-200 group inline-block rounded-md p-3.5 hover:bg-indigo-200/30 dark:hover:bg-zinc-500/30">
              <img src={IconsCss} alt="" className=' lg:w-[100px] w-[70px] mx-auto' />
              <span className='bg-indigo-100/30 rounded-sm flex justify-center mt-2 opacity-0 text-xs lg:text-base group-hover:opacity-100 text-[10px]'>Css</span>
          </div>
          <div data-tooltip-content="Tailwind CSS" class="icon-tooltip transition-colors duration-200 group inline-block rounded-md p-3.5 hover:bg-indigo-200/30 dark:hover:bg-zinc-500/30">
              <img src={IconsJavascript} alt="" className=' lg:w-[100px] w-[70px] mx-auto ' />
              <span className='bg-indigo-100/30 rounded-sm flex justify-center mt-2 opacity-0 text-xs lg:text-base text-[10px]  group-hover:opacity-100'>Javascript</span>
          </div>
          <div data-tooltip-content="Tailwind CSS" class="icon-tooltip transition-colors duration-200 group inline-block rounded-md p-3.5 hover:bg-indigo-200/30 dark:hover:bg-zinc-500/30">
              <img src={IconsTailwind} alt="" className=' lg:w-[100px] w-[70px] mx-auto ' />
              <span className='bg-indigo-100/30 rounded-sm flex justify-center mt-2 opacity-0 text-[10px] lg:text-base group-hover:opacity-100 '>Tailwindcss</span>
          </div>
          <div data-tooltip-content="Tailwind CSS" class="icon-tooltip transition-colors duration-200 group inline-block rounded-md p-3.5 hover:bg-indigo-200/30 dark:hover:bg-zinc-500/30">
              <img src={IconsBootstrap} alt="" className=' lg:w-[100px] w-[70px] mx-auto ' />
              <span className='bg-indigo-100/30 rounded-sm flex justify-center mt-2 opacity-0 text-xs lg:text-base group-hover:opacity-100 text-[10px]'>Bootsrtap</span>
          </div>
          
          <div data-tooltip-content="Tailwind CSS" class="icon-tooltip transition-colors laptop:mt-12 duration-200 group inline-block rounded-md p-3.5 hover:bg-indigo-200/30 dark:hover:bg-zinc-500/30">
              <img src={IconsReact} alt="" className=' lg:w-[100px] w-[70px] mx-auto' />
              <span className='bg-indigo-100/30 rounded-sm flex justify-center mt-2 text-xs lg:text-base opacity-0 group-hover:opacity-100 text-[10px]'>React js</span>
          </div>
          <div data-tooltip-content="Tailwind CSS" class="icon-tooltip transition-colors lg:mt-12 duration-200 group inline-block rounded-sm p-3.5 hover:bg-indigo-200/30 dark:hover:bg-zinc-500/30">
              <img src={IconsNext} alt="" className=' lg:w-[100px] w-[70px] mx-auto ' />
              <span className='bg-indigo-100/30 rounded-sm flex justify-center mt-2  text-xs lg:text-base opacity-0 group-hover:opacity-100 text-[10px]'>Next js</span>
          </div>
          <div data-tooltip-content="Tailwind CSS" class="icon-tooltip transition-colors lg:mt-12 duration-200 group inline-block rounded-sm p-3.5 hover:bg-indigo-200/30 dark:hover:bg-zinc-500/30">
              <img src={IconsRedux} alt="" className=' lg:w-[100px] w-[70px] mx-auto ' />
              <span className='bg-indigo-100/30 rounded-sm flex justify-center mt-2 text-xs lg:text-base opacity-0 group-hover:opacity-100 text-[10px]'>Redux</span>
          </div>
          
          <div data-tooltip-content="Tailwind CSS" class="icon-tooltip transition-colors lg:mt-12 duration-200 group inline-block rounded-sm p-3.5 hover:bg-indigo-200/30 dark:hover:bg-zinc-500/30">
              <img src={IconsSas} alt="" className=' lg:w-[100px] w-[70px] mx-auto ' />
              <span className='bg-indigo-100/30 rounded-sm flex justify-center mt-2 text-xs lg:text-base opacity-0 group-hover:opacity-100 text-[10px]'>Sass</span>
          </div>
          <div data-tooltip-content="Tailwind CSS" class="icon-tooltip transition-colors lg:mt-12 duration-200 group inline-block rounded-sm p-3.5 hover:bg-indigo-200/30 dark:hover:bg-zinc-500/30">
              <img src={IconsNodejs} alt="" className=' lg:w-[100px] w-[70px] mx-auto' />
              <span className='bg-indigo-100/30 rounded-sm flex justify-center mt-2 text-xs lg:text-base opacity-0 group-hover:opacity-100 text-[10px]'>Node Js</span>
          </div>
          <div data-tooltip-content="Tailwind CSS" class="icon-tooltip transition-colors lg:mt-12 duration-200 group inline-block rounded-sm p-3.5 hover:bg-indigo-200/30 dark:hover:bg-zinc-500/30">
              <img src={IconsMysql} alt="" className=' laptop:w-[100px] w-[70px] mx-auto' />
              <span className='bg-indigo-100/30 rounded-sm flex justify-center mt-2 text-xs lg:text-base opacity-0 group-hover:opacity-100 text-[10px]'>Mysql</span>
          </div>
          <div data-tooltip-content="Tailwind CSS" class="icon-tooltip transition-colors lg:mt-12 duration-200 group inline-block rounded-sm p-3.5 hover:bg-indigo-200/30 dark:hover:bg-zinc-500/30">
              <img src={Iconsgit} alt="" className=' laptop:w-[100px] w-[70px] mx-auto ' />
              <span className='bg-indigo-100/30 rounded-sm flex justify-center mt-2 text-xs lg:text-base opacity-0 group-hover:opacity-100 text-[10px]'>Git</span>
          </div>
          <div data-tooltip-content="Tailwind CSS" class="icon-tooltip transition-colors lg:mt-12 duration-200 group inline-block rounded-sm p-3.5 hover:bg-indigo-200/30 dark:hover:bg-zinc-500/30">
              <img src={Iconfigma} alt="" className=' laptop:w-[100px] w-[70px] mx-auto' />
              <span className='bg-indigo-100/30 rounded-sm flex justify-center mt-2 text-xs lg:text-base opacity-0 group-hover:opacity-100 text-[10px]'>Figma</span>
          </div>
          <div data-tooltip-content="Tailwind CSS" class="icon-tooltip transition-colors lg:mt-12 duration-200 group inline-block rounded-sm p-3.5 hover:bg-indigo-200/30 dark:hover:bg-zinc-500/30">
              <img src={IconsLinux} alt="" className=' laptop:w-[100px] w-[70px] mx-auto' />
              <span className='bg-indigo-100/30 rounded-sm flex justify-center mt-2 text-xs lg:text-base opacity-0 group-hover:opacity-100 text-[10px]'>Linux</span>
          </div>
          <div data-tooltip-content="Tailwind CSS" class="icon-tooltip transition-colors lg:mt-12 duration-200 group inline-block rounded-md p-3.5 hover:bg-indigo-200/30 dark:hover:bg-zinc-500/30">
              <img src={IconsMongo} alt="" className=' laptop:w-[100px] w-[70px] mx-auto mt-4' />
              <span className='bg-indigo-100/30 rounded-sm flex justify-center mt-2 text-xs lg:text-base opacity-0 group-hover:opacity-100 text-[10px]'>Mongo DB</span>
          </div>
            </div>
          </div>
        </>
    );  
}

export default Skills;
