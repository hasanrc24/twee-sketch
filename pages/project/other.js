import React from 'react';
import Head from 'next/head';
import ProjectNav from '../../components/Project/ProjectNav';

const other = () => {
    return (
        <div>
            <Head>
                <title>Twee Sketch - Projects</title>
            </Head>
            <ProjectNav />
            <h1 className='text-white text-center md:text-3xl my-10'>Coming soon...</h1>
        </div>
    );
};

export default other;