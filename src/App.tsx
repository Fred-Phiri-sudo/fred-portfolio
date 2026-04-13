/**
 * @copyright 2026 codewithfred
 * @license Apache-2.0
 */

/**
 * Components
 */

import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Resume } from '@/components/Resume';


export const App = () => {
  return (
    <main className="flex flex-col 
    container mx-auto p-10 max-w-4xl 
    lg:pr-10 lg:pl-0 lg:max-w-6xl">
      <Hero />
      <About />
      <Resume />
    </main>
  );
};

