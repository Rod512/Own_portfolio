import React, { Fragment } from 'react';
import banner2 from '../assets/banner2.png'

const About = () => {
    return (
       <Fragment>
        <div className='lg:mx-12 mx-4'>
            <div className='flex flex-col sm:flex-row md:gap-24 gap-12 items-center justify-between py-10'>
                <div className='sm:w-1/2'>
                    <img src={banner2} alt="" className='w-full sm:w-11/12'/>
                </div>


                <div className='sm:w-1/2'>
                    <p className='text-xl font-semibold mb-5'>About</p>
                    <h2 className='md:text-5xl text-4xl font-bold'>About Me</h2>
                    <p className='mt-8 md:pr-8 mb-8 text-justify'>With a Diploma degree in Computer Engineering and 4 years of Perseverance and I am successfully completed my internship under OS IT Solutions LTD , I possess a deep understanding of front end development methodologies and programming languages.In addition to technical skills,I am a strong communicator and collaborator who thrives in fast-paced environments. I enjoy working with people from diverse backgrounds and leveraging their unique perspectives to drive innovation and achieve common goals. Overall, I am committed to staying up-to-date with the latest advancements in my field and applying that knowledge to deliver high-quality solutions that meet and exceed customer expectations.</p>
                    <button className='btn'>Contact me</button>
                </div>
            </div>
        </div>
       </Fragment>
    );
};

export default About;