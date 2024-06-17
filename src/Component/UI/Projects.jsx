import React from 'react';
import ContainerCards from '../utilitis/Container-card';
import ContainProject from '../utilitis/Contain-project';



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
      <div className="grid grid-cols-1 laptop:grid-cols-2 laptop:gap-6 gap-1 p-4 mb-4 mt-10 group ">
            <div className='w-full place-content-center bg-zinc-950 border border-white/[0.2] rounded-md p-8 laptop:mb-12 tablet:mb-12 mb-8'>
                    <ContainerCards>
                    <img
                            style={{
                                transform: "translateZ(50px)",
                                transformStyle: "preserve-3d",
                            }}
                            className=" inset-4 grid place-content-center rounded-xl shadow-lg blur-sm hover:blur-none"
                            src="/public/projects/coffe2.jpeg" />
                    </ContainerCards>
                    <ContainProject>
                        <h1 className='laptop:text-2xl text-white pt-5 pb-2 font-sans'>Coffeeshop UMKM Cilamaya</h1>
                              <h1 className='laptop:text-2xl text-white pb-2 font-sans'>Project Menager & Front end Developer</h1>
                              <div className='w-full border bottom-1'></div>
                              <div className='pt-4'>
                                  <p className='text-justify font-sans text-gray-300 text-sm z-10'>The Coffeeshop Project was a
                                      school project aimed at the final assessment of student competency exams. However, 
                                      it was more than just an exam; it was a real project for selling coffee at a café in 
                                      my area in Cilamaya Karawang. I, as the person in charge of this project, served as the
                                      project manager and also took on the role of front-end web developer. The technologies we 
                                      used in this project included Tailwind CSS for styling components, React.js for component 
                                      management and DOM manipulation,
                                      and Redux Toolkit for handling payments and cart features authtentication features.</p>
                                  <div className='flex justify-center laptop:justify-normal gap-x-4 pt-4'>
                                  <img src="/public/Icons/react.webp" alt="" className='w-[50px]' />
                                  <img src="/public/Icons/tailwind.webp" alt="" className='w-[50px]' />
                                  <img src="/public/Icons/redux.svg" alt="" className='w-[50px]' />
                                  <img src="/public/Icons/Javascript.webp" alt="" className='w-[50px]' />
                                  </div>
                                  <div className='flex justify-center laptop:justify-normal mt-4'>
                                      <button className='px-20 py-2 border rounded-md hover:border-purple-500 hover:bg-purple-500 hover:transition-colors hover:duration-75 '>View Detail</button>
                                  </div>
                              </div>
                    </ContainProject>
            </div>

            {/* perintis projects */}
            <div className='w-full place-content-center bg-zinc-950 border border-white/[0.2] rounded-md p-8 laptop:mb-12 tablet:mb-12 mb-8'>
                    <ContainerCards>
                    <img
                            style={{
                                transform: "translateZ(50px)",
                                transformStyle: "preserve-3d",
                            }}
                            className=" inset-4 grid place-content-center rounded-xl shadow-lg blur-sm hover:blur-none"
                            src="/public/projects/perintis.jpeg" />
                    </ContainerCards>
                    <ContainProject>
                        <h1 className='laptop:text-2xl text-white pt-5 pb-2 font-sans'>Perintis Computer Karawang</h1>
                              <h1 className='laptop:text-2xl text-white pb-2 font-sans'>Front end Web Developer</h1>
                              <div className='w-full border bottom-1'></div>
                              <div className='pt-4'>
                                  <p className='text-justify font-sans text-gray-300 text-sm z-10'>This project is my first project during my internship at a computer startup. 
                                    I was assigned to improve the sales website of the computer startup. I used native technologies such as HTML, CSS, JavaScript, Sass, and Bootstrap 
                                    for the user interface. 
                                    For the front-end and back-end, I utilized PHP with an MVC structure.</p>
                                  <div className='flex justify-center laptop:justify-normal gap-x-4 pt-4'>
                                  <img src="/public/Icons/html.webp" alt="" className='w-[50px]' />
                                  <img src="/public/Icons/css.webp" alt="" className='w-[50px]' />
                                  <img src="/public/Icons/javascript.webp" alt="" className='w-[50px]' />
                                  <img src="/public/Icons/sass.svg" alt="" className='w-[50px]' />
                                  <img src="/public/Icons/bootstrap.webp" alt="" className='w-[50px]' />
                                  </div>
                                    <div className='mt-8'>
                                      <a href="" className=' border rounded-md px-28 py-2 group transition !text-purple-500 hover:border-purple-500'><span>View Details</span></a>
                                    </div>
                                </div>
                    </ContainProject>
            </div>

            {/* Raff prompt engginer AI */}
            <div className='w-full place-content-center bg-zinc-950 border border-white/[0.2] rounded-md p-8 laptop:mb-12 tablet:mb-12 mb-8'>
                    <ContainerCards>
                    <img
                            style={{
                                transform: "translateZ(50px)",
                                transformStyle: "preserve-3d",
                            }}
                            className=" inset-4 grid place-content-center rounded-xl shadow-lg blur-sm hover:blur-none"
                            src="/public/projects/perintis.jpeg" />
                    </ContainerCards>
                    <ContainProject>
                        <h1 className='laptop:text-2xl text-white pt-5 pb-2 font-sans'>Raffprompt engginer AI</h1>
                              <h1 className='laptop:text-2xl text-white pb-2 font-sans'>Front end Web Developer</h1>
                              <div className='w-full border bottom-1'></div>
                              <div className='pt-4'>
                                  <p className='text-justify font-sans text-gray-300 text-sm z-10'>This project is my first project during my internship at a computer startup. 
                                    I was assigned to improve the sales website of the computer startup. I used native technologies such as HTML, CSS, JavaScript, Sass, and Bootstrap 
                                    for the user interface. 
                                    For the front-end and back-end, I utilized PHP with an MVC structure.</p>
                                  <div className='flex justify-center laptop:justify-normal gap-x-4 pt-4'>
                                  <img src="/public/Icons/html.webp" alt="" className='w-[50px]' />
                                  <img src="/public/Icons/css.webp" alt="" className='w-[50px]' />
                                  <img src="/public/Icons/javascript.webp" alt="" className='w-[50px]' />
                                  <img src="/public/Icons/sass.svg" alt="" className='w-[50px]' />
                                  <img src="/public/Icons/bootstrap.webp" alt="" className='w-[50px]' />
                                  </div>
                                  <div className='flex justify-center laptop:justify-normal mt-4'>
                                      <button className='px-20 py-2 border rounded-md hover:border-purple-500 hover:bg-purple-500 hover:transition-colors hover:duration-75 '>View Detail</button>
                                  </div>
                              </div>
                    </ContainProject>
            </div>

            {/* CBT SMKN 31 Medan */}
            <div className='w-full place-content-center bg-zinc-950 border border-white/[0.2] rounded-md p-8 laptop:mb-12 tablet:mb-12 mb-8'>
                    <ContainerCards>
                    <img
                            style={{
                                transform: "translateZ(50px)",
                                transformStyle: "preserve-3d",
                            }}
                            className=" inset-4 grid place-content-center rounded-xl shadow-lg blur-sm hover:blur-none"
                            src="/public/projects/perintis.jpeg" />
                    </ContainerCards>
                    <ContainProject>
                        <h1 className='laptop:text-2xl text-white pt-5 pb-2 font-sans'>Perintis Computer Karawang</h1>
                              <h1 className='laptop:text-2xl text-white pb-2 font-sans'>Front end Web Developer</h1>
                              <div className='w-full border bottom-1'></div>
                              <div className='pt-4'>
                                  <p className='text-justify font-sans text-gray-300 text-sm z-10'>This project is my first project during my internship at a computer startup. 
                                    I was assigned to improve the sales website of the computer startup. I used native technologies such as HTML, CSS, JavaScript, Sass, and Bootstrap 
                                    for the user interface. 
                                    For the front-end and back-end, I utilized PHP with an MVC structure.</p>
                                  <div className='flex justify-center laptop:justify-normal gap-x-4 pt-4'>
                                  <img src="/public/Icons/html.webp" alt="" className='w-[50px]' />
                                  <img src="/public/Icons/css.webp" alt="" className='w-[50px]' />
                                  <img src="/public/Icons/javascript.webp" alt="" className='w-[50px]' />
                                  <img src="/public/Icons/sass.svg" alt="" className='w-[50px]' />
                                  <img src="/public/Icons/bootstrap.webp" alt="" className='w-[50px]' />
                                  </div>
                                  <div className='flex justify-center laptop:justify-normal mt-4'>
                                      <button className='px-20 py-2 border rounded-md hover:border-purple-500 hover:bg-purple-500 hover:transition-colors hover:duration-75 '>View Detail</button>
                                  </div>
                              </div>
                    </ContainProject>
            </div>
      </div>



</>
    );
}

export default Projects;
