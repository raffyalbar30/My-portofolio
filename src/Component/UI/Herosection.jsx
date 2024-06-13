import React from 'react';


const Herosection = () => {
   
    return (
    
        <div className='flex justify-center mt-32 '>
        <div className='flex gap-x-12 handphone:flex-wrap '>
           <img src="/public/img/Group1.png" alt="" className='w-[70px] laptop:w-[350px] handphone:w-[250px] handphone:mx-auto ' />
              <div className='mt-14 handphone:mx-auto handphone:mt-8'>
                <h1 className='laptop:text-5xl font-bold handphone:text-4xl'>Nice to meat you <span>👋</span></h1>
                 <div className='pt-2'>
                    <h1 className='laptop:text-8xl font-bold ml-4 handphone:ml-2 handphone:text-5xl pb-2'>M.RaffyAlbar</h1>
                     <h1 className='laptop:text-4xl font-bold ml-4 handphone:ml-2 handphone:text-2xl'>The front end web developer</h1>
                 </div>
              </div>
        </div>
   </div>


        
                  
      
    );
}

export default Herosection;
