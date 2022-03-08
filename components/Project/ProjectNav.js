import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const ProjectNav = () => {
    const router = useRouter();
    return (
        <div className='ml-10 mt-10 font-semibold text-[#A28259]'>
            <ul className='flex gap-4'>
                <li className={`hover:border-b-2 hover:border-b-[#A28259] ${router.pathname == "/project" && " border-b-2 border-b-[#A28259]"}`}>
                    <Link href="/project">Exterior</Link>
                </li>
                <li className={`hover:border-b-2 hover:border-b-[#A28259] ${router.pathname == "/project/interior" && "border-b-2 border-b-[#A28259]"}`}>
                    <Link href="/project/interior">Interior</Link>
                </li>
                <li className={`hover:border-b-2 hover:border-b-[#A28259] ${router.pathname == "/project/other" && "border-b-2 border-b-[#A28259]"}`}>
                    <Link href="/project/other">Other</Link>
                </li>
            </ul>
        </div>
    );
};

export default ProjectNav;