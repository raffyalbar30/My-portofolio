import React from 'react';
import ContainerCards from '../utilitis/Container-card';
import ContainProject from '../utilitis/Container-projects';





const Projects = () => {
    return (
   <>
        <div className='flex justify-center mt-24 relative z-20'>
           <div className='cursor-pointer laptop:pt-12 pt-8'>
             <p className='text-white font-bold hover:scale-[1.02] text-center text-4xl pb-2 laptop:pb-4'>Experince👨‍💻</p>
              <div className="md:w-32 w-full md:h-[6px] h-1 bg-gradient-to-l from-purple-400 via-purple-300 to-purple-500 -translate-x-1 rounded-full"></div>
               <div className="md:w-32 w-full md:h-[6px] h-1 bg-purple-200 rounded-full translate-x-1"></div>
           </div>
      </div>
      <div className="grid grid-cols-1 laptop:grid-cols-2 laptop:gap-6 gap-1 p-4 mb-4 mt-10 ">
            <div className=' place-content-center bg-zinc-950 border border-white/[0.2] rounded-md p-8 laptop:mb-12 tablet:mb-12 mb-8'>
                    <ContainerCards>
                    <img
                            style={{
                                transform: "translateZ(50px)",
                                transformStyle: "preserve-3d",
                            }}
                            className=" inset-4 grid w-full place-content-center rounded-xl shadow-lg blur-sm hover:blur-none"
                            src="/public/projects/Coffe-shop.png" />
                    </ContainerCards>
                    <ContainProject>
                        <h1 className='laptop:text-4xl text-white pt-5  mb-2 text-xl font-sans mt-4'>Coffeeshop UMKM Cilamaya</h1>
                              <h1 className='laptop:text-2xl text-sm text-white/75 font-sans flex gap-x-2 items-center'>
                              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="rounded-lg bg-indigo-100 p-1 text-4xl text-green-400 dark:bg-zinc-700/90" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M160 389a20.91 20.91 0 01-13.82-5.2l-128-112a21 21 0 010-31.6l128-112a21 21 0 0127.66 31.61L63.89 256l109.94 96.19A21 21 0 01160 389zm192 0a21 21 0 01-13.84-36.81L448.11 256l-109.94-96.19a21 21 0 0127.66-31.61l128 112a21 21 0 010 31.6l-128 112A20.89 20.89 0 01352 389zm-144 48a21 21 0 01-20.12-27l96-320a21 21 0 1140.23 12l-96 320A21 21 0 01208 437z"></path></svg>
                              Project Menager & Front end Developer</h1>
                              <div className='pt-4'>
                                  <p className='text-justify font-sans text-gray-300 text-sm z-10'>The Coffeeshop Project was a school project
                                     aimed at the final assessment of student competency exams. However, this project was more than just an exam
                                     it was a real project for selling coffee at a café in my area in Cilamaya Karawang. I, as the person in charge 
                                     of this project, acted as the project manager and also took on the role of front-end web developer. The technologies
                                     we used in this project included Tailwind CSS for styling components, React.js for component management and DOM manipulation, 
                                     and Redux Toolkit for handling payment, cart, 
                                     and authentication features. Additionally, for the REST API, we used Laravel.
                                     and Redux Toolkit for handling payments and cart features authtentication features.</p>
                                  <div className='flex justify-center laptop:justify-normal gap-x-4 pt-4'>
                                  <div data-tooltip-content="Tailwind CSS" class="icon-tooltip transition-colors duration-200 group inline-block rounded-md p-3.5 hover:bg-indigo-200/30 dark:hover:bg-zinc-500/30">
                                  <img src="/public/Icons/react.webp" alt="" className='w-[60px]' />
                                  </div>
                                  <div data-tooltip-content="Tailwind CSS" class="icon-tooltip transition-colors duration-200 group inline-block rounded-md p-3.5 hover:bg-indigo-200/30 dark:hover:bg-zinc-500/30">
                                  <img src="/public/Icons/tailwind.webp" alt="" className='w-[60px]' />
                                  </div>
                                  <div data-tooltip-content="Tailwind CSS" class="icon-tooltip transition-colors duration-200 group inline-block rounded-md p-3.5 hover:bg-indigo-200/30 dark:hover:bg-zinc-500/30">
                                  <img src="/public/Icons/redux.svg" alt="" className='w-[60px]' />
                                  </div>
                                  <div data-tooltip-content="Tailwind CSS" class="icon-tooltip transition-colors duration-200 group inline-block rounded-md p-3.5 hover:bg-indigo-200/30 dark:hover:bg-zinc-500/30">
                                  <img src="/public/Icons/Javascript.webp" alt="" className='w-[60px]' />
                                  </div>
                                  </div>
                                  <div className='flex justify-center laptop:justify-normal mt-4'>
                                  <a class=" uppercase text-xs font-bold group rounded text-center transition  relative !text-purple-400 mt-2 flex w-full items-center justify-center gap-2 self-start px-4 py-3 lg:w-max border !border-purple-400  hover:bg-indigo-500/10" target="_self" href="/projects/your-anime-list"> <span class="translate-x-3.5 transition-transform duration-200 group-hover:translate-x-0">See Project</span><span class="relative -translate-x-4 text-lg opacity-0 transition duration-200 group-hover:translate-x-0 group-hover:opacity-100"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="text-purple-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path></svg></span> </a>
                                  </div>
                              </div>
                    </ContainProject>
            </div>

            {/* perintis projects */}
            <div className=' place-content-center bg-zinc-950 border border-white/[0.2] rounded-md p-8 laptop:mb-12 tablet:mb-12 mb-8'>
                    <ContainerCards>
                    <img
                            style={{
                                transform: "translateZ(50px)",
                                transformStyle: "preserve-3d",
                            }}
                            className=" inset-4 grid w-full place-content-center rounded-xl shadow-lg blur-sm hover:blur-none"
                            src="/public/projects/printis.png" />
                    </ContainerCards>
                    <ContainProject>
                        <h1 className='laptop:text-4xl text-white pt-5  mb-2 text-xl font-sans mt-4'>Perintis Computer E-commerce</h1>
                              <h1 className='laptop:text-2xl text-sm text-white/75 font-sans flex gap-x-2 items-center'>
                              <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="rounded-lg bg-indigo-100 p-1 text-4xl text-green-400 dark:bg-zinc-700/90" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M160 389a20.91 20.91 0 01-13.82-5.2l-128-112a21 21 0 010-31.6l128-112a21 21 0 0127.66 31.61L63.89 256l109.94 96.19A21 21 0 01160 389zm192 0a21 21 0 01-13.84-36.81L448.11 256l-109.94-96.19a21 21 0 0127.66-31.61l128 112a21 21 0 010 31.6l-128 112A20.89 20.89 0 01352 389zm-144 48a21 21 0 01-20.12-27l96-320a21 21 0 1140.23 12l-96 320A21 21 0 01208 437z"></path></svg>
                               Front end Developer</h1>
                              <div className='pt-4'>
                                  <p className='text-justify font-sans text-gray-300 text-sm z-10'>Perintis Computers Karawang is an e-commerce
                                     website for buying and selling 
                                    electronic devices such as computers, laptops, and mobile phones. This project was my first project,
                                     and it began during my internship at CV Perintis Computers. I was assigned to the front-end web development team, 
                                     using JavaScript, Sass, and Bootstrap, while the back-end was handled using PHP by my team,
                                     In this project, I gained a lot of experience, especially in communicating with seniors and collaborating within a team to develop the structure
                                      of the application especially since this was my first project.</p>
                                  <div className='flex justify-center laptop:justify-normal gap-x-4 pt-4'>
                                  <div data-tooltip-content="Tailwind CSS" class="icon-tooltip transition-colors duration-200 group inline-block rounded-md p-3.5 hover:bg-indigo-200/30 dark:hover:bg-zinc-500/30">
                                  <img src="/public/Icons/html.webp" alt="" className='w-[60px]' />
                                  </div>
                                  <div data-tooltip-content="Tailwind CSS" class="icon-tooltip transition-colors duration-200 group inline-block rounded-md p-3.5 hover:bg-indigo-200/30 dark:hover:bg-zinc-500/30">
                                  <img src="/public/Icons/css.webp" alt="" className='w-[60px]' />
                                  </div>
                                  <div data-tooltip-content="Tailwind CSS" class="icon-tooltip transition-colors duration-200 group inline-block rounded-md p-3.5 hover:bg-indigo-200/30 dark:hover:bg-zinc-500/30">
                                  <img src="/public/Icons/javascript.webp" alt="" className='w-[60px]' />
                                  </div>
                                  <div data-tooltip-content="Tailwind CSS" class="icon-tooltip transition-colors duration-200 group inline-block rounded-md p-3.5 hover:bg-indigo-200/30 dark:hover:bg-zinc-500/30">
                                  <img src="/public/Icons/sass.svg" alt="" className='w-[60px]' />
                                  </div>
                                  <div data-tooltip-content="Tailwind CSS" class="icon-tooltip transition-colors duration-200 group inline-block rounded-md p-3.5 hover:bg-indigo-200/30 dark:hover:bg-zinc-500/30">
                                  <img src="/public/Icons/bootstrap.webp" alt="" className='w-[60px]' />
                                  </div>
                                  </div>
                                  <div className='flex justify-center laptop:justify-normal mt-4'>
                                  <a class=" uppercase text-xs font-bold group rounded text-center transition  relative !text-purple-400 mt-2 flex w-full items-center justify-center gap-2 self-start px-4 py-3 lg:w-max border !border-purple-400  hover:bg-indigo-500/10" target="_self" href="/projects/your-anime-list"> <span class="translate-x-3.5 transition-transform duration-200 group-hover:translate-x-0">See Project</span><span class="relative -translate-x-4 text-lg opacity-0 transition duration-200 group-hover:translate-x-0 group-hover:opacity-100"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="text-purple-400" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"></path></svg></span> </a>
                                  </div>
                              </div>
                    </ContainProject>
            </div>

            {/* Raff prompt engginer AI */}
           

            {/* CBT SMKN 31 Medan */}
          
      </div>



</>
    );
}

export default Projects;
