import Image from 'next/image';
import React from 'react';
import miniLogo from '/public/images/mini-logo.png';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <div className='bg-black/[15%] mt-8' id='footer'>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 md:pt-12">
                <div className="text-center m-auto">
                    <Image src={miniLogo} height={73} width={60} alt="mini-logo" />
                    <p className='text-white m-auto mt-3 text-sm w-[65%] md:w-[60%]'>Twee sketch works like a linker between your dreams and reality. Our success lies with your happiness with our service.
                        Never get worried with your dreams, we are with you, always.
                    </p>
                </div>
                <div className="text-white text-center md:text-left">
                    <h1 className='text-[#C3996B] text-2xl md:text-3xl'>Contact us</h1>
                    <p className='font-semibold my-2 md:my-4 md:text-lg'>tweesketch2@gmail.com <br /> +01785411251</p>
                    <span className=' font-semibold md:text-lg'>terokhadia, rajpara, rajshahi. <br /> Holding 63.east side of stadium.</span>
                </div>
            </div>
            <div className="flex justify-center space-x-4 md:space-x-6 py-10 md:py-10 md:pt-24">
                <a href="https://www.facebook.com/TweeSketch" rel='noreferrer' target="_blank"><FaFacebookF className='text-[#C3996B] text-3xl md:text-4xl' /></a>
                <a href="https://instagram.com/tweesketch2" rel='noreferrer' target="_blank"><FaInstagram className='text-[#C3996B] text-3xl md:text-4xl' /></a>
                <a href="https://www.linkedin.com/in/tweesketch" rel='noreferrer' target="_blank"><FaLinkedinIn className='text-[#C3996B] text-3xl md:text-4xl' /></a>
                <a href="https://www.youtube.com/channel/UC9cBQhXZba21ia90qPJ0Yvg" rel='noreferrer' target="_blank"><FaYoutube className='text-[#C3996B] text-3xl md:text-4xl' /></a>
            </div>
        </div>
    );
};

export default Footer;