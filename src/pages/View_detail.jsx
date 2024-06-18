import React from 'react';
import { FaCalendarAlt } from "react-icons/fa";
import ContainerCards from '../Component/utilitis/Container-card';

const ViewDetail = () => {
    return (
        <>
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
                <p>Descriptions</p>
             </div>
             </div> 
        </div>
        </>
    );
}

export default ViewDetail;
