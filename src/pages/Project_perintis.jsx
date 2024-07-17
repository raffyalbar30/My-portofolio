import React from 'react';
import ViewDetail from '../Component/utilitis/View_Detail';
import ContainerCards from '../Component/utilitis/Container-card';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { FaCalendarAlt, FaGithub, FaLinkedin } from 'react-icons/fa';
import IconsJavascript from "/img/javascript.webp";
import IconsHtml from "/img/html.webp";
import IconsCss from "/img/css.webp";
import IconsBootstrap from "/img/bootstrap.webp";
import IconsSas from "/img/sass.svg"
import PerintisCom from "/img/printis.png";
import Footer from '../Component/UI/Footer';
import { TbWorld } from 'react-icons/tb';

const ProjectPerintis = () => {
    return (
        <ViewDetail>
             <div className='mr-4 ml-4'>
               <div className='flex items-center gap-x-4 cursor-pointer mt-4'>
               <span className='mt-12 text-2xl group-hover:scale-110'> <FaArrowLeftLong /></span>
               <p className='text-xl text-purple-500 pt-12 group-hover:hover:underline underline-offset-8'>Back to home page</p>
               </div>
               <p className='text-4xl font-sans font-semibold pt-8'>Perintis Computer Karawang</p>
               <p className='text-2xl font-sans font-semibold pt-4'>E-commerce page computer using native</p>
               <p className='pt-8 flex gap-x-2'><span className='text-xl'><FaCalendarAlt /></span>September 09 2023 - Januari 01 2024</p>
               <div className='w-full border mt-4'></div>

             <div className='lg:w-[1000px] mx-auto h-auto rounded-md bg-zinc-700 flex justify-center mt-12'>
               <ContainerCards>
                    <img
                            style={{
                                transform: "translateZ(50px)",
                                transformStyle: "preserve-3d",
                            }}
                            className=" inset-4 grid w-full place-content-center rounded-xl shadow-lg "
                            src={PerintisCom} />
               </ContainerCards>
             </div>
             
             <div className='mt-8'>
                <p className='font-sans font-semibold text-2xl'>Descriptions</p>
                <p className='font-sans text-gray-400 laptop:text-left text-justify lg:mr-24 lg:text-[32x]'>My first internship project truly tested my communication skills, integrity, and of course, my hard skills in coding and styling. The Perintis Computer Karawang website is a platform for managing computer sales and services. Here, I was responsible for refactoring and updating existing features such as authentication, payment, and the admin dashboard. This website was designed to make it easier for Perintis Computer employees to manage their sales. The technologies used for this website include native JavaScript, SASS, HTML, and CSS, while the backend uses PHP. At Perintis, I learned not only coding but also how to become a good computer technician and programmer.
                 </p>
             </div>
             <div className='mt-8 flex justify-between items-center'>
                <p className='font-sans font-semibold text-2xl'>Tech Stack</p>
             </div>
              <div className='flex'>
                 <div className='grid lg:grid-cols-6 grid-cols-5 gap-x-4'>
                    <div className='duration-200 group inline-block rounded-md p-3.5 hover:bg-indigo-200/30 w-[70px] dark:hover:bg-zinc-500/30'>
                        <img src={IconsHtml} alt="" className='w-[80px]'/>
                    </div>
                    <div className='duration-200 group inline-block rounded-md p-3.5 hover:bg-indigo-200/30 w-[70px] dark:hover:bg-zinc-500/30'>
                        <img src={IconsCss} alt="" className='w-[80px]'/>
                    </div>
                    <div className='duration-200 group inline-block rounded-md p-3.5 hover:bg-indigo-200/30 w-[70px] dark:hover:bg-zinc-500/30'>
                        <img src={IconsSas} alt="" className='w-[80px]'/>
                    </div>
                    <div className='duration-200 group inline-block rounded-md p-3.5 hover:bg-indigo-200/30 w-[70px] dark:hover:bg-zinc-500/30'>
                        <img src={IconsBootstrap} alt="" className='w-[80px]'/>
                    </div>
                    <div className='duration-200 group inline-block rounded-md p-3.5 hover:bg-indigo-200/30 w-[70px] dark:hover:bg-zinc-500/30'>
                        <img src={IconsJavascript} alt="" className='w-[80px]'/>
                    </div>
                </div>
              </div>
    
               <div className=' border lg:flex md:flex gap-8 items-center border-zinc-600 lg:p-8 lg:w-[700px] md:w-[700px] p-4 rounded-md mt-4 float-left'>
                    <div className='text-center mx-auto border w-48 flex mt-2 items-center gap-x-4 py-2 rounded-md'>
                       <span className='ml-2 text-xl '><TbWorld /></span>
                      <a href="" className='text-sm'>Visite online site</a>
                    </div>
                    <div className='text-center mx-auto border mt-2 w-48 flex items-center gap-x-4 py-2 rounded-md'>
                       <span className='ml-2 text-xl'><FaGithub /></span>
                      <a href="" className='text-sm'>github Repository</a> 
                    </div>
                    <div className='text-center mx-auto border mt-2 w-48 flex items-center gap-x-4 py-2 rounded-md'>
                       <span className='ml-2 text-xl'><FaLinkedin /></span>
                      <a href="" className='text-sm'>follow me in linkedln</a>
                    </div>
               </div>
             </div>
            
            <div className='mt-52'>
             <Footer></Footer>
            </div>
        </ViewDetail>
    );
}

export default ProjectPerintis;
