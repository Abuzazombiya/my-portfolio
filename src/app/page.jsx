'use client';
import { BsPhone, BsFillSendFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { ImHtmlFive, ImCss3, ImGit } from "react-icons/im";
import { IoLogoJavascript } from "react-icons/io";
import { SiTailwindcss, SiGithub, SiFacebook, SiInstagram } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { FaReact, FaLinkedinIn } from "react-icons/fa";
import { useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";
import { assets } from "@/assets/assets";
import { TypeAnimation } from "react-type-animation";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import emailjs from '@emailjs/browser';
import BackToTopButton from "./backtotopbutton";


export default function Home() {

  const form = useRef();
  const [isOPen, setIsOpen] = useState(false);

const sendEmail = (e) => {
  e.preventDefault();


  emailjs.sendForm(
    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
    form.current,
    process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
  ).then(
    () => {
      alert('✅ Message sent successfully!✅');
      e.target.reset();
    },
    (error) => {
      console.error('❌ Error sending message:', error);
      alert('❌Failed to send message. Try again later.❌');
    }
  );
};

  useEffect(() => {
    AOS.init({ duration: 2000 })
  }, []);

  return (
    <div className="w-screen space-y-17 bg-black">
      <nav className="fixed shadow-lg shadow-gray-600 w-full p-5 top-0 left-0 z-50 bg-[#0a0a0a] bg-opacity-90 backdrop-blur-md border-b border-gray-800">
        <div className="flex font-serif  justify-between ">
          <h1 className="font-bold text-2xl text-gray-100">Abubakar Jamal</h1>

          <div className="hidden text-right md:flex font-medium space-x-6">
            <a href="#about" className="ml-3 hover:text-orange-500  active:text-orange-700">About</a>
            <a href="#projects" className="ml-3 hover:text-orange-500 active:text-orange-700">Projects</a>
            <a href="#contact" className="md:mr-10 hover:text-orange-500 active:text-orange-700">Contact</a>
          </div>

          <button className="md:hidden text-gray-100 text-2xl absolute top-5 right-6 z-50 transition-transform duration-350" onClick={() => setIsOpen(!isOPen)}>
            <span className={`block transition-transform duration-500 transform hover:rotate-180 top-0 cursor-pointer right-0${isOPen ? "rotate-180 opacity-100" : "rotate-0 opacity-0 "
              }`}>
              <CgClose />
            </span>
            <span className={`block transition-transform duration-500 transform  cursor-pointer hover:scale-110 ${isOPen ? "rotate-180 opacity-0" : "rotate-0 opacity-100"
              }`}>
              <GiHamburgerMenu />
            </span>
          </button>


        </div>

        <div className={`md:hidden text-gray-100 bg-slate-900 text-center 
      rounded-2xl overflow-hidden transition-all duration-650 ease-in-out flex flex-col ${isOPen ? "min-h-full min-w-full opacity-150" : "max-h-0 opacity-0"
          }`}>
          <a className="py-3 active:text-orange-500" href="#about" onClick={() => setIsOpen(false)}>About</a>
          <a className="py-3 active:text-orange-500" href="#projects" onClick={() => setIsOpen(false)}>Projects</a>
          <a className="py-3 active:text-orange-500" href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
        </div>
      </nav>

      <section className="bg-black min-h-screen flex flex-col md:flex-row items-center justify-center px-6 text-gray-200" data-aos="fade-up">

        <div className="flex-1 mt-28 md:mt-0 text-center justify-center space-y-10 font-serif">
          <h1 className="text-5xl md:text-6xl font-bold md:drop-shadow-[0_0_10px_blue] bg-gradient-to-r from-orange-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">Hello, I'm <br /> Abubakar Jamal</h1>

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

          <p>I build modern, responsive web experiences.</p>
          <a href="#projects"><button className="bg-orange-500 px-8 py-2 rounded-md hover:bg-orange-600 active:bg-orange-800 cursor-pointer">
            View Projects
          </button></a>
          <a href="#contact"><button className="bg-gray-700 ml-3 px-8 py-2 rounded-md hover:bg-gray-800 active:bg-gray-500 cursor-pointer">
            Contact Me
          </button></a>

        </div>
        <div className="flex-1 flex justify-center mt-8 md:mt-0">
          <Image src={assets.my_image} alt="Developer illustration" width={400} height={400} className="rounded-full shadow-[0_0_30px_rgba(255,165,0,0.8)] bg-white" />
        </div>
      </section>

      <section id="about" className="min-h-screen bg-black flex flex-col items-center justify-center px-6 py-16 text-gray-200 font-serif" data-aos="fade-right">
  <h1 className="text-4xl font-bold text-orange-500 mb-6 text-center">About Me</h1>
  
  <div className="max-w-3xl text-center space-y-6">
    <p>
      I'm <span className="text-orange-500 font-semibold">Abubakar Jamal</span>, a self-taught Frontend Developer with a deep passion for building 
      interactive, modern, and visually appealing websites. My journey began with curiosity about how 
      websites work, which quickly turned into a love for coding — especially with React and Next.js.
    </p>

    <p>
      I enjoy blending creativity with functionality, focusing on clean UI designs and smooth user experiences. 
      Over time, I've worked on several projects like my e-commerce site, <span className="text-orange-500 font-semibold">Ace Grind</span>, 
      where I've explored real-world features such as wishlists, newsletters, and payment integrations.
    </p>

    <p>I enjoy transforming ideas into interactive designs and continuously learning new technologies to stay ahead in the web development world.</p>

    <p>
      I'm always open to new opportunities, challenges, and collaborations that help me grow as a developer 
      and create meaningful digital experiences. My goal is to build websites that not only look good but 
      also perform efficiently across all devices.
    </p>
  </div>
</section>


      <section id="skills" className="bg-black text-gray-300 py-20 px-6" data-aos="fade-left">

        <h1 className="text-3xl font-bold text-center text-orange-500 mb-10">My Skills</h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
          <div className="flex flex-col w-32 h-32 sm:w-36 sm:h-36 md:w-48 md:h-48 justify-center bg-gray-900 rounded-2xl text-3xl md:text-5xl items-center hover:scale-110 transition-transform duration-300">
            <FaReact />
            <p className="mt-2 cursor-default select-none">React</p>
          </div>
          <div className="flex flex-col w-32 h-32 sm:w-36 sm:h-36 md:w-48 md:h-48 justify-center bg-gray-900 rounded-2xl text-3xl md:text-5xl items-center hover:scale-110 transition-transform duration-300">
            <TbBrandNextjs />
            <p className="mt-2 cursor-default select-none">Next.js</p>
          </div>
          <div className="flex flex-col w-32 h-32 sm:w-36 sm:h-36 md:w-48 md:h-48 justify-center bg-gray-900 rounded-2xl text-3xl md:text-5xl items-center hover:scale-110 transition-transform duration-300">
            <SiTailwindcss />
            <p className="mt-2 cursor-default select-none">Tailwind</p>
          </div>
          <div className="flex flex-col w-32 h-32 sm:w-36 sm:h-36 md:w-48 md:h-48 justify-center bg-gray-900 rounded-2xl text-2xl md:text-4xl items-center hover:scale-110 transition-transform duration-300">
            <IoLogoJavascript />
            <p className="mt-2 cursor-default select-none">JavaScript</p>
          </div>
          <div className="flex flex-col w-32 h-32 sm:w-36 sm:h-36 md:w-48 md:h-48 justify-center bg-gray-900 rounded-2xl text-3xl md:text-5xl items-center hover:scale-110 transition-transform duration-300">
            <ImHtmlFive />
            <p className="mt-2 cursor-default select-none">HTML</p>
          </div>
          <div className="flex flex-col w-32 h-32 sm:w-36 sm:h-36 md:w-48 md:h-48 justify-center bg-gray-900 rounded-2xl text-3xl md:text-5xl items-center hover:scale-110 transition-transform duration-300">
            <ImCss3 />
            <p className="mt-2 cursor-default select-none">CSS</p>
          </div>
          <div className="flex flex-col w-32 h-32 sm:w-36 sm:h-36 md:w-48 md:h-48 justify-center bg-gray-900 rounded-2xl text-3xl md:text-5xl items-center hover:scale-110 transition-transform duration-300">
            <ImGit />
            <p className="mt-2 cursor-default select-none">Git</p>
          </div>
          <div className="flex flex-col w-32 h-32 sm:w-36 sm:h-36 md:w-48 md:h-48 justify-center bg-gray-900 rounded-2xl text-3xl md:text-5xl items-center hover:scale-110 transition-transform duration-300">
            <SiGithub />
            <p className="mt-2 cursor-default select-none">GitHub</p>
          </div>
        </div>
      </section>

      <section id="projects" className="min-h-1/2 bg-black pb-5" data-aos="fade-right">

        <h2 className="text-center text-orange-500 text-3xl font-bold">My Projects</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center px-6 mt-10">
          <div className="text-gray-300 flex flex-col border border-gray-700 bg-gray-900 rounded-2xl p-5 max-w-sm hover:scale-105 transition-transform duration-300">
            <div className="w-full flex justify-center">
              <Image 
                src={assets.project_1} 
                alt="Project 1" 
                className="w-64 sm:w-72 md:w-80 rounded-md object-cover"
              />
            </div>
            <h1 className="text-3xl text-center">SHOPHiVE E-commerce Website</h1>
            <p className="text-2 mt-5 text-center">A multi vendor E-commerce website.</p>
            <a href="https://shophive-gh.vercel.app/" className="text-center"><button className="mt-15 w-40 h-10 bg-orange-500 rounded-md hover:bg-orange-600 active:bg-orange-800 cursor-pointer">View Live</button></a>
          </div>
          <div className="text-gray-300 flex flex-col border border-gray-700 bg-gray-900 rounded-2xl p-5 max-w-sm hover:scale-105 transition-transform duration-300">
            <div className="w-full flex justify-center">
              <Image 
                src={assets.project_2} 
                alt="Project 2" 
                className="w-64 sm:w-72 md:w-80 rounded-md object-cover"
              />
              </div>
            <h1 className="text-3xl text-center">Ace Grind Mobile E-commerce Website</h1>
            <p className="text-2 mt-5 text-center">An online store for buying and selling mobile devices.</p>
            <a href="https://ace-grind-frontend.vercel.app/" className="text-center"><button className="mt-5 w-40 h-10 bg-orange-500 rounded-md hover:bg-orange-600 active:bg-orange-800 cursor-pointer">View Live</button></a>
          </div>
          <div className="text-gray-300 flex flex-col border border-gray-700 bg-gray-900 rounded-2xl p-5 max-w-sm hover:scale-105 transition-transform duration-300">
            <div className="w-full flex justify-center">
              <Image 
                src={assets.project_3} 
                alt="Project 3" 
                className="w-64 sm:w-72 md:w-80 rounded-md object-cover"
              />
              </div>
            <h1 className="text-3xl text-center">Portfolio Website</h1>
            <p className="text-2 mt-5 text-center">A personal portfolio website to showcase projects.</p>
            <a href="#" className="text-center"><button className="mt-20 w-40 h-10 bg-orange-500 rounded-md hover:bg-orange-600 active:bg-orange-800 cursor-pointer">View Live</button></a>
          </div>
        </div>
      </section>

      <section id="contact" className="bg-black text-gray-200 py-20 px-6 md:px-20" data-aos="fade-down">
        <h2 className="text-3xl font-bold text-center text-orange-500 mb-10">
          Contact Me
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          <div className="space-y-6 text-center md:text-left">
            <h3 className="text-2xl font-semibold">Let's Work Together</h3>
            <p className="text-gray-400">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>

            <div className="space-y-3">
              <p><span className="font-bold text-orange-500 flex"><MdEmail className="text-2xl" />Email:</span> abubakarjamal9@icloud.com</p>
              <p><span className="font-bold text-orange-500 flex"><BsPhone className="text-2xl" />Phone/WhatsApp:</span> +233 257 182 413</p>
            </div>

            <div className="flex justify-center md:justify-start space-x-6 mt-6 text-2xl">
              <a href="https://github.com/Abuzazombiya" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition text-4xl">
                <SiGithub />
              </a>
              <a href="https://www.linkedin.com/in/abubakar-jamal-8baa5738a/" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition text-4xl">
                <FaLinkedinIn />
              </a>
              <a href="https://www.facebook.com/share/1AvcpZagEL/?mibextid=wwXlfr" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition text-4xl">
                <SiFacebook />
              </a>
              <a href="https://www.instagram.com/abubakarjamal4?igsh=MXJnMGQ3bWF0cXI4bw" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition text-4xl">
                <SiInstagram />
              </a>
            </div>
          </div>

          <form ref={form} onSubmit={sendEmail} className="space-y-5 bg-[#111] p-8 rounded-lg shadow-lg shadow-gray-600">
            <input type="text" name="from_name" placeholder="Your Name" className="w-full bg-gray-800 p-3 rounded-md outline-none focus:ring-2 focus:ring-orange-500" />
            <input type="email" name="from_email" placeholder="Your Email" className="w-full bg-gray-800 p-3 rounded-md outline-none focus:ring-2 focus:ring-orange-500" />
            <textarea rows="4" name="message" placeholder="Your Message" className="w-full bg-gray-800 p-3 rounded-md outline-none focus:ring-2 focus:ring-orange-500"></textarea>
            <button type="submit" className="w-full bg-orange-500 flex justify-center hover:bg-orange-600 active:bg-orange-800 p-3 rounded-md font-semibold transition cursor-pointer">
              Send Message <BsFillSendFill className="text-2xl rotate-45 ml-5" />
            </button>
          </form>
        </div>
      </section>

     <footer className="bg-black text-gray-300 py-8 border-t border-gray-800">
  <div className="container mx-auto flex flex-col items-center space-y-4">

    <h1 className="text-2xl font-semibold text-white">Abubakar Jamal</h1>


    <div className="flex space-x-6 text-2xl">
      <a
        href="https://github.com/Abuzazombiya"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-orange-500 transition"
      >
        <SiGithub />
      </a>

      <a
        href="https://www.linkedin.com/in/abubakar-jamal-8baa5738a/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-orange-500 transition"
      >
        <FaLinkedinIn />
      </a>

      <a
        href="https://www.facebook.com/share/1AvcpZagEL/?mibextid=wwXlfr"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-orange-500 transition"
      >
        <SiFacebook />
      </a>

      <a
        href="https://www.instagram.com/abubakarjamal4?igsh=MXJnMGQ3bWF0cXI4bw"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-orange-500 transition"
      >
        <SiInstagram />
      </a>
    </div>

   <BackToTopButton/>

    <p className="text-sm text-gray-500 mt-4">
      &copy; 2025 <span className="text-white">Abubakar Jamal</span>. All rights reserved.
    </p>
  </div>
</footer>

    </div>
  );
}
