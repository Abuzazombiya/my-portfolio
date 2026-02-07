'use client';
import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image';
import { assets } from '@/assets/assets';
import { useTheme } from '@/context/ThemeContext';

export default function Hero() {
  const { theme } = useTheme();

  return (
    <section className="relative bg-black py-50 w-full flex flex-col md:flex-row items-center justify-center text-gray-100 transition-colors" data-aos="fade-up">

      <div className="flex-1 mt-28 md:mt-0 text-center justify-center space-y-10 font-serif">
        <h1 className={`text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-500 via-purple-500 to-blue-500 bg-clip-text text-transparent ${
          theme === 'light' ? 'drop-shadow-md' : 'md:drop-shadow-[0_0_10px_blue]'
        }`}>
          Hello, I'm <br /> Abubakar Jamal
        </h1>

        <TypeAnimation
          sequence={[
            'React and Next JS Developer', 400,
            'Frontend Designer', 400,
            'Tech Explorer', 400,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="text-xl text-orange-500"
        />

        <p className="text-gray-100 md:text-lg">I build modern, responsive web experiences.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#projects">
            <button className="bg-orange-500 hover:bg-orange-600 active:bg-orange-800 px-8 py-3 rounded-lg font-semibold cursor-pointer transition-all duration-200 text-gray-50 shadow-lg hover:shadow-xl">
              View Projects
            </button>
          </a>
          <a href="#contact">
            <button className={`${theme === 'light' ? 'text-gray-50' : 'text-white'} bg-gray-700 hover:bg-gray-600 active:bg-gray-800 px-8 py-3 rounded-lg font-semibold cursor-pointer transition-all duration-200 border-2 border-gray-600 hover:border-gray-500 shadow-lg hover:shadow-xl`}>
              Contact Me
            </button>
          </a>
        </div>
      </div>

      <div className="flex-1 flex justify-center mt-8 md:mt-0">
        <Image 
          src={assets.my_image} 
          alt="Developer illustration" 
          width={400} 
          height={400} 
          className="rounded-full w-full object-cover shadow-[0_0_30px_rgba(255,165,0,0.8)] bg-white" 
        />
      </div>
    </section>
  );
}