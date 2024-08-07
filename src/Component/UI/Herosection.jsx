import React from 'react';
import heroIcon from '/img/Group1.png';



const Herosection = () => {
   
    return (
    <>
    <div className='flex justify-center items-center sm:mt-2 md:mt-12 mb-12'>
       <div className='flex gap-x-12 flex-wrap mt-8 md:justify-between'>
          <img src={heroIcon} alt="" className='w-[300px] lg:w-[300px] sm:w-[250px] md:w-[200px] mx-auto' />
             <div className='mx-auto mt-6 md:mt-12'>
               <h1 className='lg:text-5xl md:text-5xl font-bold sm:text-4xl text-4xl '>Nice to meat you <span>👋</span></h1>
                <div className='pt-2'>
                   <h1 className='lg:text-8xl md:text-5xl font-bold sm:ml-4 ml-2 md:ml-0 sm:text-3xl text-4xl pb-2'>M.RaffyAlbar</h1>
                    <h1 className='lg:text-4xl font-bold  md:ml-0 sm:ml-4 md:text-3xl sm:text-2xl text-2xl ml-2'>The front end web developer</h1>
                </div>
             </div>
       </div>
  </div>
    </>


        
                  
      
    );
}

export default Herosection;
