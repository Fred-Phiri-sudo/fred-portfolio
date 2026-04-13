/**
 * @copyright 2026 codewithfred
 * @license Apache-2.0
 */


/**
 * Components
 */

import { SectionHeader } from './SectionHeader';

/**
 * Components
 */
import { education, experience, tools} from '@/constants';
import { ExpCard } from '@/components/ExpCard';
import { ToolsCard } from '@/components/ToolsCard';

export const Resume = () => {
    return (
        <section className='mt-70 scroll-mt-10  ' 
        id='resume'>
            <SectionHeader subtitle='Resume' title='Education and practical experince'/>

            <div className='grid gap-x-10 
                my-16 md:grid-cols-2'>
                <div className='mb-16 md:mb-0'>
                    <h2 className='text-3xl font-semibold mb-8'>
                        Education
                    </h2>

                    <div className='space-y-8 border-l border-neutral-700 pl-6 '>
                        {education.map((item, i) => (
                            <ExpCard key={i} item={item}/> 
                        ))}
                    </div>
                </div>


                <div className='mb-16 md:mb-0'>
                    <h2 className='text-3xl font-semibold mb-8'>
                        Work Experience
                    </h2>

                    <div className='space-y-8 border-l border-neutral-700 pl-6'>
                        {experience.map((item, i) => (
                            <ExpCard key={i} item={item}/> 
                        ))}
                    </div>
                </div>


                
            </div>

            <div className='mt-30 mb-16 md:mb-0'>
                    <h2 className='text-3xl font-semibold mb-8'>
                        Tools I Use 
                    </h2>

                    <div className='grid grid-cols-2 gap-5 
                    space-y-8 border-l border-neutral-700 
                    pl-6 pr-20 sm:grid-cols-2 md:grid-cols-3'>
                       {tools.map((tool, i) => 
                        <ToolsCard key={i} tool={tool} /> 
                    )}
                    </div>
                </div>
        </section>

    );
};


