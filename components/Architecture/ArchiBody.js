import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import archiImg1 from '/public/images/archi-images/1.jpg';
import archiImg2 from '/public/images/archi-images/2.jpg';

const ArchiBody = () => {
    return (
        <div className='text-center my-5'>
            <h1 className='text-[#ac6d25] uppercase text-lg'>an architectural firm with you to fullfill your inner dreams</h1>

            <div className="flex flex-col mt-5 text-white">
                <div className="md:flex justify-evenly items-center">
                    <div className="">
                        <h1 className='uppercase  text-xl md:text-2xl font-semibold py-2'>exterior</h1>
                        <p className='text-[#cac9c9]'>Exterior design ervices</p>
                        <button className='text-xl bg-[#63421F] px-6 my-2 border border-[#5c5959] hover:bg-[#7e5830] duration-200'><Link href="/project">works</Link></button>
                    </div>
                    {/* <Image src={archiImg1} alt='' height={216} width={384} /> */}
                    <div className="border-2 h-[171px] w-[320px] md:h-[171px] md:w-[350] overflow-hidden xsm:m-auto"><Image className='' src={archiImg1} alt="" height={185} width={350}/></div>
                </div>
                <div className="mt-5 md:flex justify-evenly items-center">
                    <div className="">
                        <h1 className='uppercase  text-xl md:text-2xl font-semibold py-2'>interior</h1>
                        <p className='text-[#cac9c9]'>Interior design ervices</p>
                        <button className='text-xl bg-[#63421F] px-6 my-2 border border-[#5c5959] hover:bg-[#7e5830] duration-200'><Link href="/project/interior">works</Link></button>
                    </div>
                    {/* <Image src={archiImg2} alt='' height={216} width={384} /> */}
                    <div className="border-2 h-[171px] w-[320px] md:h-[171px] md:w-[350] overflow-hidden xsm:m-auto"><Image className='' src={archiImg2} alt="" height={185} width={350}/></div>
                </div>
            </div>
        </div>
    );
};

export default ArchiBody;