import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react';
import Arrow from '../assets/arrow.png'
import { FaGithub } from "react-icons/fa";

const Portfolio = () => {
    const [porjects,setProjects] = useState([])
    useEffect(()=>{
        const fetchproject = async()=>{
            const res = await axios.get('project.json')
            setProjects(res.data)
        }
        fetchproject()
    },[])
    return (
        <Fragment>
            <div className='lg:mx-12 mx-4 my-32' id='project'>
               <div className='flex flex-col md:flex-row mb-20 gap-8 justify-between items-center'>
                    <div className='text-headigcolor'>
                        <p className='text-xl font-semibold mb-5'>Recent Projects</p>
                        <h2 className='md:text-5xl text-4xl font-bold'>My projects</h2>
                    </div>
                    <div>
                        <button className='btn'><a href="https://github.com/Rod512">visit my github <FaGithub className='inline-block'/></a> </button>
                    </div>
               </div>
                
                <div className='grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-8 mt-8'>
                    {
                        porjects.map(project=> <div key={project.id} className='shadow-xl rounded-lg'>
                                <img src={project.image} alt="" className='rounded-lg hover:scale-90 transition-all duration-300'/>
                                <div className='p-8 '>
                                    <h3 className='text-2xl font-semibold mb-2 text-headingcolor'>{project.name}</h3>
                                    <p className='text-body mb-4'>{project.description}</p>
                                    <a href={project.link} className='hover:text-primary'>View In Github <img src={Arrow} alt="" className='w-3 inline-block ml-3' /></a>
                                </div>
                            </div>)
                    }
                </div>
            </div>
        </Fragment>
    );
};

export default Portfolio;