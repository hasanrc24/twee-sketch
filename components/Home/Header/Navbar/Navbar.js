import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import logo from '../../../../public/images/logo1.png';
import { useRouter } from 'next/router';
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

const Navbar = () => {

    const [open, setOpen] = useState(false);
    const router = useRouter();

    return (
        <>
            <nav>
                <div className="text-white py-4 md:flex md:justify-between relative">
                    <div className="flex justify-between items-center">
                        <Link href='/'>
                            <a>
                                <Image src={logo} alt='TweeSketch' height={60} width={230}/>
                            </a>
                        </Link>
                        <div onClick={()=>setOpen(!open)} className="text-white cursor-pointer block md:hidden z-10">
                            {open ? <IoClose className='h-8 w-8 ' /> : <FaBars className='h-6 w-6' />}
                            
                        </div>
                    </div>
                    
                    <div className={`relative flex justify-center md:items-center duration-300 text-center mt-5 ${open ? 'mt-0 opacity-100' : 'mt-[-150px] opacity-0 -z-10'} md:mt-0 md:opacity-100 md:z-0`}>
                        <ul className='space-y-2 font-semibold md:flex md:space-y-0 md:space-x-8' onClick={()=>setOpen(!open)}>
                            <li className={`hover:text-[#A28259] duration-100 ${router.pathname == "/" ? "text-[#A28259]" : ""}`}>
                                <Link href='/'>
                                    Home
                                </Link>
                            </li>
                            <li className={`hover:text-[#A28259] duration-100 ${router.pathname == "/architecture" ? "text-[#A28259]" : ""}`}>
                                <Link href='/architecture'>
                                    Architecture
                                </Link>
                            </li>
                            <li className={`hover:text-[#A28259] duration-100 ${(router.pathname === "/project" || router.pathname === "/project/interior" || router.pathname === "/project/other") && "text-[#A28259]"}`}>
                                <Link href='/project'>
                                    Project
                                </Link>
                            </li>
                            <li className={`hover:text-[#A28259] duration-100 ${(router.pathname === "/learn" || router.pathname === "/learn/academic" || router.pathname === "/learn/course") && "text-[#A28259]"}`}>
                                <Link href='/learn'>
                                    Learn
                                </Link>
                            </li>
                            <li className={`hover:text-[#A28259] duration-100 ${router.pathname == "/crew" ? "text-[#A28259]" : ""}`}>
                                <Link href='/crew'>
                                    Crew
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div onClick={()=>setOpen(!open)} className={`text-center my-4  font-semibold text-[#C3996B] cursor-pointer ${!open && 'hidden'} md:block`}>
                        <a href='#footer'>Contact us</a>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;