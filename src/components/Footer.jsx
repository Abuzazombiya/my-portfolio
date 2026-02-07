'use client';
import { SiGithub, SiFacebook, SiInstagram } from 'react-icons/si';
import { FaLinkedinIn } from 'react-icons/fa';
import BackToTopButton from '@/app/backtotopbutton';

const SocialLink = ({ href, Icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-300 hover:text-orange-500 transition"
    title={label}
  >
    <Icon />
  </a>
);

export default function Footer() {
  const socialLinks = [
    { href: 'https://github.com/Abuzazombiya', Icon: SiGithub, label: 'GitHub' },
    { href: 'https://www.linkedin.com/in/abubakar-jamal-8baa5738a/', Icon: FaLinkedinIn, label: 'LinkedIn' },
    { href: 'https://www.facebook.com/share/1AvcpZagEL/?mibextid=wwXlfr', Icon: SiFacebook, label: 'Facebook' },
    { href: 'https://www.instagram.com/abubakarjamal4?igsh=MXJnMGQ3bWF0cXI4bw', Icon: SiInstagram, label: 'Instagram' },
  ];

  return (
    <footer className="bg-black text-gray-300 py-8 border-t border-gray-800 transition-colors">
      <div className="container mx-auto flex flex-col items-center space-y-4">
        <h1 className="text-2xl font-semibold text-white">Abubakar Jamal</h1>

        <div className="flex space-x-6 text-2xl">
          {socialLinks.map((link, index) => (
            <SocialLink key={index} href={link.href} Icon={link.Icon} label={link.label} />
          ))}
        </div>

        <BackToTopButton />

        <p className="text-sm text-gray-500 mt-4">
          &copy; 2025 <span className="text-white">Abubakar Jamal</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
