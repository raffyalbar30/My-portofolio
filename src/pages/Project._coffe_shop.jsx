import React from 'react';
import { FaCalendarAlt } from "react-icons/fa";
import ContainerCards from '../Component/utilitis/Container-card';
import { TbWorld } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";
import ViewDetail from '../Component/utilitis/View_Detail';




const Projectcoffeeshop = () => {
    return (
        <> 
         <ViewDetail>
             <div className='ml-12 mr-12'>
               <div className='flex items-center gap-x-4 cursor-pointer group'>
               <span className='mt-12 text-2xl group-hover:scale-110'> <FaArrowLeftLong /></span>
               <p className='text-xl text-purple-500 pt-12 group-hover:hover:underline underline-offset-8'>Back to home page</p>
               </div>
               <p className='text-4xl font-sans font-semibold pt-8'>Coffe shop UMKM Cilamaya</p>
               <p className='text-2xl font-sans font-semibold pt-4'>E-commerce page use Rect js Tailwindcss Redux and another library</p>
               <p className='pt-8 flex gap-x-2'><span className='text-xl'><FaCalendarAlt /></span>Januari 06 2024 - Maret 28 2024</p>
               <div className='w-full border mt-4'></div>

             <div className='laptop:w-[1000px] mx-auto h-auto rounded-md bg-zinc-700 flex justify-center mt-12'>
               <ContainerCards>
                    <img
                            style={{
                                transform: "translateZ(50px)",
                                transformStyle: "preserve-3d",
                            }}
                            className=" inset-4 grid w-full place-content-center rounded-xl shadow-lg "
                            src="/public/projects/Coffe-shop.png" />
               </ContainerCards>
             </div>
             <div className='mt-8'>
                <p className='font-sans font-semibold text-2xl'>Tech stack</p>
                <div className='grid grid-cols-4'>
                <div data-tooltip-content="Tailwind CSS" class="icon-tooltip transition-colors duration-200 group inline-block rounded-md p-3.5 hover:bg-indigo-200/30 dark:hover:bg-zinc-500/30">
                 <img src="/public/icons/html.webp" alt="" className=' lg:w-[100px] w-[70px] mx-auto ' />
                 <span className='bg-indigo-100/30 rounded-sm flex justify-center mt-2  text-xs lg:text-base opacity-0 group-hover:opacity-100 text-[10px]'>Html</span>
                </div>
                </div>  
             </div>
              <div className='laptop:flex laptop:justify-between'>
             <div className='mt-8'>
                <p className='font-sans font-semibold text-2xl'>Descriptions</p>
                <p className='font-sans text-gray-400 laptop:text-left text-justify'>Lorem ipsum dolor sit amet Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt, in. Commodi possimus facere, officiis a quod tenetur quas ipsam obcaecati praesentium, vero iste ratione incidunt reprehenderit optio sequi debitis expedita.consectetur adipisicing elit. Corrupti atque hic dolores dignissimos voluptatibus odio amet quidem fugit. Fugiat dignissimos impedit iure, rem reprehenderit nulla mollitia in debitis veniam eligendi?Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, aperiam hic, ea rerum vitae assumenda debitis earum aspernatur corporis officia omnis cumque possimus totam illo, accusantium ex quod voluptates quaerat. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi adipisci quisquam deleniti dolores optio quis numquam architecto similique, placeat iste ex autem minus aliquam eaque animi id illum itaque quae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste consectetur natus perspiciatis error, pariatur voluptates aut?</p>
             </div>
               <div className=' border border-zinc-600 lg:p-8 lg:w-1/4 p-4 rounded-md mt-4 float-right'>
                    <div className='text-center mx-auto border w-48 flex items-center gap-x-4 py-2 rounded-md'>
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
             
             </div>
        </ViewDetail>
        </>
    );
}

export default Projectcoffeeshop;
