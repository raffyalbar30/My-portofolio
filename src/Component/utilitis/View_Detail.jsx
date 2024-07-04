import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../UI/Footer';


const ViewDetail = ({children}) => {
    return (
        <>
        <Navbar></Navbar>
        <div className='w-full backdrop-blur-lg bg-slate-100 opacity-30 h-24'> </div>
        <div className='w-screen absolute bg-zinc-800 rounded-t-lg '>
            {children}
        </div>
        <Footer/>
        </>
    );
}

export default ViewDetail;
