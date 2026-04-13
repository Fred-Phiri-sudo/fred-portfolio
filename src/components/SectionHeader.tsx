/**
 * @copyright 2026 codewithfred
 * @license Apache-2.0
 */

/**
 * Assets
 */
import { SparkleIcon } from 'lucide-react';

export const SectionHeader = ({ title, subtitle } : {title:string; subtitle:string}) => {
    return (
        <>
            <p className='flex items-center justify-center py-1 gap-2 
            border border-neutral-600 rounded-sm w-32'>
                <SparkleIcon size={15}/> {subtitle}
            </p>  

            <h2 className='text-4xl font-bold capitalize mt-2 md:max-w-3xl'>
                {title}
            </h2>
        </>
    );
};