import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const ProjectNav = () => {
    const router = useRouter();
    return (
        <div className='ml-10 mt-10 font-semibold text-[#A28259]'>
            <ul className='flex gap-4'>
                <li className={`hover:text-[#F6931B] duration-100 ${router.pathname == "/project" && "text-[#F6931B]"}`}>
                    <Link href="/project">Exterior</Link>
                </li>
                <li className={`hover:text-[#F6931B] duration-100 ${router.pathname == "/project/interior" && "text-[#F6931B]"}`}>
                    <Link href="/project/interior">Interior</Link>
                </li>
                <li className={`hover:text-[#F6931B] duration-100 ${router.pathname == "/project/other" && "text-[#F6931B]"}`}>
                    <Link href="/project/other">Other</Link>
                </li>
            </ul>
        </div>
    );
};

export default ProjectNav;