import React from 'react';
import Head from 'next/head';
import crew1 from '/public/images/crew/Abdullah.jpg';
import crew2 from '/public/images/crew//anik.jpg';
import crew3 from '/public/images/crew/hasan.jpg';
import crew4 from '/public/images/crew/nasir.jpg';
import crew5 from '/public/images/crew/pranto.jpg';
import crew6 from '/public/images/crew/rifat.jpg';
import Image from 'next/image';

const crew = () => {

    const crewData = [
        {
            image: crew4,
            name: 'Nasir Uddin',
            designation: 'Civil Engineer (RUET)',
            position: 'md:ml-auto'
        },
        {
            image: crew6,
            name: 'Abdus Sakur Rifat',
            designation: 'Architectural Designer',
            position: ''
        },
        {
            image: crew1,
            name: 'Abdullah Al Mamun',
            designation: 'Architectural Designer',
            position: 'md:mr-auto'
        },
        {
            image: crew3,
            name: 'Md Hasanuzzaman',
            designation: 'Software Engineer',
            position: 'md:ml-auto'
        },
        {
            image: crew2,
            name: 'Md Habibullah Anik',
            designation: 'Graphics Designer',
            position: ''
        },
        {
            image: crew5,
            name: 'Rifat Hasan Pranto',
            designation: 'Visualizer',
            position: 'md:mr-auto'
        }
    ]
    return (
        <>
            <Head>
                    <title>Twee Sketch - Crew</title>
            </Head>
            <div className='my-8 m-auto grid md:grid-cols-3 sm:grid-cols-2 gap-y-16 place-content-center'>
                {
                    crewData.map((data,index) => {
                        return <div key={index} className={`text-center ${data.position}`}>
                                <div className=" m-auto overflow-hidden">
                                    <Image src={data.image} alt='person'  />
                                </div>
                                <h2 className='text-[#695540] font-semibold'>{data.name}</h2>
                                <span className='text-white text-sm'>{data.designation}</span>
                        </div>
                    })
                }
            </div>
        </>
    );
};

export default crew;