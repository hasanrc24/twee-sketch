import Head from 'next/head';
import React from 'react';
import LearnNav from '../../components/Learn/LearnNav';

const academic = () => {
    return (
        <div>
            <Head>
                <title>Twee Sketch - Learn</title>
            </Head>
            <LearnNav />
            <div className="text-white uppercase ml-10 mt-10">
                <p>academic comming soon</p>
                <br />
                <br />
                <br />
                <br />
                <p><a href="https://www.youtube.com/channel/UC9cBQhXZba21ia90qPJ0Yvg" rel='noreferrer' target="_blank">youtube</a><br />
                    <a href="https://www.facebook.com/TweeSketch" rel='noreferrer' target="_blank">facebook </a>
                </p>
            </div>
        </div>
    );
};

export default academic;