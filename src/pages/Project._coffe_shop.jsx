import React from 'react';
import { FaCalendarAlt } from "react-icons/fa";
import ContainerCards from '../Component/utilitis/Container-card';
import { TbWorld } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import ViewDetail from '../Component/utilitis/View_Detail';
import Footer from '../Component/UI/Footer';
import Coffeshop from "/img/Coffe-shop.png";
import IconsReact from "/img/react.webp";
import IconsTailwind from "/img/tailwind.webp"
import IconsRedux from "/img/redux.svg";
import IconsJavascript from "/img/javascript.webp";




const Projectcoffeeshop = () => {
    return (
        <> 
         <ViewDetail>
             <div className='mr-4 ml-4'>
               <div className='flex items-center gap-x-4 cursor-pointer mt-4'>
               <span className='mt-12 text-2xl group-hover:scale-110'> <FaArrowLeftLong /></span>
               <p className='text-xl text-purple-500 pt-12 group-hover:hover:underline underline-offset-8'>Back to home page</p>
               </div>
               <p className='text-4xl font-sans font-semibold pt-8'>Coffe shop UMKM Cilamaya</p>
               <p className='text-2xl font-sans font-semibold pt-4'>E-commerce page use Rect js Tailwindcss Redux and another library</p>
               <p className='pt-8 flex gap-x-2'><span className='text-xl'><FaCalendarAlt /></span>Januari 06 2024 - Maret 28 2024</p>
               <div className='w-full border mt-4'></div>

             <div className='lg:w-[1000px] mx-auto h-auto rounded-md bg-zinc-700 flex justify-center mt-12'>
               <ContainerCards>
                    <img
                            style={{
                                transform: "translateZ(50px)",
                                transformStyle: "preserve-3d",
                            }}
                            className=" inset-4 grid w-full place-content-center rounded-xl shadow-lg "
                            src={Coffeshop} />
               </ContainerCards>
             </div>
             
             <div className='mt-8'>
                <p className='font-sans font-semibold text-2xl'>Descriptions</p>
                <p className='font-sans text-gray-400 laptop:text-left text-justify lg:mr-6'>The Coffeeshop Project was a school project aimed at the final assessment of student competency exams. However, this project was more than just an exam it was a real project for selling coffee at a café in my area in Cilamaya Karawang. I, as the person in charge of this project, acted as the project manager and also took on the role of front-end web developer. The technologies we used in this project included Tailwind CSS for styling components, React.js for component management and DOM manipulation, and Redux Toolkit for handling payment, cart, and authentication features. Additionally, for the REST API, we used Laravel. and Redux Toolkit for handling payments and cart features authtentication features</p>
             </div>
             <div className='mt-8 flex justify-between items-center'>
                <p className='font-sans font-semibold text-2xl'>Tech Stack</p>
             </div>
              <div className='flex'>
                 <div className='grid lg:grid-cols-6 grid-cols-5 gap-x-4'>
                    <div className='duration-200 group inline-block rounded-md p-3.5 hover:bg-indigo-200/30 w-[70px] dark:hover:bg-zinc-500/30'>
                        <img src={IconsReact} alt="" className='w-[80px]'/>
                    </div>
                    <div className='duration-200 group inline-block rounded-md p-3.5 hover:bg-indigo-200/30 w-[70px] dark:hover:bg-zinc-500/30'>
                        <img src={IconsTailwind} alt="" className='w-[80px]'/>
                    </div>
                    <div className='duration-200 group inline-block rounded-md p-3.5 hover:bg-indigo-200/30 w-[70px] dark:hover:bg-zinc-500/30'>
                        <img src={IconsRedux} alt="" className='w-[80px]'/>
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
        </>
    );
}

export default Projectcoffeeshop;
