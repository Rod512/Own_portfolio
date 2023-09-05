import React, { Fragment } from 'react';
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
    return (
       <Fragment>
       <div className="bg-bgShade py-28 md:px-12 px-4">
       <div className='flex flex-col md:flex-row md:items-center justify-between gap-8 mb-20'>
           <a href="/"><img src='https://github-production-user-asset-6210df.s3.amazonaws.com/88203053/265802363-1445eff9-0486-49d7-a0ea-177aa00d62f9.png' alt="" /></a>
           <div className='flex flex-col md:flex-row md:items-center gap-4 flex-wrap'>
           <a
         href="#"
         className="block text-primary hover:text-gray-400 py-2 px-4"
       >
         Home
       </a>
       <a href="#" className="block hover:text-gray-400 py-2 px-4">
         Portfolio
       </a>
       <a href="#" className="block  hover:text-gray-400 py-2 px-4">
         
         About me
       </a>
       <a href="#" className="block  hover:text-gray-400 py-2 px-4">
         Testimonials
       </a>
           </div>
           <div className='flex items-center gap-4 ml-4'>
                <a href="https://www.facebook.com/profile.php?id=100009418626918"><FaFacebookF className='cursor-pointer hover:-translate-y-3 transition-all duration-300 text-xl hover:text-primary'/></a>
                <a href="https://www.linkedin.com/in/rudro-dhar-457b6b236/"> <FaInstagram className='cursor-pointer hover:-translate-y-3 transition-all duration-300 text-xl hover:text-primary'/></a>
                <a href="https://www.instagram.com/rodd.27701/"><FaTwitter className='cursor-pointer hover:-translate-y-3 transition-all duration-300 text-xl hover:text-primary'/></a>
           </div>
       </div>
       <hr />
            <div className='mt-10 flex flex-col md:flex-row justify-between gap-8'>
                <p>Made by Rudro Dhar</p>
                <div className='space-x-6'>
                    <a href="/" className='hover:text-slate-400'>Privacy Policy</a>
                    <a href="/" className='hover:text-slate-400'>Terms of Service</a>
                    <a href="/" className='hover:text-slate-400'>Cookies Settings</a>
                </div>
            </div>
   </div>
       </Fragment>
    );
};

export default Footer;