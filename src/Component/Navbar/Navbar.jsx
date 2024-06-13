import React from 'react';




const Navbar = () => {

    return (
         <>
         <div className='w-full fixed flex justify-center top-0 z-20  '>
          <div className='flex justify-center items-center cursor-pointer '>
            <nav className='p-4 flex mt-2 items-center ml-12 gap-5 bg-slate-300 text-white bg-opacity-80 shadow-2xl rounded-xl backdrop-saturate-100'>
                          <h1 className='text-2xl font-semibold hover:underline hover:underline-offset-8 hover:decoration-slate-100'>Profil</h1>
                          <h1 className='text-2xl font-semibold hover:underline hover:underline-offset-8 hover:decoration-slate-100'>Skils</h1>
                          <h1 className='text-2xl  font-semibold hover:underline hover:underline-offset-8 hover:decoration-slate-100'>Experince</h1>
                          <h1 className='text-2xl  font-semibold hover:underline hover:underline-offset-8 hover:decoration-slate-100'>Contact</h1>
                          <h1 className='text-2xl font-semibold hover:underline hover:underline-offset-8 hover:decoration-slate-100 '>Certificates</h1>
            </nav>
           </div>
         </div>
         </>
    );
}

export default Navbar;
 