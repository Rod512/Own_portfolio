import React, { Fragment } from 'react';

const myskills =[
    {id:1, name:'Strategy & Direction', deaspriction: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.', image:'https://github.com/Rod512/Own_portfolio/assets/88203053/8258811d-a06d-4e72-8829-f06060cb1428'},

    {id:2, name:'Team Work', deaspriction: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.', image:'https://github.com/Rod512/Own_portfolio/assets/88203053/066e4f6d-d4e3-413c-8549-2000defd6340'},

    {id:3, name:'Comunication', deaspriction: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.', image:'https://github.com/Rod512/Own_portfolio/assets/88203053/0e927905-7de4-47a7-a793-6d3317093d0b'},

    {id:4, name:'Coding', deaspriction: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.', image:'https://github.com/Rod512/Own_portfolio/assets/88203053/33de3401-e91b-498d-81a6-a444dfafa770'},
]

const Skill = () => {
    return (
        <Fragment>
            <div className='lg:mx-12 mx-4 py-32' id='skill'>
                <div className='text-headigcolor mb-2'>
                 <p className='text-xl font-semibold mb-5'>My Skills</p>
                 <h2 className='md:text-5xl text-4xl font-bold'>My Exprience</h2>
                </div>

                <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 mt-10'>
                    {
                        myskills.map(skill => <div className='bg-shade p-8 rounded-lg cursor-pointer hover:-translate-y-4  transition-all duration-300 skillcard' key={skill.id}>
                            <img src={skill.image} className='w-14 h-14 bg-white rounded-lg shadow-md mb-7 p-3' alt="" />
                            <h1 className='text-2xl font-bold mb-4'>{skill.name}</h1>
                            <p className='text-2xl font-bold mb-4'>{skill.deaspriction}</p>
                            </div>)
                    }
                </div>
            </div>


        </Fragment>
    );
};

export default Skill;