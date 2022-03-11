import Image from 'next/image';
import React from 'react';
import Head from 'next/head';
import ProjectNav from '../../components/Project/ProjectNav';
import ex1 from '/public/images/project/exterior/1.jpg';
import ex2 from '/public/images/project/exterior/2.jpg';
import ex3 from '/public/images/project/exterior/3.jpg';
import ex5 from '/public/images/project/exterior/5.jpg';

const project = () => {

    const exteriorData = [
        {
            image: ex1,
            title: 'Nur Residence',
            button: 'view',
            link: '',
            placement: 'ml-auto',
        },
        {
            image: ex2,
            title: 'Musa House',
            button: 'view',
            link: '',
            placement: 'mr-auto',
        },
        {
            image: ex3,
            title: 'Helal House',
            button: 'view',
            link: '',
            placement: 'ml-auto',
        },
        {
            image: ex5,
            title: 'Sadik Residence',
            button: 'view',
            link: '',
            placement: 'mr-auto',
        }
        
    ]
    return (
        <div>
            <Head>
                <title>Twee Sketch - Projects</title>
            </Head>
            <ProjectNav />
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 place-content-center my-7">
                {
                    exteriorData.map((data, index) => {
                        return <div className={`md:${data.placement} text-white `} key={index}>
                            <div className="text-center">
                                <div className="border-2 h-[171px] w-[320px] md:h-[171px] md:w-[350] m-auto overflow-hidden"><Image className='' src={data.image} alt="" height={185} width={350}/></div>
                                <h2 className='text-xl font-semibold'>{data.title}</h2>
                                <button className='bg-[#000]/[25%] px-6 my-2 border border-[#eee8e8] hover:bg-[#000]/[50%]duration-200'>
                                    <a href='https://www.behance.net/tweesketch' rel='noreferrer' target='_blank'>{data.button}</a>
                                </button>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    );
};

export default project;