import React from 'react';
import { SiInstagram, SiGithub, SiLinkedin } from "react-icons/si"
import ContainerCards from '../utilitis/Container-card';
import { FaDownload } from "react-icons/fa6";

const Profil = () => {

  const sosial = [
    {
         url : "https://www.linkedin.com/in/mohammadraffyalbar/",
         label: "Linkedin",
         icons: SiLinkedin
   },
   {
       url : "https://github.com/raffyalbar30",
       label: "Github",
       icons: SiGithub
   },
   {
     url : "https://www.instagram.com/raffy_samaa",
     label: "Github",
     icons: SiInstagram
   },

];
    return (
  <>
  <div className='bg-black mb-12 rounded-t-lg'>
    <div className='flex justify-center'>
        <div className='cursor-pointer pb-4 mt-12 lg:mt-24'>
         <p className='text-white font-bold hover:scale-[1.02] text-center text-4xl pb-2'>Profil 👨‍💻</p>
         <div className="md:w-32 md:h-[6px] h-1 bg-gradient-to-l from-purple-400 via-purple-300 to-purple-500 -translate-x-1 rounded-full w-auto"></div>
         <div className="md:w-32 md:h-[6px] h-1 bg-purple-200 rounded-full translate-x-1 w-auto"></div>
        </div>
          <div className='absolute right-2 lg:hidden md:hidden'>
             <img src="/public/img/aboutme.png" alt="" className='w-44 mt-24 sm:w-44 sm:mt-24 md:mt-4'/>
          </div>
         </div>
          <div className='flex justify-center lg:items-center mt-12 lg:mt-4  z-20'>
                <div className='lg:pb-12'>
                   <h1 className='text-purple-500 lg:text-4xl md:text-4xl sm:text-4xl text-2xl ml-8 font-sans pb-2 font-bold lg:text-left lg:ml-12 underline underline-offset-4 sm:ml-8'>Introduction</h1>
                     <p className='text-gray-400 text-justify lg:px-4 font-sans md:text-lg lg:text-xl sm:text-base text-[12px] mr-8 ml-8'>I am a fresh graduate from SMKN 1 BANYUSARI in the Software Engineering Department. 
                        I have a high interest and talent in the field of front-end web development, mastering various 
                        skills such as <span className='text-white font-semibold'>React Js, Tailwindcss, NextJs,</span> and several other skills in front-end web development to 
                        build and develop user interfaces on websites. <span className='text-white font-semibold'>I have 1 year of experience</span>  as a front-end web developer.
                        During school, I honed critical thinking skills, problem-solving abilities, and communication skills.
                         I am committed to applying my abilities and skills to contribute to the company.</p>
                         <div className='flex gap-x-4 px-8 pt-4 lg:px-12'>
                   {
                        sosial.map((item, i)=>{
                            const Icon = item.icons
                            return (
                                <a
                                key={i}
                                href={item.url}
                                aria-label={item.label}>
                                <Icon className='w-8 h-8 gap-x-4 md:h-12 md:w-12 hover:scale-125 transition-all' />
                                </a>
                            )
                            })
                            }
                        </div>
                        <div className='px-4 pt-4 lg:pt-4 ml-4 sm:ml-2 lg:px-8 group flex'>
                           <a className='lg:px-20 py-2 md:py-4 px-12 rounded-md border  cursor-pointer flex items-center gap-x-2 group-hover:scale-110 duration-200 transition  !border-purple-400  hover:bg-indigo-500/10'>💼 Download CV <span className='opacity-0 group-hover:opacity-100 '> <FaDownload /></span></a>
                        </div>
                </div>
                <div className='p-4 mr-8 opacity-0 lg:opacity-100 lg:static absolute'>
                        <div className='lg:w-[400px]'>
                        <ContainerCards>
                            <img src="/public/img/Group2.png"
                            style={{
                              transform: "translateZ(50px)",
                              transformStyle: "preserve-3d",
                             }} 
                           alt="" className='rounded-md ' />
                        </ContainerCards> 
                    </div>
          </div>
        </div> 
  </div>
 
   
    
  
  </>
     
    );
}

export default Profil;