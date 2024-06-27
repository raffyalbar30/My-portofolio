
import ContainerCards from '../utilitis/Container-card';
import { useState } from 'react';

const datas = [
   {
      id_data : 1,
      label   : "international certify",
      role    : "python" ,
      Image   : "/public/Certify/pythoncertify.jpeg"

   },
   { 
       id_data : 2,
       label : "national certify", 
       role    : "javascript" ,
       Image  : "/public/Certify/flutercertify.jpeg"

   },
   {
       id_data : 3,
       label   : "workshop certify",
       role    : "c++" , 
       Image   : "/public/Certify/pythoncertify.jpeg"

    },
    { 
        id_data : 4,
        label : "chanel certify", 
        role    : "java" ,
        Image  : "/public/Certify/flutercertify.jpeg"

    }
];

  const Certificates = () => {

     const items = datas;
     const [selected, setselected] = useState(items[0])

  
    return (
        <>
        <div className='border laptop:w-[1200px] h-auto rounded-sm p-2 border-zinc-600'>
       <div className='p-2'>
          <div>
           <p className='text-white/60 mt-4 text-xl'>Reacent Update Certifity</p>
           {
           <div className='flex justify-between'>
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
                    <p className="text-sm text-gray-400">18-8-2022</p>
                    <p className={` text-sm text-gray-400 cursor-pointer`} onClick={()=> setselected(item)}>{item.label}</p>
                    <p className="mt-2 text-gray-400 text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores incidunt blanditiis dignissimos, enim earum mollitia.</p>
                    </div>
                        </li>

                  ))

               }
            </ul>
            </div>
            <div className='divide-y divide-dashed md:divide-solid border border-zinc-600 mb-2'></div>
            <div className=' w-full mb-2 mr-2 ml-2 mt-8'> 
                 {
                    <div key={selected.id_data}>
                    <ContainerCards>
                       <img
                               style={{
                                   transform: "translateZ(50px)",
                                   transformStyle: "preserve-3d",
                               }}
                               src={selected.Image} alt="" className='w-full h-[400px]' />
                  </ContainerCards>
                    </div>
                 }
                  
            </div>
           </div>
           }
           </div>
       </div>
        </div>
        </>
    );
}

export default Certificates;
