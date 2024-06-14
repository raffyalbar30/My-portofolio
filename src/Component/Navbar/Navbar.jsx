import React from 'react';
import { useState } from 'react';
import { CiMenuFries } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";





const Navbar = () => {
   
  const [isOpen, setisOpen] = useState(false);

  const Handleclick = () => {
    setisOpen(true);
  }

  const Handleclose = () => {
    setisOpen(false);
  }

    return (
         <>
         <div className='flex justify-between'>
          <p className='opacity-0'>Raffy albar</p>
         <div className='w-full fixed flex justify-center items-center top-0 z-40 opacity-0 laptop:opacity-100'>
          <div className='flex items-center cursor-pointer '>
            <nav className='p-4 flex justify-center mt-2 items-center ml-12 gap-5 bg-slate-300 text-white bg-opacity-80 shadow-2xl rounded-xl backdrop-saturate-100'>
                          <h1 className='text-2xl font-semibold hover:underline hover:underline-offset-8 hover:decoration-slate-100'>Profil</h1>
                          <h1 className='text-2xl font-semibold hover:underline hover:underline-offset-8 hover:decoration-slate-100'>Skils</h1>
                          <h1 className='text-2xl  font-semibold hover:underline hover:underline-offset-8 hover:decoration-slate-100'>Experince</h1>
                          <h1 className='text-2xl  font-semibold hover:underline hover:underline-offset-8 hover:decoration-slate-100'>Certificates</h1>
                          <h1 className='text-2xl font-semibold hover:underline hover:underline-offset-8 hover:decoration-slate-100 '>Contact</h1>
            </nav>
           </div>
         </div>
         
         <div className='laptop:opacity-0 opacity-100 p-4'>
           <div className='p-4 border rounded-md '>
                 <CiMenuFries className='text-2xl'
                  onClick={Handleclick} />
           </div>
          </div>
          {isOpen ?
          <div className='absolute w-full h-80 backdrop-blur-md flex justify-center'>
                <div className='absolute bg-slate-600 w-full  h-auto'>
                <div className='mb-4 float-right p-2'>
                   <div className='p-2 border rounded-md'>
                   <IoIosClose className='text-xl'
                   onClick={Handleclose} />
                   </div>
                </div>
                <nav className='p-4 mt-4 flex-wrap text-center  items-center'>
                          <h1 className='text-2xl font-semibold hover:underline hover:underline-offset-8 hover:decoration-slate-100 pb-2 pt-12'>Profil</h1>
                          <h1 className='text-2xl font-semibold hover:underline hover:underline-offset-8 hover:decoration-slate-100 pb-2'>Skils</h1>
                          <h1 className='text-2xl  font-semibold hover:underline hover:underline-offset-8 hover:decoration-slate-100 pb-2'>Experince</h1>
                          <h1 className='text-2xl  font-semibold hover:underline hover:underline-offset-8 hover:decoration-slate-100 pb-2'>Certificates</h1>
                          <h1 className='text-2xl font-semibold hover:underline hover:underline-offset-8 hover:decoration-slate-100 pb-2'>Contact</h1>
                  </nav>
                </div>
           </div>
            : ""}
       </div>
         </>
    );
}

export default Navbar;
 