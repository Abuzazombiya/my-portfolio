'use client';
import { useRef } from 'react';
import { BsPhone, BsFillSendFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { SiGithub, SiFacebook, SiInstagram } from 'react-icons/si';
import { FaLinkedinIn } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const SocialLink = ({ href, Icon, label }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-100 hover:text-orange-500 transition text-4xl" title={label}>
    <Icon />
  </a>
);

export default function Contact() {
  const form = useRef();

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

  const socialLinks = [
    { href: 'https://github.com/Abuzazombiya', Icon: SiGithub, label: 'GitHub' },
    { href: 'https://www.linkedin.com/in/abubakar-jamal-8baa5738a/', Icon: FaLinkedinIn, label: 'LinkedIn' },
    { href: 'https://www.facebook.com/share/1AvcpZagEL/?mibextid=wwXlfr', Icon: SiFacebook, label: 'Facebook' },
    { href: 'https://www.instagram.com/abubakarjamal4?igsh=MXJnMGQ3bWF0cXI4bw', Icon: SiInstagram, label: 'Instagram' },
  ];

  return (
    <section id="contact" className="bg-black text-gray-100 py-20 px-6 md:px-20 transition-colors" data-aos="fade-up">
      <h2 className="text-3xl font-bold text-center text-orange-500 mb-10">
        Contact Me
      </h2>

      <div className="grid md:grid-cols-2 gap-10">
        <div className="space-y-6 text-center md:text-left">
          <h3 className="text-2xl font-semibold">Let's Work Together</h3>
          <p className="text-gray-300">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>

          <div className="flex-col justify-center md:justify-start space-x-6 mt-6 text-2xl">
            <a href="mailto:abubakarjamal9@icloud.com">
              <span className="font-bold text-orange-500 flex py-3"><MdEmail className="text-2xl" />Email:</span>
              abubakarjamal9@icloud.com
            </a>
            <a href="https://wa.me/233257182413" target="_blank" rel="noopener noreferrer">
              <span className="font-bold text-orange-500 flex py-3"><BsPhone className="text-2xl" />Phone/WhatsApp:</span>
              +233 257 182 413
            </a>
          </div>

          <div className="flex justify-center md:justify-start space-x-6 mt-6 text-2xl">
            {socialLinks.map((link, index) => (
              <SocialLink key={index} href={link.href} Icon={link.Icon} label={link.label} />
            ))}
          </div>
        </div>

        <form ref={form} onSubmit={sendEmail} className="space-y-5 bg-[#111] p-8 rounded-lg shadow-lg shadow-gray-600">
          <input type="text" name="from_name" placeholder="Your Name" className="w-full bg-gray-800 text-gray-100 placeholder-gray-400 p-3 rounded-md outline-none focus:ring-2 focus:ring-orange-500" />
          <input type="email" name="from_email" placeholder="Your Email" className="w-full bg-gray-800 text-gray-100 placeholder-gray-400 p-3 rounded-md outline-none focus:ring-2 focus:ring-orange-500" />
          <textarea rows="4" name="message" placeholder="Your Message" className="w-full bg-gray-800 text-gray-100 placeholder-gray-400 p-3 rounded-md outline-none focus:ring-2 focus:ring-orange-500"></textarea>
          <button type="submit" className="w-full bg-orange-500 flex justify-center hover:bg-orange-600 active:bg-orange-800 p-3 rounded-md font-semibold transition cursor-pointer">
            Send Message <BsFillSendFill className="text-2xl rotate-45 ml-5" />
          </button>
        </form>
      </div>
    </section>
  );
}
