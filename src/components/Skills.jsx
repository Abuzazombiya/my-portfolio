'use client';
import { FaReact } from 'react-icons/fa';
import { TbBrandNextjs } from 'react-icons/tb';
import { SiTailwindcss, SiGithub } from 'react-icons/si';
import { IoLogoJavascript } from 'react-icons/io';
import { ImHtmlFive, ImCss3, ImGit } from 'react-icons/im';

const SkillCard = ({ Icon, name }) => (
  <div className="flex flex-col w-32 h-32 sm:w-36 sm:h-36 md:w-48 md:h-48 justify-center bg-gray-900 rounded-2xl text-3xl md:text-5xl items-center text-gray-100 hover:scale-110 transition-transform duration-300 px-2">
    <Icon />
    <p className="mt-2 cursor-default select-none text-center text-xs sm:text-sm md:text-lg break-words w-full line-clamp-2">{name}</p>
  </div>
);

export default function Skills() {
  const skills = [
    { Icon: FaReact, name: 'React' },
    { Icon: TbBrandNextjs, name: 'Next.js' },
    { Icon: SiTailwindcss, name: 'Tailwind' },
    { Icon: IoLogoJavascript, name: 'JavaScript' },
    { Icon: ImHtmlFive, name: 'HTML' },
    { Icon: ImCss3, name: 'CSS' },
    { Icon: ImGit, name: 'Git' },
    { Icon: SiGithub, name: 'GitHub' },
  ];

  return (
    <section id="skills" className="bg-black text-gray-100 py-20 px-6 transition-colors" data-aos="fade-left">
<div className='flex gap-2 justify-center items-center'>
    <div className="h-1 bg-orange-500 w-25 mb-9"></div>
      <h1 className="text-3xl font-bold text-center text-orange-500 mb-10">My Skills</h1>
    <div className="h-1 bg-orange-500 w-25 mb-9"></div>
</div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
        {skills.map((skill, index) => (
          <SkillCard key={index} Icon={skill.Icon} name={skill.name} />
        ))}
      </div>
    </section>
  );
}
