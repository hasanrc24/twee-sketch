import Link from 'next/link';
import React from 'react';

const Body = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 mt-5 md:mt-16 text-white'>
            <div className='text-center'>
                <h1 className='text-white text-xl md:text-2xl'>ARCHITECTURE</h1>
                <button className='text-xl bg-[#000]/[25%] px-5 my-2 border border-[#eee8e8] hover:bg-[#000]/[50%] duration-200'><Link href='/architecture'>service</Link></button>
                <p className=' md:w-[55%] m-auto'>architecture is not any subject to read. it&apos a lifestyle to lead</p>
            </div>
            <div>
                <p className='md:w-[70%]'>Every society has an infrastructure by which the society leads to the development improving it.
                    In every parts of our lives architecture remains to build our tiny dreams. You see a dream and we architects work from visualization
                    to make your dream come true. It can be said that architecture is such art wich leads our lives in a beautiful way.
                </p>
            </div>
            <div className='text-center'>
                <h1 className='text-white text-xl md:text-2xl'>BLOG</h1>
                <button className='text-xl bg-[#000]/[25%] px-5 my-2 border border-[#eee8e8] hover:bg-[#000]/[50%] duration-200'><Link href='/learn'>recent</Link></button>
                <p className='md:w-[55%] m-auto'>The place to share our ideas. Through these blogs our interaction will be more useful</p>
            </div>
            <div>
                <p className='md:w-[70%]'>We human learn from every aspects of their lives. Through several mediums we share those to one another.
                    Through our blogs we will share our learnings, ideas, relatable things to gather some useful knowledges.
                    So that our ideas can be widen in a large quantity. Our sharing ideas will work as mass communicative knowledge.
                </p>
            </div>
            <div className='text-center'>
                <h1 className='text-white text-xl md:text-2xl'>COURSE</h1>
                <button className='text-xl bg-[#000]/[25%] px-5 my-2 border border-[#eee8e8] hover:bg-[#000]/[50%] duration-200'><Link href='/learn/course'>recent</Link></button>
                <p className='md:w-[55%] m-auto'>The way to enlighten you with our knowledge. Our courses are for those who are enthausiastic to get prepared in our fields.</p>
            </div>
            <div>
                <p className='md:w-[70%]'>In modern architectural relatable practice we need several types of knowledges if we want to get involved within such fields.
                    So for those who are keen to gather modern architectural knowledges and practical learnings we have special course for up to date
                    universal practical knowledges for professional fields. Besides we want to make you involved with such relatable knowledge
                    through these courses which can be supportive for those wishes for making any start-up.
                </p>
            </div>
        </div>
    );
};

export default Body;