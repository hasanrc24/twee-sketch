import Head from 'next/head';
import React from 'react';
import ArchiBody from '../components/Architecture/ArchiBody';
import ArchiBottom from '../components/Architecture/ArchiBottom';
import ArchiService from '../components/Architecture/ArchiService';

const architecture = () => {
    return (
        <div>
            <Head>
                <title>Twee Sketch - Architecture</title>
            </Head>
            <ArchiService />
            <ArchiBody />
            <ArchiBottom />
        </div>
    );
};

export default architecture;