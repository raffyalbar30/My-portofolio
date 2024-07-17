import React from 'react';
import { Link } from "react-router-dom";
import ContainerCards from '../utilitis/Container-card';
import ContainProject from '../utilitis/Container-projects';
import Coffeshop from "/img/Coffe-shop.png";
import PerintisCom from "/img/printis.png";
import IconsReact from "/img/react.webp";
import IconsTailwind from "/img/tailwind.webp"
import IconsRedux from "/img/redux.svg";
import IconsJavascript from "/img/javascript.webp";
import IconsHtml from "/img/html.webp";
import IconsCss from "/img/css.webp";
import IconsBootstrap from "/img/bootstrap.webp";
import IconsSas from "/img/sass.svg"



const Projects = ({experince}) => {
     const project = [
        {
          id : 1,
          title : "Coffeeshop UMKM Cilamaya",
          posisition : "Project Menager & Front end Developer",
          Desc : "The Cilamaya Coffee Shop project is a final project built using modern frameworks such as React.js, TailwindCSS, and Redux Toolkit for state management. This project is intended as a final school assignment for the vocational competency test in the software engineering department. I served as the front-end web developer and also the project manager for this project.",
          img : Coffeshop,
          iconsone : IconsReact,
          iconstwo : IconsTailwind, 
          iconsthree: IconsRedux,
          iconsfor : IconsJavascript,
          href: "/project/coffeshop"

        },
        {
            id : 2,
            title : "Perintis Computer E-commerce",
            posisition : "Front end Developer",
            Desc : "In my internship project, which marked my first contribution to a team in a real project, I encountered many struggles that ultimately helped me learn a great deal about front-end web development. In this project, I was responsible for refactoring the code of the Perintis Computer website and creating an admin dashboard using native HTML, CSS, JavaScript, and Sass. Additionally, I managed sales on the Perintis Computer website.",
            img : PerintisCom,
            iconsone : IconsHtml,
            iconstwo : IconsCss, 
            iconsthree : IconsBootstrap,
            iconsfor : IconsSas,
            href: "/project/perintis"
  
          }
    ];

    return (
   <>
     <div ref={experince} className='flex justify-center mt-8 relative '>
           <div className='cursor-pointer lg:pt-12 pt-8'>
             <p className='text-white font-bold hover:scale-[1.02] text-center text-4xl pb-2 lg:pb-4'>Experince👨‍💻</p>
              <div className="md:w-32 w-full md:h-[6px] h-1 bg-gradient-to-l from-purple-400 via-purple-300 to-purple-500 -translate-x-1 rounded-full lg:w-auto"></div>
               <div className="md:w-32 w-full md:h-[6px] h-1 bg-purple-200 rounded-full translate-x-1 lg:w-auto "></div>
           </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-6 gap-1 p-4 mb-4 mt-10 ">
             {project.map((item)=> (
                  <div className=' place-content-center bg-zinc-950 border border-white/[0.2] rounded-md p-8 lg:mb-12 mb-8'>
                  <ContainerCards>
                  <img
                          style={{
                              transform: "translateZ(50px)",
                              transformStyle: "preserve-3d",
                          }}
                          className=" inset-4 grid w-full place-content-center rounded-xl shadow-lg blur-sm hover:blur-none"
                          src={item.img} />
                  </ContainerCards>
                  <ContainProject>
                      <h1 className='lg:text-4xl text-white pt-5  mb-2 text-xl font-sans mt-4'>{item.title}</h1>
                            <h1 className='lg:text-2xl text-sm text-white/75 font-sans flex gap-x-2 items-center'>
                            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="rounded-lg bg-indigo-100 p-1 text-4xl text-green-400 dark:bg-zinc-700/90" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M160 389a20.91 20.91 0 01-13.82-5.2l-128-112a21 21 0 010-31.6l128-112a21 21 0 0127.66 31.61L63.89 256l109.94 96.19A21 21 0 01160 389zm192 0a21 21 0 01-13.84-36.81L448.11 256l-109.94-96.19a21 21 0 0127.66-31.61l128 112a21 21 0 010 31.6l-128 112A20.89 20.89 0 01352 389zm-144 48a21 21 0 01-20.12-27l96-320a21 21 0 1140.23 12l-96 320A21 21 0 01208 437z"></path></svg>
                              {item.posisition}</h1>
                            <div className='pt-4'>
                                <p className='text-justify font-sans text-gray-300 text-[18px] z-10'>{item.Desc}</p>
                                <div className='flex justify-center  gap-x-4 pt-4'>
                                <div data-tooltip-content="Tailwind CSS" class="icon-tooltip transition-colors duration-200 group inline-block rounded-md p-3.5 hover:bg-indigo-200/30 dark:hover:bg-zinc-500/30">
                                <img src={item.iconsone} alt="" className='w-[60px]' />
                                </div>
                                <div data-tooltip-content="Tailwind CSS" class="icon-tooltip transition-colors duration-200 group inline-block rounded-md p-3.5 hover:bg-indigo-200/30 dark:hover:bg-zinc-500/30">
                                <img src={item.iconstwo} alt="" className='w-[60px]' />
                                </div>
                                <div data-tooltip-content="Tailwind CSS" class="icon-tooltip transition-colors duration-200 group inline-block rounded-md p-3.5 hover:bg-indigo-200/30 dark:hover:bg-zinc-500/30">
                                <img src={item.iconsthree} alt="" className='w-[60px]' />
                                </div>
                                <div data-tooltip-content="Tailwind CSS" class="icon-tooltip transition-colors duration-200 group inline-block rounded-md p-3.5 hover:bg-indigo-200/30 dark:hover:bg-zinc-500/30">
                                <img src={item.iconsfor} alt="" className='w-[60px]' />
                                </div>
                                </div>
                                <div className='flex justify-center mt-4'>
                                <Link to={item.href}><a className=" uppercase text-xs font-bold group rounded text-center transition  relative !text-purple-400 mt-2 flex w-full items-center justify-center gap-2 self-start lg:px-32 px-4 py-3 lg:w-max border !border-purple-400  hover:bg-indigo-500/10" target="_self"> <span class="translate-x-3.5 transition-transform duration-200 group-hover:translate-x-0">See Project</span><span class="relative -translate-x-4 text-lg opacity-0 transition duration-200 group-hover:translate-x-0 group-hover:opacity-100"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="text-purple-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path></svg></span> </a></Link>
                                </div>
                            </div>
                  </ContainProject>
          </div>
             ))}

 
          
      </div>



</>
    );
}

export default Projects;
