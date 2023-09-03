import React, { Fragment, useEffect, useState } from 'react';
import logo from '../assets/logo.png'
import {HiMenu} from 'react-icons/hi'
import { Link } from 'react-scroll';

const Navbar = () => {
    const [isOpen,setIsOpen] = useState(false)
    const [isSticky,setisSticky] = useState(false)

    const toggleMenu = ()=>{
        setIsOpen(!isOpen)
    }

    useEffect(()=>{
        const handlesrcoll = () => {
            if(window.scroll > 0){
                setisSticky(true)
            }
        }
        window.addEventListener('scroll', handlesrcoll)
    },[])

    return (
        <Fragment>
            <header className='w-full fixed top-0 left-0 right-0'>
                <nav className={`py-4 md:px-12 px-4 bg-white ${isSticky ? 'sticky top-0 right-0 left-0 bg-white':''}`}>
                    <div className='flex item-center justify-between'>
                        {/* logo */}
                        <div className='cursor-pointer'>
                            <img className='h-12' src={logo} alt="" />
                        </div>
                        {/* menu item */}
                        <div className='lg:flex items-center gap-3 hidden text-body text-lg'>
                            <Link to='home' spy={true} activeClass='active' smooth={true} offset={-100} className='block py-4 px-4 cursor-pointer text-primary hover:text-gray-400'>Home</Link>

                            <Link to='skill' spy={true} activeClass='active' smooth={true} offset={-100} className='block py-4 px-4 cursor-pointer hover:text-gray-400'>Skills</Link>

                            <Link to='about' spy={true} activeClass='active' smooth={true} offset={-100} className='block py-4 px-4 cursor-pointer hover:text-gray-400'>About-me</Link>

                            <Link to='project' spy={true} activeClass='active' smooth={true} offset={-100} className='block py-4 px-4 cursor-pointer hover:text-gray-400'>Projects</Link>
                        </div>
                        {/* contact me button */}
                        <div className='lg:block hidden'>
                            <button className='btn'><Link to='contact' spy={true} activeClass='active' smooth={true} offset={-100}>Contact</Link></button>
                        </div>
                        {/* mobile menu btn for mobile */}
                       <button onClick={toggleMenu} className='lg:hidden text-body text-3xl'>
                            <HiMenu/>
                       </button>
                    </div>

                    {
                        isOpen && <div className='mt-4 bg-body rounded-lg text-white p-4'>
                            <a href="/" className='block py-4 px-4 cursor-pointer text-primary hover:text-gray-400'>Home</a>

                            <a href="/" className='block py-4 px-4 cursor-pointer hover:text-gray-400'>Skills</a>

                            <a href="/" className='block py-4 px-4 cursor-pointer hover:text-gray-400'>About-me</a>

                            <a href="/" className='block py-4 px-4 cursor-pointer hover:text-gray-400'>Portfolio</a>

                            <a href="/" className='block py-4 px-4 cursor-pointer hover:text-gray-400'>Testimonials</a>
                        </div>
                    }
                </nav>
            </header>
        </Fragment>
    );
};

export default Navbar;