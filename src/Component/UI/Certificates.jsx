
import ContainerCards from '../utilitis/Container-card';
import { useState } from 'react';

const datas = [
   {
      id_data : 1,
      label   : "International Certify",
      role    : "python",
      Detail  : "Lavel international quiz in sigma insitute of Engineering",
      Image   : "/public/Certify/pythoncertify.jpeg",
      Years   : 2023

   },
   {
    id_data : 2,
    label   : "National Workshop Certify",
    role    : "Flutter mobile developer",
    Detail  : "Lavel national quiz workshop ",
    Image   : "/public/Certify/flutercertify.jpeg",
    Years   : 2024

 },
 {
    id_data : 3,
    label   : "Dicoding botcamps challange",
    role    : "Flutter mobile developer",
    Detail  : "Lavel national quiz workshop ",
    Image   : "/public/Certify/fluttercertify.jpeg",
    Years   : 2024

 },
   
];

  const Certificates = () => {

     const items = datas;
     const [selected, setselected] = useState(items[0])

  
    return (
        <>
        <div className='border laptop:w-[1200px] h-auto rounded-sm p-2 border-zinc-600'>
       <div className='p-8'>
          <div>
           <p className='text-white/60 mt-4 text-xl mb-4'>Reacent Update Certifity</p>
           {
           <div className='laptop:flex laptop:justify-between'>
            <div className='mt-4 mr-2 mb-2'>
            <ul className='mt-4'>
               {
                  items.map( item => (
                   <li class="relative flex items-baseline gap-6 pb-5" key={item.id_data}>
                    <div class="before:absolute before:left-[5.5px] before:h-full before:w-[1px] before:bg-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" class="bi bi-circle-fill fill-gray-400" viewBox="0 0 16 16">
                        <circle cx="8" cy="8" r="8" />
                    </svg>
                    </div>
                    <div>
                    <p className="text-sm text-gray-400">{item.Years}</p>
                    <p className={` text-sm text-gray-400 cursor-pointer`} onClick={()=> setselected(item)}>{item.role}</p>
                    <p className={` text-sm text-gray-400 cursor-pointer`} onClick={()=> setselected(item)}>{item.label}</p>
                    <p className="mt-2 text-gray-400 text-sm">{item.Detail}</p>
                    </div>
                        </li>

                  ))

               }
            </ul>
            </div>
            <div className='divide-y laptop:divide-y divide-dashed md:divide-solid border border-zinc-600 mb-2'></div>
            <div className='w-full mb-2 mr-2 ml-2 mt-2'> 
                 {
                    <div key={selected.id_data}>
                    <ContainerCards>
                       <img
                               style={{
                                   transform: "translateZ(50px)",
                                   transformStyle: "preserve-3d",
                               }}
                               src={selected.Image} alt="" className='w-full laptop:h-[400px] iphone-14:h-[180px]' />
                  </ContainerCards>
                    </div>
                 }
                  
            </div>
           </div>
           }
           </div>
       </div>
        </div>

        {/* responsive */}
        {/* <div className='border laptop:w-[1200px] laptop:opacity-0 h-auto rounded-sm p-2 absolute z-10 mt-4 border-zinc-600'>
        <div className='p-4'>
            <h2 className='mr-4'>Recent Certifity</h2>
             {
               <div>
                   <div className='mt-4 mr-2 mb-2'>
         <ul className='mt-4'>
            {
               items.map( item => (
                <li class="relative flex items-baseline gap-6 pb-5" key={item.id_data}>
                 <div class="before:absolute before:left-[5.5px] before:h-full before:w-[1px] before:bg-gray-400">
                 <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" class="bi bi-circle-fill fill-gray-400" viewBox="0 0 16 16">
                     <circle cx="8" cy="8" r="8" />
                 </svg>
                 </div>
                 <div>
                 <p className="text-sm text-gray-400">{item.Years}</p>
                 <p className={` text-sm text-gray-400 cursor-pointer`} onClick={()=> setselected(item)}>{item.role}</p>
                 <p className={` text-sm text-gray-400 cursor-pointer`} onClick={()=> setselected(item)}>{item.label}</p>
                 <p className="mt-2 text-gray-400 text-sm">{item.Detail}</p>
                 </div>
                     </li>

               ))

            }
         </ul>

         <div className='divide-x divide-dashed md:divide-solid border mt-2 border-zinc-600 mb-2'></div>
         <div className='w-full mb-2 mr-2 ml-2 mt-4 '> 
              {
                 <div key={selected.id_data}>
                 <ContainerCards>
                    <img
                            style={{
                                transform: "translateZ(50px)",
                                transformStyle: "preserve-3d",
                            }}
                            src={selected.Image} alt="" className='w-full iphone-14:h-[180px]' />
               </ContainerCards>
                 </div>
              }
               
         </div>
         </div>
               </div>
             }
        </div>
       </div> */}
        </>
    );
}

export default Certificates;
