import Link from "next/link";
import Image from "next/image";
import { ProjectCard } from "./project-card";

export default function Work() {
  const projects = [
    {
      image: "/images/Tictactoe.jpg",
      title: "E-comerce",
      description: "E-comerce Based Software Development",
      link: "https://github.com/anamuddinahmad",
    },
    {
      image: "/images/QrCodeG.jpg",
      title: "GPS Tracker",
      description: "API -Based Web project",
      link: "https://github.com/anamuddinahmad",
    },
    {
      image: "/images/BookPub.jpg",
      title: "Image Bloging Site",
      description: "Web development",
      link: "https://github.com/anamuddinahmad",
    },
    {
      image: "/images/Tea-Garden.jpg",
      title: "NotePad",
      description: "Web development",
      link: "https://github.com/anamuddinahmad",
    },
  ];

  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">My portfolio</h4>
      <h2 className="text-center text-5xl font-Ovo">My Latest Work</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        Explore my recent work: a Java GUI Tic-Tac-Toe game, a React-based QR
        Code generator, and dynamic websites including a book publishing
        platform and a Tea Garden site. Each project showcases my skills in web
        development, front-end design, and software-development.
      </p>

      <div className="grid grid-cols-4 my-10 gap-5 dark:text-black">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>

      <Link
        href="https://github.com/anamuddinahmad"
        target="_blank"
        className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover"
      >
        Show more
        <Image
          src="/images/right-arrow-bold.png"
          width={16}
          height={16}
          alt="Arrow"
          className="w-4 dark:hidden"
        />
        <Image
          src="/images/right-arrow-bold-dark.png"
          width={16}
          height={16}
          alt="Arrow"
          className="w-4 hidden dark:block"
        />
      </Link>
    </div>
  );
}
