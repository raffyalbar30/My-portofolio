import React from 'react';
import { SiInstagram, SiGithub, SiLinkedin } from "react-icons/si"
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
     const sosial = [
          {
               url : "https://www.linkedin.com/in/mohammadraffyalbar/",
               label: "Linkedin",
               icons: SiLinkedin
         },
         {
             url : "https://github.com/raffyalbar30",
             label: "Github",
             icons: SiGithub
         },
         {
           url : "https://www.instagram.com/raffy_samaa",
           label: "Github",
           icons: SiInstagram
         },
         {
          url : "https://www.instagram.com/raffy_samaa",
          label: "whatsapp",
          icons: FaWhatsapp
        },
      
      ];
    return (
        <div className='bg-transparent w-full'>
           <div className='w-full border border-purple-950'></div>
                  <div className='flex justify-center laptop:gap-x-12 gap-x-2 mt-4 laptop:mt-8 cursor-pointer'>
                       <p className=' font-sans laptop:text-xl  text-white/60 font-semibold hover:underline underline-offset-8 decoration-purple-600'>Profil</p>
                       <p className=' font-sans laptop:text-xl  text-white/60 font-semibold hover:underline underline-offset-8 decoration-purple-600 '>Skils</p>
                       <p className=' font-sans laptop:text-xl  text-white/60 font-semibold hover:underline underline-offset-8 decoration-purple-600 '>Experince</p>
                       <p className=' font-sans laptop:text-xl  text-white/60 font-semibold hover:underline underline-offset-8 decoration-purple-600 '>Contact</p>
                       <p className=' font-sans laptop:text-xl  text-white/60 font-semibold hover:underline underline-offset-8 decoration-purple-600 '>Certificate</p>
                       <p className=' font-sans laptop:text-xl  text-white/60 font-semibold hover:underline underline-offset-8 decoration-purple-600 '>About</p>
                  </div>
                       <div className='flex gap-x-4 justify-center mt-8'>
                       {
                        sosial.map((item, i)=>{
                            const Icon = item.icons
                            return (
                                <a
                                key={i}
                                href={item.url}
                                aria-label={item.label}>
                                <Icon className='w-8 h-8 hover:scale-125 transition-all' />
                                </a>
                            )
                            })
                         }
                       </div>
                       <div className='flex justify-center mt-4 text-sm items-center'>
                          <p className='text-2'>Built with <span className='text-purple-400 underline underline-offset-4'>React Js,Tailwind CSS, Vite</span> and  <span className='text-purple-400 text-lg'>♥</span></p>
                       </div>
                       <p className='text-xs flex justify-center mb-2'>© 2024 RaffyAlbar | Front-End Developer</p>
        </div>
    );
}

export default Footer;
