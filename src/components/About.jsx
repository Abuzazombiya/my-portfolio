'use client';

export default function About() {
  return (
    <section
      id="about"
      className="relative min-h-screen bg-black overflow-x-hidden flex flex-col items-center justify-center text-gray-100 font-serif transition-colors px-4"
      data-aos="fade-right"
    >
      <div className="flex items-center gap-4 mb-10">
        <div className="h-1 bg-orange-500 w-16 sm:w-24"></div>

        <h1 className="text-4xl font-bold text-orange-500 text-center">
          About Me
        </h1>

        <div className="h-1 bg-orange-500 w-16 sm:w-24"></div>
      </div>

      <div className="max-w-3xl w-full text-center space-y-6">
        <p>
          I&apos;m{' '}
          <strong className="text-orange-500 italic font-bold">
            Abubakar Jamal
          </strong>
          , a self-taught Frontend Developer with a deep passion for building
          interactive, modern, and visually appealing websites. My journey
          began with curiosity about how websites work, which quickly turned
          into a love for coding — especially with React and Next.js.
        </p>

        <p>
          I enjoy blending creativity with functionality, focusing on clean UI
          designs and smooth user experiences. Over time, I&apos;ve worked on
          several projects like my e-commerce site,{' '}
          <span className="text-orange-500 italic font-bold">Ace Grind</span>,
          where I&apos;ve explored real-world features such as wishlists,
          newsletters, and payment integrations.
        </p>

        <p>
          I enjoy transforming ideas into interactive designs and continuously
          learning new technologies to stay ahead in the web development world.
        </p>

        <p>
          I&apos;m always open to new opportunities, challenges, and
          collaborations that help me grow as a developer and create meaningful
          digital experiences. My goal is to build websites that not only look
          good but also perform efficiently across all devices.
        </p>
      </div>
    </section>
  );
}
