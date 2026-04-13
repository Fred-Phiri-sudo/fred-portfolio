/**
 * @copyright 2026 codewithfred
 * @license Apache-2.0
 */

/**
 * Node Modules
 */
//import { useState } from 'react';


export const Profile = () => {
    //const [active, setActive] = useState('#hero');

    return (
    <aside className='max-w-3xl border m-6 border-neutral-600 
    bg-neutral-900 text-white p-6 rounded-lg lg:sticky lg:left-0 lg:top-6 lg:w-96 
    '>
        <div className='flex flex-col gap-4'>
            <div className='flex items-center justify-between gap-x-10'>
                <h1 className='text-3xl font-bold'>Fred</h1>
                <p className='text-sm '>Network Administrator & Web Developer</p>
            </div>
                <img 
                src='avatar2.jpg' 
                alt="Profile pic"
                className='lg:w-96 rounded-2xl object-cover' 
                />

                <div className='mt-6'>
                    <p className='text-sm text-neutral-300'>Specilization: </p>
                    <p className='text-lg capitalize'> Desktop & Network Support</p>
                    <p className='text-lg capitalize'> Server Administration</p>

                    <p className='text-sm text-neutral-300 mt-5'>Contact: </p>
                    <p className='text-lg '>-</p>
                </div>
            
        </div>
    </aside> 
    );
};