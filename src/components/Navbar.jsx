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

    const handleThemeToggle = () => {
        console.log('Theme button clicked, current theme:', theme);
        toggleTheme();
    };

    return (
        <nav className="fixed shadow-lg shadow-gray-600 w-full p-5 top-0 left-0 z-50 bg-[#0a0a0a] bg-opacity-90 backdrop-blur-md border-b border-gray-800 transition-colors duration-300">
            <div className="flex font-serif justify-between items-center">
                <Link href="/" className="font-bold text-2xl text-gray-100">Abubakar Jamal</Link>

                <div className="hidden text-right md:flex font-medium space-x-6 items-center">
                    <a href="#about" className="ml-3 text-gray-100 hover:text-orange-500 active:text-orange-700">About</a>
                    <a href="#projects" className="ml-3 text-gray-100 hover:text-orange-500 active:text-orange-700">Projects</a>
                    <a href="#contact" className="text-gray-100 hover:text-orange-500 active:text-orange-700">Contact</a>
                    <a href="https://wa.me/233257182413" target="_blank" rel="noopener noreferrer" className="text-gray-100 hover:text-green-500 active:text-green-700 text-2xl transition-colors">
                        <SiWhatsapp />
                    </a>
                    {mounted && (
                        <button
                            onClick={handleThemeToggle}
                            className="ml-3 text-gray-100 hover:text-orange-500 text-2xl transition-colors p-2 rounded-lg hover:bg-gray-700"
                            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                            type="button"
                        >
                            {theme === 'dark' ? <BsSun /> : <BsMoon />}
                        </button>
                    )}
                </div>

                <div className="flex items-center space-x-3 md:hidden">
                    {mounted && (
                        <button
                            onClick={handleThemeToggle}
                            className="text-gray-100 hover:text-orange-500 text-2xl transition-colors p-2 rounded-lg hover:bg-gray-700"
                            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
                            type="button"
                        >
                            {theme === 'dark' ? <BsSun /> : <BsMoon />}
                        </button>
                    )}
                    <button
                        className="md:hidden text-gray-100 bg-transparent mt-1 text-2xl transition-transform duration-300"
                        onClick={() => setIsOpen(prev => !prev)}
                    >
                        {isOpen ? (
                            <CgClose className="transition-transform duration-500 rotate-180" />
                        ) : (
                            <GiHamburgerMenu className="transition-transform duration-500" />
                        )}
                    </button>

                </div>
            </div>

            <div className={`md:hidden text-gray-100 bg-slate-900 text-center rounded-2xl overflow-hidden transition-all duration-650 ease-in-out flex flex-col ${isOpen ? 'min-h-full min-w-full opacity-150' : 'max-h-0 opacity-0'}`}>
                <a className="py-3 active:text-orange-500 hover:bg-gray-700" href="#about" onClick={() => setIsOpen(false)}>About</a>
                <a className="py-3 active:text-orange-500 hover:bg-gray-700" href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
                <a className="py-3 active:text-orange-500 hover:bg-gray-700" href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
                <a className="py-3 active:text-green-500 flex items-center justify-center space-x-2 hover:text-green-500 hover:bg-gray-700" href="https://wa.me/233257182413" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>
                    <SiWhatsapp className="text-xl" />
                    <span>WhatsApp</span>
                </a>
            </div>
        </nav>
    );
}