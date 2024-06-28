import React from 'react';




const Herosection = () => {
   
    return (
    <>
    <div className='flex justify-center items-center mt-12 laptop:mt-24 iphone:mt-12 tablet:mt-44 iphone-xr:mt-28 '>
       <div className='flex gap-x-12 handphone:flex-wrap  '>
          <img src="/public/Group1.png" alt="" className='w-[70px] laptop:mt-8 laptop:w-[300px] iphone-xr:w-[300px] ipad:w-[300px] handphone:w-[250px] handphone:mx-auto ' />
             <div className='laptop:mt-28 laptop:ml-12 handphone:mx-auto handphone:mt-8 iphone-xr:mt-12'>
               <h1 className='laptop:text-5xl tablet:text-2xl font-bold handphone:text-4xl'>Nice to meat you <span>👋</span></h1>
                <div className='pt-2'>
                   <h1 className='laptop:text-8xl tablet:text-5xl font-bold ml-4 handphone:ml-2 tablet:ml-0 handphone:text-5xl ipad:text-6xl pb-2'>M.RaffyAlbar</h1>
                    <h1 className='laptop:text-4xl font-bold ml-4 tablet:ml-0 handphone:ml-2 handphone:text-2xl'>The front end web developer</h1>
                </div>
             </div>
       </div>
  </div>
   <div className=' laptop:backdrop-blur-sm  handphone:mt-28 desktop:mt-44 iphone-xr:mt-52 ipad:mt-8 iphone-14:mt-12 iphone:mt-12 md:border tablet:mt-8 backdrop-blur-md laptop:mt-12 mt-12  h-28 -z-10'></div>
    </>


        
                  
      
    );
}

export default Herosection;
