import React from 'react';
import { CiMenuFries } from "react-icons/ci";




const Navbar = () => {

    return (
         <>
         <div className='flex justify-between'>
          <div className='float-right laptop:opacity-0 opacity-100'>
           <div className='p-4 border rounded-md'>
                 <CiMenuFries className='text-2xl' />
           </div>
          </div>
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
       </div>
         </>
    );
}

export default Navbar;
 