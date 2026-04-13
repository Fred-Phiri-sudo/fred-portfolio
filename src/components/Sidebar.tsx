/**
 * @copyright 2026 codewithfred
 * @license Apache-2.0
 */

/**
 * Node Modules
 */
import { useState } from 'react';

/**
 * Custom Modules
 */
import { cn } from '@/lib/utils';


/**
 * Components
 */
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';

/**
 * Assets
 */
import { MenuIcon } from 'lucide-react';

/**
 * Constants
 */
import { navLinks } from '@/constants';


export const Sidebar = () => {
    const [active, setActive] = useState('#hero');
    return (
        <>
            <Sheet>
                <SheetTrigger>
                    <Button 
                    variant='ghost'
                    size='icon'
                    className='m-4 fixed right-4 top-4 border-2 
                    hover-border-primary bg-neutral-800 py-5 px-5 
                    rounded-full hover:text-primary cursor-pointer'
                    >
                        <MenuIcon size={30}/>
                    </Button>
                </SheetTrigger>

                <SheetContent 
                side='right' 
                className='w-84 bg-neutral-900 
                text-white py-6 pl-10
                
                '>
                    <SheetTitle className='text-2xl font-bold mb-4'>Menu</SheetTitle>
                    <nav className='flex flex-col gap-4'>
                        {navLinks.map((link) => {
                            const Icon = link.icon;
                            
                            return (
                                <a 
                                href={link.link}
                                key={link.label}
                                onClick={() => setActive(link.link)}
                                className={cn('text-neutral-300 flex items-center gap-2 hover:text-primary transition-colors duration-200 text-base', active === link.link && 'text-primary')}
                                >
                                    <Icon className='size-4' /> {link.label}
                                </a>
                            );
                        })} 
                    </nav>

                
                </SheetContent>
            </Sheet>
        </>
    );
};