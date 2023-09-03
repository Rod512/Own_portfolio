import React from 'react';
import banner from '../assets/banner.png'
const Home = () => {
    return (
        <div className='mt-20 bg-shade '>
            <div className='lg:px-4 px-4 flex flex-col md:flex-row-reverse items-center justify-between py-24 gap-5' id='home'>

                <div className='md:w-1/2 w-full'>
                    <img src={banner} className='w-full' alt="" />
                </div>

                <div className='md:w-1/2 w-full mt-5 px-10'>
                    <h3 className='text-xl text-headingcolor font-semibold mb-5'>Hey, I'm Rudro Dhar</h3>

                    <h1 className='md:text-6xl text-4xl font-bold text-headingcolor leading-snug md:leading-[76px] mb-5'>I create <span className='text-primary'>frontend website</span> with react js</h1>

                    <p className='text-justify text-body md:text-2xl text-xl leading-9 mb-8'>I enjoy working with people
                    from diverse backgrounds and leveraging their unique perspectives to drive
                    innovation and achieve common goals.</p>
                    <button className='btn'>Get in Touch</button>
                </div>
            </div>
        </div>
    );
};

export default Home;