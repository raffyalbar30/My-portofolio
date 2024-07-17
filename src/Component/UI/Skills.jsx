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
import Iconsfigma from "/img/figma.svg";
import IconsLinux from "/img/linux.png";
import IconsMongo from "/img/mongodb.svg";




const Skills = ({ skils }) => {
    const data = [
        {
      
          id: 1,
          img : IconsHtml,
          title : "HTML"
        },
        {
          id: 2,
          img : IconsCss,
          title: "CSS"
        },
        {
          id: 3,
          img : IconsJavascript,
          title : "Javascript"
        },
        {
          id: 4,
          img : IconsReact,
          title : "React Js"
        },
        {
            id: 5,
            img : IconsTailwind,
            title : "Tailwindcss"
        },
        {
            id: 6,
            img : IconsBootstrap,
            title : "Bootstrap"
        },
        {
            id: 7,
            img : IconsSas,
            title : "Sass"
        },
        {
            id: 8,
            img : IconsRedux,
            title : "Redux toolkit"
        },
        {
            id: 9,
            img : IconsNext,
            title: "Next Js"
        },
        {
            id: 10,
            img : IconsNodejs,
            title : "Node Js"
        },
        {
            id: 11,
            img : IconsMysql,
            title: "Mysql"
        },
        {
            id: 12,
            img : IconsMongo,
            title: "Mongo DB"
        },
        {
            id: 13,
            img : Iconsgit,
            title : "git"
        },
        {
            id: 14,
            img : Iconsfigma,
            title : " Figma"
        },
        {
            id: 15,
            img : IconsLinux,
            title : "Linux"
        },
    
    ];
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
             {data.map((item)=> (
                    <div key={item.id} className="icon-tooltip transition-colors duration-200 group inline-block rounded-md p-3.5 hover:bg-indigo-200/30 dark:hover:bg-zinc-500/30">
                          <img src={item.img} alt="" className=' lg:w-[100px] w-[70px] mx-auto ' />
                             <span className='bg-indigo-100/30 rounded-sm flex justify-center mt-2  text-xs lg:text-base opacity-0 group-hover:opacity-100 text-[10px]'>{item.title}</span>
                        </div>
                        ))}
                </div>
          </div>
        </>
    );  
}

export default Skills;
