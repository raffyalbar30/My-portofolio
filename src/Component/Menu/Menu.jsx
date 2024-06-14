import React from 'react';
import Background from '../Fragments/Background';
import Profil from '../UI/profil';







const Menu = () => {
    return (
        <> 
           
        
           <div className='w-full backdrop-blur-sm laptop:mt-24 mt-24 h-8 laptop:h-36'></div>
            <div className='laptop:mt-12 pb-8 '>
                <Profil></Profil>
            </div>
            <div className='mt-12'>
               <Background></Background>
            </div>
               

            
        </> 
    );
}
 
export default Menu;
