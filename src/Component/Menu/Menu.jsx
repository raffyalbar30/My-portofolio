import React from 'react';
import Skills from '../UI/Skills';
import Profil from '../UI/profil';
import Projects from '../UI/Projects';



const Menu = () => {
    return (
        <> 
           
          {/* <div className='absolute -z-10'> */}
           <div className='mt-32 laptop:mt-56'>
               <Profil></Profil>
               <Skills></Skills>
               <Projects></Projects>
           </div>
          {/* </div> */}
            
        </> 
    );
}
 
export default Menu;
