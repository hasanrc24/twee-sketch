import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/router';

const LearnNav = () => {
    const router = useRouter();
    return (
        <div className='ml-10 mt-10 font-semibold text-[#A28259]'>
            <ul className='flex gap-4'>
                <li className={`hover:border-b-2 hover:border-b-[#A28259] ${router.pathname == "/learn" ? "border-b-2 border-b-[#A28259]" : ""}`}>
                    <Link href="/learn">Blog</Link>
                </li>
                <li className={`hover:border-b-2 hover:border-b-[#A28259] ${router.pathname == "/learn/academic" ? "border-b-2 border-b-[#A28259]" : ""}`}>
                    <Link href="/learn/academic">Academic</Link>
                </li>
                <li className={`hover:border-b-2 hover:border-b-[#A28259] ${router.pathname == "/learn/course" ? "border-b-2 border-b-[#A28259]" : ""}`}>
                    <Link href="/learn/course">Course</Link>
                </li>
            </ul>
        </div>
    );
};

export default LearnNav;