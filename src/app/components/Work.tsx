import Link from "next/link";
import Image from "next/image";
import { ProjectCard } from "./project-card";

export default function Work() {
  const projects = [
    {
      image: "/images/writegpt.png",
      title: "WriteGPT",
      description: "Chrome Extension",
      link: "https://writegpt-9cc05.web.app/",
    },
    {
      image: "/images/euvin.png",
      title: "Euvin",
      description: "Online Invitation Platform",
      link: "https://euvin.ro/ro",
    },
    {
      image: "/images/security.png",
      title: "Security",
      description: "Web development",
      link: "https://security-e0eee.web.app/",
    },
    {
      image: "/images/fluttermotion.png",
      title: "Flutter Motion",
      description: "Web development",
      link: "https://www.fluttermotion.com/",
    },
  ];
  const personalProjects = [
    {
      image: "/personal-project/momentum.png",
      title: "Mindful Momentum",
      description: "Chrome Extension",
      link: "https://chromewebstore.google.com/detail/mindful-momentum/palidfpmacconbkcjgeahehkkbgooach?authuser=0&hl=en",
    },
    {
      image: "/personal-project/focustube.png",
      title: "FocusTube",
      description: "Chrome Extension",
      link: "https://chromewebstore.google.com/detail/focustube/ljeganaoldapdjgfmfjjmkknjjmnbpbi?authuser=0&hl=en",
    },
    {
      image: "/personal-project/accessibility.png",
      title: "Enhanced Accessibility",
      description: "Chrome Extension",
      link: "https://chromewebstore.google.com/detail/enhanced-accessibility/lecpbmbadhloifokcdhfillhfaeollji?authuser=0&hl=en",
    },
  ];

  return (
    <div>
      <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
        <h4 className="text-center mb-2 text-lg font-Ovo">My portfolio</h4>
        <h2 className="text-center text-5xl font-Ovo">My Latest Work</h2>
        <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
          Explore my recent work: a chrome extension which enhance the power of
          AI (writeGPT), a Online invitation platform for weeding (Euvin) and so
          on.
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
      <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
        <h2 className="text-center text-5xl font-Ovo">My Personal Project</h2>
        {/* <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
          Explore my recent work: a chrome extension which enhance the power of
          AI (writeGPT), a Online invitation platform for weeding (Euvin) and so
          on.
        </p> */}

        <div className="grid grid-cols-4 my-10 gap-5 dark:text-black">
          {personalProjects.map((project, index) => (
            <ProjectCard
              key={index}
              image={project.image}
              title={project.title}
              description={project.description}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
