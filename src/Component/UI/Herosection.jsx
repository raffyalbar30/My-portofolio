import React from 'react';




const Herosection = () => {
   
    return (
    <>
    <div className='flex justify-center mt-12 laptop:mt-32 iphone:mt-12 tablet:mt-44 '>
       <div className='flex gap-x-12 handphone:flex-wrap  '>
          <img src="/public/Group1.png" alt="" className='w-[70px] laptop:w-[400px] ipad:w-[300px] handphone:w-[250px] handphone:mx-auto ' />
             <div className='laptop:mt-28 laptop:ml-12 handphone:mx-auto handphone:mt-8'>
               <h1 className='laptop:text-5xl tablet:text-2xl font-bold handphone:text-4xl'>Nice to meat you <span>👋</span></h1>
                <div className='pt-2'>
                   <h1 className='laptop:text-8xl tablet:text-5xl font-bold ml-4 handphone:ml-2 tablet:ml-0 handphone:text-5xl ipad:text-6xl pb-2'>M.RaffyAlbar</h1>
                    <h1 className='laptop:text-4xl font-bold ml-4 tablet:ml-0 handphone:ml-2 handphone:text-2xl'>The front end web developer</h1>
                </div>
             </div>
       </div>
  </div>
   <div className=' laptop:backdrop-blur-sm iphone-xr:mt-52 ipad:mt-52 iphone-14:mt-12 iphone:mt-44 md:border tablet:mt-8 backdrop-blur-md laptop:mt-12 mt-12  h-28 -z-10'></div>
    </>


        
                  
      
    );
}

export default Herosection;
