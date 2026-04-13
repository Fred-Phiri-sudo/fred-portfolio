/**
 * @copyright 2025 codewithsfred
 * @license Apache-2.0
 */

/**
 * Types
 */
import type {
  ExperienceType,
  LinksType,
  ToolsType,
} from '@/types';

/**
 * Assets
 */
import {
  FileText,
  Home,
  User,
} from 'lucide-react';

const navLinks: LinksType[] = [
  { label: 'Home', link: '#hero', icon: Home },
  { label: 'About', link: '#about', icon: User },

  { label: 'Resume', link: '#resume', icon: FileText }
];


const education: ExperienceType[] = [
  
  {
    year: '2026',
    title: 'CCNA Certification',
    institute: 'Jeremys ITLab free YouTube Course',
    desc: 'Learning more in-depth and practical concepts on internet routing techniques such as Static Routes, and Dynamic routing, IPv4/IPv6 subnetting and VLANs, with more focus on Cisco routers and switches. Network design and configuration skills are the expected outcome, and prepares for the CCNA.',
  },
  {
    year: '2026',
    title: 'CompTIA Security+',
    institute: 'Udemy Online Course',
    desc: 'This course provided foundational knowledge in application & website security, teaching the basics of Firewall configuration, EMail Security, Web Security protocols, Assymetric encryption algorithms, AAA and digital-Certificates.',
  },
  {
    year: '2024 – 2026',
    title: 'Associate in Information Technology',
    institute: 'Lake Land College',
    desc: 'Focused on computer networking fundamentals, backend server management, programming and web design fundamentals.',
  }
];

const experience: ExperienceType[] = [
  {
    year: '2026 – Present',
    title: 'Help Desk Support Intern',
    institute: 'LLC ISS Department',
    desc: 'Learned hands on experience using ticketing systems to help end users with the issues. Still trying to learn more about mobile device management and Active Directory. I have learned a lot on the social aspect of working an IT Department.',
  }
];

const tools: ToolsType[] = [
  {
    label: 'Python',
    imgSrc: '/public/python-com.svg',
  },
  {
    label: 'Grafana',
    imgSrc: '/public/grafana-com.svg',
  },
    {
    label: 'Proxmox',
    imgSrc: '/public/proxmox-com.svg',
  },
  {
    label: 'CSS',
    imgSrc: '/public/css3.svg',
  },
  {
    label: 'Tailwind CSS',
    imgSrc: '/public/tailwindcss.svg',
  },
  {
    label: 'React',
    imgSrc: '/public/react.svg',
  },
  {
    label: 'JavaScript',
    imgSrc: '/public/javascript.svg',
  },
  {
    label: 'Node.js',
    imgSrc: '/public/nodejs.svg',
  }
];


export {
  education,
  experience,
  tools,
  navLinks
};
