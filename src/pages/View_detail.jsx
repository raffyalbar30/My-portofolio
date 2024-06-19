import React from 'react';
import { FaCalendarAlt } from "react-icons/fa";
import ContainerCards from '../Component/utilitis/Container-card';
import Navbar from '../Component/Navbar/Navbar';

const ViewDetail = () => {
    return (
        <>
         <Navbar></Navbar>
        <div className='w-full backdrop-blur-lg bg-slate-100 opacity-30 h-24'> </div>
        <div className=' w-full absolute bg-zinc-800 rounded-t-lg z-10'>
             <div className='ml-12 mr-12'>
               <p className='text-xl text-purple-500 pt-12'>Back to home page</p>
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
                            src="/public/projects/coffe2.jpeg" />
               </ContainerCards>
             </div>
             <div className='mt-8'>
                <p className='font-sans font-semibold text-2xl'>Tech stack</p>
                <div className='flex justify-center laptop:justify-normal gap-x-4 pt-4'>
                                  <img src="/public/Icons/html.webp" alt="" className='w-[50px]' />
                                  <img src="/public/Icons/css.webp" alt="" className='w-[50px]' />
                                  <img src="/public/Icons/javascript.webp" alt="" className='w-[50px]' />
                                  <img src="/public/Icons/sass.svg" alt="" className='w-[50px]' />
                                  <img src="/public/Icons/bootstrap.webp" alt="" className='w-[50px]' />
                                  </div>
             </div>
              <div className='laptop:flex laptop:justify-between'>
             <div className='mt-8'>
                <p className='font-sans font-semibold text-2xl'>Descriptions</p>
                <p className='font-sans text-gray-400 laptop:text-left text-justify'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, aperiam hic, ea rerum vitae assumenda debitis earum aspernatur corporis officia omnis cumque possimus totam illo, accusantium ex quod voluptates quaerat. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi adipisci quisquam deleniti dolores optio quis numquam architecto similique, placeat iste ex autem minus aliquam eaque animi id illum itaque quae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste consectetur natus perspiciatis error, pariatur voluptates aut?</p>
             </div>
               <div className='mr-2 border p-8 rounded-md mt-4'>
                    <div className='text-center mx-auto border w-48 py-2 rounded-md'>
                      <a href="" className='text-sm'>Visite online site</a>
                    </div>
                    <div className='text-center mx-auto border w-48 py-2 mt-2 rounded-md'>
                      <a href="" className='text-sm'>Visite github repository</a>
                    </div>
                    <div className='text-center mx-auto border w-48 py-2 mt-2 rounded-md'>
                      <a href="" className='text-sm'>follow my repository</a>
                    </div>
               </div>
              </div>
             
             </div>
             </div> 
 
        </>
    );
}

export default ViewDetail;
