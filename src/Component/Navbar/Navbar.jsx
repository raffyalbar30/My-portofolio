import React from 'react';
import { useState } from 'react';
import { CiMenuFries } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";
import {  Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react'

 
 const Navbar = () => {

   const [isOpen, setIsOpen] = useState(false);
   
   
   function open() {
     const navbar = document.getElementById("navbar");
     navbar.classList.add("hidden");
     setIsOpen(true);
     }
   
     function close() {
       navbar.classList.remove("hidden");
        setIsOpen(false);
     }

  return (

    <>
      <div className=' w-full top-0 flex justify-between z-20 fixed h-2 cursor-pointer'>
           <div className='opacity-0'>
               <p>Raffy Albar</p>
           </div>
         
            <div className={`lg:flex mx-auto md:flex md:justify-center  md:items-center md:gap-5 md:rounded-full md:bg-purple-500 md:px-12 lg:py-8 md:py-8 md:text-2xl lg:justify-center lg:items-center lg:gap-5 lg:rounded-full lg:bg-purple-500  items-center opacity-0 lg:opacity-100 md:opacity-100 mt-4 lg:px-12 lg:py-4`}>
                <h1 className='font-sans laptop:text-2xl font-semibold hover:underline underline-offset-8'>Profil</h1>
                <h1 className='font-sans laptop:text-2xl font-semibold hover:underline underline-offset-8'>Skils</h1>
                <h1 className='font-sans laptop:text-2xl font-semibold hover:underline underline-offset-8'>Experince</h1>
                <h1 className='font-sans laptop:text-2xl font-semibold hover:underline underline-offset-8'>Certifity</h1>
            </div>
            

            <div id="navbar" className='mr-4 mt-4 opacity-100 lg:opacity-0 md:opacity-0 group'>
                 <div className='border-2 p-4 rounded-md border-gray-700'>
                 <CiMenuFries className='text-2xl text-white'
                  onClick={open}
                  ></CiMenuFries>
                 </div>
            </div>
           
       <Transition appear show={isOpen}>
        <Dialog as="div" className=" z-10 focus:outline-none" onClose={close} __demoMode>
          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className={`${isOpen ? 'active' : 'hidden'} flex min-h-full items-start justify-center p-4`}>
              <TransitionChild
                enter="ease-out duration-300"
                enterFrom="opacity-0 transform-[scale(95%)]"
                enterTo="opacity-100 transform-[scale(100%)]"
                leave="ease-in duration-150"
                leaveFrom="opacity-100 transform-[scale(100%)]"
                leaveTo="opacity-0 transform-[scale(95%)]"
              >
                <DialogPanel className="w-full max-w-md rounded-xl top-0 bg-white/20 p-6 backdrop-blur-2xl">
                  <DialogTitle as="h3" className="text-base/7 font-medium text-white">
                  <div className='border p-4 rounded-md opacity-100  top-0 float-right z-10 '>
                    <IoIosClose className='text-2xl  '
                      onClick={close} />
                 </div> 
                  </DialogTitle>
                     <h1 className='font-sans text-2xl  hover:underline underline-offset-8 pt-16'>Profil</h1>
                     <h1 className='font-sans text-2xl  hover:underline underline-offset-8 mt-2'>Skils</h1>
                     <h1 className='font-sans text-2xl  hover:underline underline-offset-8 mt-2'>Experince</h1>
                     <h1 className='font-sans text-2xl  hover:underline underline-offset-8 mt-2'>Contact</h1>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
      </div>
      
       

 </>

  )
 }

 export default Navbar;







 