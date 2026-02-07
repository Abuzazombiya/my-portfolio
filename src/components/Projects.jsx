'use client';
import Image from 'next/image';
import { assets } from '@/assets/assets';

const ProjectCard = ({ image, title, description, liveLink }) => (
  <div className="text-gray-100 flex flex-col border border-gray-700 bg-gray-900 rounded-2xl p-5 max-w-sm hover:scale-105 transition-transform duration-300">
    <div className="w-full flex justify-center">
      <Image 
        src={image} 
        alt={title} 
        className="w-64 sm:w-72 md:w-80 rounded-md object-cover"
      />
    </div>
    <h1 className="text-3xl text-center">{title}</h1>
    <p className="text-2 mt-5 text-center">{description}</p>
    <a href={liveLink} className="text-center">
      <button className="mt-5 w-40 h-10 bg-orange-500 rounded-md hover:bg-orange-600 active:bg-orange-800 cursor-pointer text-white">
        View Live
      </button>
    </a>
  </div>
);

export default function Projects() {
  const projects = [
    {
      image: assets.project_1,
      title: 'SHOPHiVE E-commerce Website',
      description: 'A multi vendor E-commerce website.',
      liveLink: 'https://shophive-gh.vercel.app/',
    },
    {
      image: assets.project_2,
      title: 'Ace Grind Mobile E-commerce Website',
      description: 'An online store for buying and selling mobile devices.',
      liveLink: 'https://ace-grind-frontend.vercel.app/',
    },
    {
      image: assets.project_4,
      title: 'Timothy Masterwood Carpentry Website',
      description: 'A website for a carpentry business showcasing services and portfolio.',
      liveLink: 'https://timothy-carpentry.vercel.app/',
    },
    {
      image: assets.project_3,
      title: 'Portfolio Website',
      description: 'A personal portfolio website to showcase projects.',
      liveLink: '#',
    },
  ];

  return (
    <section id="projects" className="min-h-1/2 bg-black pb-5 transition-colors" data-aos="fade-right">
      <h2 className="text-center text-orange-500 text-3xl font-bold">My Projects</h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 justify-items-center px-6 mt-10">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
            liveLink={project.liveLink}
          />
        ))}
      </div>
    </section>
  );
}
