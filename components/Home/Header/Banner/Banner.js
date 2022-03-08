import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Slider from 'react-slick';
import banner1 from '/public/images/2.jpg'
import banner2 from '/public/images/4.jpg'
import banner3 from '/public/images/6.jpg'

const Banner = () => {

    const bannerData = [
        {
            title: "Architecture",
            button: "service",
            desc: "explore our world of design",
            image: banner1,
            link: '/architecture'
        },
        {
            title: "Blog",
            button: "recent",
            desc: "place to connect our creativity",
            image: banner2,
            link: '/learn'
        },
        {
            title: "Course",
            button: "click",
            desc: "develop your skills in creative fields",
            image: banner3,
            link: '/learn/course'
        }
    ]

    const settings = {
        dots: true,
        arrows:false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

      
    return (
        
        <>
            <Slider {...settings}>
                {
                    bannerData.map((data, index) => {
                        return <div key={index}>
                            <div className="flex justify-center" style={{background: "linear-gradient(0deg, rgba(35, 31, 32, 0.5), rgba(35, 31, 32, 0.5))"}}>

                                <Image className='object-contain mix-blend-overlay' src={data.image} quality={50} alt="" />
                                <div className="absolute top-0 text-center w-[9%]">
                                    <h1 className="text-white text-4xl mt-[8%] mb-[3%] md:text-5xl md:mt-[11%]">{data.title}</h1>
                                    <hr className='mb-[7%] border-t-2' />
                                    <span className="duration-200 text-white cursor-pointer border px-4 py-1 bg-gradient-to-r from-gray-600 to-gray-600 bg-blend-overlay md:text-xl md:px-12 md:py-2 hover:bg-gray-500/40">
                                        <Link href={data.link}>{data.button}</Link></span>
                                    <p className="text-white mt-[20%] sm:mt-[30%] md:mt-[35%] md:text-2xl text-sm sm:text-lg ">{data.desc}</p>
                                </div>
                            </div>
                        </div>
                    })
                }
            </Slider>
        </>
    );
};

export default Banner;
