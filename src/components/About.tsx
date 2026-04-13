/**
 * @copyright 2026 codewithfred
 * @license Apache-2.0
 */

/**
 * Node Modules
 */

import { SectionHeader } from './SectionHeader';

export const About = () => {
    return (
        <section className='mt-30 scroll-mt-10' id='about'>
            <SectionHeader subtitle='About Me' title='Summary'/>

            <div>
                <p className='mt-4 text-neutral-300 max-w-4xl'>
                    I am a second-year doing my associates in Network Administration at Lake Land  college.
                    This program has taught me valuable skills that translate well to the workforce. 
                    I plan to transfer to a 4 year degree to get a bachelor's in Computer Science or Info Tech.
                    While I have been working towards becoming a Network Engineer, I also enjoy coding, as such, I might transition 
                    to backend and cloud development, which combine both areas. 
                </p>
                <p className='mt-4 text-neutral-300 max-w-4xl'>
                    I have an interest in self-hosting and creating a homelab using open-source software to learn and improve new skills. 
                    Aside from my professional background, I enjoy reading and collecting japanese manga and video game artwork. 
                    I like old-school film photography as well.
                </p>
                <p className='mt-4 text-neutral-300 max-w-4xl'>
                    Thanks for viewing my limited portfolio project. I hope to share more information about me and future projects.
                </p>
            </div>
        </section>

        
        
    );
};