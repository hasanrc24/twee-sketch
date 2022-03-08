import Head from 'next/head';
import React from 'react';
import LearnNav from '../../components/Learn/LearnNav';

const Learn = () => {
    return (
        <div>
            <Head>
                <title>Twee Sketch - Learn</title>
            </Head>
            <LearnNav />
            <div className="text-white ml-10 mt-10">
                <p>blog comming soon</p>
                <br />
                <br />
                <br />
                <br />
                <p><a href="https://www.youtube.com/channel/UC9cBQhXZba21ia90qPJ0Yvg" className='hover:font-bold' rel='noreferrer' target="_blank">Youtube</a><br />
                    <a href="https://www.facebook.com/TweeSketch" className='hover:font-bold' rel='noreferrer' target="_blank">Facebook </a>
                </p>
            </div>
        </div>
    );
};

export default Learn;