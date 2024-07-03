import React from 'react';
import Navbar from '../Navbar/Navbar';

const ViewDetail = ({children}) => {
    return (
        <>
        <Navbar></Navbar>
        <div className='w-full backdrop-blur-lg bg-slate-100 opacity-30 h-24'> </div>
        <div className=' w-full absolute bg-zinc-800 rounded-t-lg z-10'>
            {children}
        </div>
        </>
    );
}

export default ViewDetail;
