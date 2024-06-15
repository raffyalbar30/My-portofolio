import React from 'react';
import { useState } from 'react';
import { CiMenuFries } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";

 
 const Navbar = () => {
    const [isOpen,setisOpen] = useState();

    const Handlerclick = () =>{
    const Nav = document.getElementById("Navbar");
    Nav.classList.add("hidden");
     console.log("hello");
     setisOpen(true);
  }

  const Handlerclos = () => {
    setisOpen(false);
    const Nav = document.getElementById("Navbar");
    Nav.classList.remove("hidden");
  }
  return (

    <>
      <div className=' w-full top-0 flex justify-between fixed z-30 cursor-pointer'>
           <div className='opacity-0'>
               <p>Raffy Albar</p>
           </div>
            <div className={`laptop:flex  mx-auto tablet:flex tablet:justify-center tablet:items-center tablet:gap-5 tablet:rounded-full tablet:bg-purple-500 tablet:px-12 tablet:py-4 tablet:text-2xl laptop:justify-center laptop:items-center laptop:gap-5 laptop:rounded-full laptop:bg-purple-500  items-center opacity-0 laptop:opacity-100 tablet:opacity-100 mt-4 laptop:px-12 lapyop:py-4`}>
                <h1 className='font-sans laptop:text-2xl font-semibold hover:underline underline-offset-8'>Profil</h1>
                <h1 className='font-sans laptop:text-2xl font-semibold hover:underline underline-offset-8'>Skils</h1>
                <h1 className='font-sans laptop:text-2xl font-semibold hover:underline underline-offset-8'>Experince</h1>
                <h1 className='font-sans laptop:text-2xl font-semibold hover:underline underline-offset-8'>Contact</h1>
            </div>

            <div id='Navbar' className='mr-4 mt-4 opacity-100 laptop:opacity-0 tablet:opacity-0'>
                 <div className='border p-4 rounded-md'>
                 <CiMenuFries className='text-2xl'
                  onClick={Handlerclick}></CiMenuFries>
                 </div>
            </div>
      </div>
       
       <div className='fixed top-0 z-30'>
       <div  id='active' className={`${isOpen ? 'active' : 'hidden'}  laptop:opacity-0 tablet:opacity-0 opacity-100`}>
           <div className='bg-purple-500 flex-wrap absolute w-screen top-0 p-8  h-auto'>
              <div className='border p-4 rounded-md opacity-100  top-0 float-right'>
                 <IoIosClose className='text-2xl '
                  onClick={Handlerclos} />
             </div>
                <h1 className='font-sans text-2xl  hover:underline underline-offset-8 pt-16'>Profil</h1>
                <h1 className='font-sans text-2xl  hover:underline underline-offset-8 mt-2'>Skils</h1>
                <h1 className='font-sans text-2xl  hover:underline underline-offset-8 mt-2'>Experince</h1>
                <h1 className='font-sans text-2xl  hover:underline underline-offset-8 mt-2'>Contact</h1>
           </div>
       </div>
       </div>
    
    </>

  )
 }
 
 export default Navbar;
 

 