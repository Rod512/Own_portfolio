import React, { Fragment } from 'react';

const myskills =[
    {id:1, name:'Strategy & Direction', deaspriction: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.', image:'src/assets/exlogo1.png'},

    {id:2, name:'Team Work', deaspriction: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.', image:'src/assets/exlogo2.png'},

    {id:3, name:'Comunication', deaspriction: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.', image:'src/assets/exlogo3.png'},

    {id:4, name:'Coding', deaspriction: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.', image:'src/assets/exlogo4.png'},
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