import Image from 'next/image';
import React from 'react';
import Head from 'next/head';
import ProjectNav from '../../components/Project/ProjectNav';
import in1 from '/public/images/project/interior/1.jpg';
import in2 from '/public/images/project/interior/2.jpg';
import in5 from '/public/images/project/interior/5.jpg';
import in6 from '/public/images/project/interior/6.jpg';
import in7 from '/public/images/project/interior/7.jpg';
import in8 from '/public/images/project/interior/8.jpg';

const interior = () => {

    const interiorData = [
        {
            image: in1,
            title: 'Bathroom',
            button: 'view',
            link: '',
            placement: 'md:ml-auto',
        },
        {
            image: in2,
            title: 'Bedroom',
            button: 'view',
            link: '',
            placement: 'md:mr-auto',
        },
        {
            image: in5,
            title: 'Living Room',
            button: 'view',
            link: '',
            placement: 'md:ml-auto',
        },
        {
            image: in6,
            title: 'Meeting Room',
            button: 'view',
            link: '',
            placement: 'md:mr-auto',
        },
        {
            image: in7,
            title: 'Single Room',
            button: 'view',
            link: '',
            placement: 'md:ml-auto',
        },
        {
            image: in8,
            title: 'Store',
            button: 'view',
            link: '',
            placement: 'md:mr-auto',
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
                    interiorData.map((data, index) => {
                        return <div className={`${data.placement} text-white `} key={index}>
                            <div className="text-center">
                                {/* <Image src={data.image} alt="" height={185} width={350} /> */}
                                <div className="border-2 h-[171px] w-[320px] md:h-[171px] md:w-[350] m-auto overflow-hidden"><Image className='' src={data.image} alt="" height={185} width={350}/></div>
                                <h2 className='text-2xl font-semibold'>{data.title}</h2>
                                <button className='uppercase bg-[#000]/[25%] px-6 my-2 border border-[#eee8e8] hover:bg-[#000]/[50%] duration-200'><a href='https://www.behance.net/tweesketch' rel='noreferrer' target='_blank'>{data.button}</a></button>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    );
};

export default interior;