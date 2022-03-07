import React from 'react';
import brandLogo1 from '/public/images/archi-images/brand-logos/1.png';
import brandLogo2 from '/public/images/archi-images/brand-logos/2.png';
import brandLogo3 from '/public/images/archi-images/brand-logos/3.png';
import brandLogo4 from '/public/images/archi-images/brand-logos/4.png';
import brandLogo5 from '/public/images/archi-images/brand-logos/5.png';
import brandLogo6 from '/public/images/archi-images/brand-logos/6.png';
import brandLogo7 from '/public/images/archi-images/brand-logos/7.png';
import brandLogo8 from '/public/images/archi-images/brand-logos/8.png';
import brandLogo9 from '/public/images/archi-images/brand-logos/9.png';
import brandLogo10 from '/public/images/archi-images/brand-logos/10.png';
import brandLogo11 from '/public/images/archi-images/brand-logos/11.png';
import brandLogo12 from '/public/images/archi-images/brand-logos/12.png';
import brandLogo13 from '/public/images/archi-images/brand-logos/13.png';
import brandLogo14 from '/public/images/archi-images/brand-logos/14.png';
import brandLogo15 from '/public/images/archi-images/brand-logos/15.png';
import brandLogo16 from '/public/images/archi-images/brand-logos/16.png';
import Image from 'next/image';

const ArchiBottom = () => {
    return (
        <div className='text-center m-auto'>
            <h1 className='text-white text-2xl'>Software use</h1>
            <hr className='w-[80%] m-auto my-5' />
            <div className="flex flex-col space-y-3">
                <div className="flex justify-center gap-2">
                    <Image src={brandLogo1} alt="" height={40} width={40} />
                    <Image src={brandLogo2} alt="" height={40} width={40} />
                    <Image src={brandLogo3} alt="" height={40} width={40} />
                    <Image src={brandLogo4} alt="" height={40} width={40} />
                    <Image src={brandLogo5} alt="" height={40} width={40} />
                    <Image src={brandLogo6} alt="" height={40} width={40} />
                    <Image src={brandLogo7} alt="" height={40} width={40} />
                    <Image src={brandLogo8} alt="" height={40} width={40} />
                </div>
                <div className="flex justify-center gap-2">
                    <Image src={brandLogo9} alt="" height={40} width={40} />
                    <Image src={brandLogo10} alt="" height={40} width={40} />
                    <Image src={brandLogo11} alt="" height={40} width={40} />
                    <Image src={brandLogo12} alt="" height={40} width={40} />
                    <Image src={brandLogo13} alt="" height={40} width={40} />
                    <Image src={brandLogo14} alt="" height={40} width={40} />
                    <Image src={brandLogo15} alt="" height={40} width={40} />
                    <Image src={brandLogo16} alt="" height={40} width={40} />
                </div>
            </div>
        </div>
    );
};

export default ArchiBottom;