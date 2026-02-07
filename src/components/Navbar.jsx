'use client';

import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { CgClose } from 'react-icons/cg';
import { SiWhatsapp } from 'react-icons/si';
import { BsSun, BsMoon } from 'react-icons/bs';
import { useTheme } from '@/context/ThemeContext';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme, mounted } = useTheme();

  return (
    <nav className="fixed top-0 left-0 z-50 w-full bg-[#0a0a0a]/90 backdrop-blur-md border-b border-gray-800 shadow-lg transition-colors overflow-x-hidden">
        
      <div className="flex items-center justify-between px-4 py-5 font-serif max-w-7xl mx-auto">
        <Link href="/" className="font-bold text-2xl text-gray-100">
          Abubakar Jamal
        </Link>

        <div className="hidden md:flex items-center space-x-6 font-medium">
          <a href="#about" className="text-gray-100 hover:text-orange-500">
            About
          </a>
          <a href="#projects" className="text-gray-100 hover:text-orange-500">
            Projects
          </a>
          <a href="#contact" className="text-gray-100 hover:text-orange-500">
            Contact
          </a>

          <a
            href="https://wa.me/233257182413"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl text-gray-100 hover:text-green-500"
          >
            <SiWhatsapp />
          </a>

          {mounted && (
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-2xl text-gray-100 hover:text-orange-500 hover:bg-gray-700 transition"
              type="button"
            >
              {theme === 'dark' ? <BsSun /> : <BsMoon />}
            </button>
          )}
        </div>

        <div className="flex items-center space-x-2 md:hidden">
          {mounted && (
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-2xl text-gray-100 hover:text-orange-500 hover:bg-gray-700 transition"
              type="button"
            >
              {theme === 'dark' ? <BsSun /> : <BsMoon />}
            </button>
          )}

          <button
            onClick={() => setIsOpen(prev => !prev)}
            className="text-2xl text-gray-100 transition-transform"
            type="button"
          >
            {isOpen ? (
              <CgClose className="rotate-180 transition-transform duration-300" />
            ) : (
              <GiHamburgerMenu className="transition-transform duration-300" />
            )}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden overflow-hidden bg-slate-900 text-center transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <a
          href="#about"
          className="block py-4 hover:bg-gray-700"
          onClick={() => setIsOpen(false)}
        >
          About
        </a>
        <a
          href="#projects"
          className="block py-4 hover:bg-gray-700"
          onClick={() => setIsOpen(false)}
        >
          Projects
        </a>
        <a
          href="#contact"
          className="block py-4 hover:bg-gray-700"
          onClick={() => setIsOpen(false)}
        >
          Contact
        </a>
        <a
          href="https://wa.me/233257182413"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-4 hover:bg-gray-700 text-green-500"
          onClick={() => setIsOpen(false)}
        >
          <SiWhatsapp className="text-xl" />
          <span>WhatsApp</span>
        </a>
      </div>
    </nav>
  );
}
