import React from 'react';

const ArchiService = () => {
    return (
        <div className='bg-[#C3986B] py-4 grid md:grid-cols-3 gap-6 uppercase'>
            <div className="md:col-span-2">
                <h1 className='text-center md:text-left px-5 text-white text-2xl font-semibold'>service</h1>
                <div className="text-sm md:text-base font-semibold p-5">
                    <p>- plan (residence, restaurants, cafe, shop etc.) <br />
                        - single function design <br />
                        - interior design <br />
                        - exterior design <br />
                        - structure of architectural finctions or designs <br />
                        - 3d visualization and rendering <br />
                        - full function renovation design (residence, shop, cafe, restaurant etc.) <br />
                        - site analysis <br />
                        - special product design
                    </p>
                    <br />
                    <p>
                        -software works: <br />
                        <span className='px-4 box-decoration-clone'>
                            autocad, <br />
                            sketchup, <br />
                            3ds max, <br />
                            revit, <br />
                            rhino (extra feature: curve modelling) <br />
                            v-ray, corona, lumion
                        </span>
                    </p>
                </div>
            </div>
            <div className="">
                <h1 className='text-center md:text-left px-5 text-white text-2xl font-semibold'>speciality</h1>
                <div className="p-5 text-xs md:text-sm">
                    <p className='pb-4'>srchitecture in a small space or place interior with raw materials as well as low cost interior and exterior with client&apos
                        psychological satisfaction provides best designs within client&apos ability
                    </p>
                    <p>
                        we assure you that we will be with you to the last moment untill your dreams come true that&apos our movtive.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ArchiService;