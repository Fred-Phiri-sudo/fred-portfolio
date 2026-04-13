/**
 * @copyright 2026 codewithfred
 * @license Apache-2.0
 */


export const Hero = () => {
    return ( 
    <div className="mb-40" id='hero'>
        <h1 className="text-3xl md:text-5xl lg:text-6xl
        font-semibold capitalize mt-30 max-w-3xl 
        md:leading-16">
            Hi, 
        </h1>
        <h1 className="text-3xl md:text-5xl lg:text-6xl
        font-semibold capitalize mt-2 max-w-3xl 
        md:leading-16">I'm Fred.</h1>

        <h3>Welcome to my portfolio</h3>
   
        <p className="mt-4 text-neutral-300 max-w-4xl">
            I specialize in server and network administration, but I like 
            to do web design sometimes. I have some experience using Javascript, 
            HTML and CSS, and now I'm learning to use React, Tailwind, and more. 
             
        </p>

        <p className="mt-4 text-neutral-300 max-w-4xl">
            I am developing specialized skills in Information Security, 
            System Administration, Project Management, and enterprise networking.  
        </p>

        <p className="mt-4 text-neutral-300 max-w-4xl">
            Some of my skills include dealing with Windows Server Features such as AD, DNS, DHCP.
            Basic Network Design and configuration using Cisco PacketTracer for simulation, 
            and network security via monitoring and logging software like Wireshark Packet Capture, Grafana Dashboard, and OPNsense Firewall.  
        </p>
    
    </div>
    );
};

