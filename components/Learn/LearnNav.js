import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/router';

const LearnNav = () => {
    const router = useRouter();
    return (
        <div className='ml-10 mt-10 font-semibold text-[#A28259]'>
            <ul className='flex gap-4'>
                <li className={`hover:text-[#F6931B] duration-100 ${router.pathname == "/learn" ? "text-[#F6931B]" : ""}`}>
                    <Link href="/learn">Blog</Link>
                </li>
                <li className={`hover:text-[#F6931B] duration-100 ${router.pathname == "/learn/academic" ? "text-[#F6931B]" : ""}`}>
                    <Link href="/learn/academic">Academic</Link>
                </li>
                <li className={`hover:text-[#F6931B] duration-100 ${router.pathname == "/learn/course" ? "text-[#F6931B]" : ""}`}>
                    <Link href="/learn/course">Course</Link>
                </li>
            </ul>
        </div>
    );
};

export default LearnNav;