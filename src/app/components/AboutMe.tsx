import React from "react";

const AboutMe = () => {
  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg font-Ovo">Introduction</h4>
      <h2 className="text-center text-5xl font-Ovo">About me</h2>
      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        <div className="flex flex-col flex-1 items-center">
          <p className="mb-10 max-w-4xl font-Ovo">
            {`I'm Sanjay Rishidev, a Software Engineer specializing in the MERN
            stack with MySQL, with expertise in web development, UI/UX design,
            and scalable solutions. I have hands-on experience building
            inventory systems, real-time applications, and dynamic landing
            pages. <br />
            Proficient in React, Node.js, MySQL, NoSQL and Tailwind CSS, I enjoy
            solving complex challenges and contributing to innovative teams. My
            journey in software engineering has strengthened my ability to craft
            intuitive user interfaces and develop robust, scalable
            architectures.`}
          </p>
          <ul className="grid md:grid-cols-3 grid-cols-auto gap-6 max-w-4xl">
            <li className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500 shadow-blackCustom">
              <img src="./images/code-icon.png" className="w-7 mt-3 " />

              <h3 className="my-4 font-semibold text-gray-700 dark:text-white">
                Languages
              </h3>
              <p className="text-gray-600 text-sm dark:text-white/80">
                HTML, CSS, JavaScript, TypeScript, ReactJs, NextJs, ExpressJs,
                NodeJs, python, MongoDB, MySQL, NoSQL, Supabase, Firebase,
                Wordpress, Ui/Ux, LLM
              </p>
            </li>
            <li className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 shadow-blackCustom">
              <img
                src="./images/edu-icon.png"
                className="w-7 mt-3 dark:hidden"
              />

              <h3 className="my-4 font-semibold text-gray-700 dark:text-white">
                Education
              </h3>
              <p className="text-gray-600 text-sm dark:text-white/80">
                BCA (Bachelor of Computer Application)
              </p>
            </li>
            <li className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 shadow-blackCustom">
              <img
                src="./images/project-icon.png"
                className="w-7 mt-3 dark:hidden"
              />

              <h3 className="my-4 font-semibold text-gray-700 dark:text-white">
                Projects
              </h3>
              <p className="text-gray-600 text-sm dark:text-white/80">
                Based on HTML, CSS, JavaScript, TypeScript, ReactJs, NextJs,
                ExpressJs, NodeJs, python, MongoDB, MySQL, NoSQL, Supabase,
                Firebase, Wordpress, Ui/Ux, LLM
              </p>
            </li>
          </ul>
          <h4 className="my-6 text-gray-700 dark:text-white/80">Tools I Use</h4>

          <ul className="flex items-center flex-wrap gap-3 sm:gap-5">
            <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
              <img src="./images/vscode.png" className="w-5 sm:w-7" />
            </li>
            <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
              <img src="./images/wordpress.png" className="w-5 sm:w-7" />
            </li>
            <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
              <img src="./images/mysql.png" className="w-5 sm:w-7" />
            </li>
            <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
              <img src="./images/figma.png" className="w-5 sm:w-7" />
            </li>
            <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
              <img src="./images/git.png" className="w-5 sm:w-7" />
            </li>
            <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
              <img src="./images/oracle.png" className="w-7 sm:w-7" />
            </li>
          </ul>

          <h4 className="my-6 text-gray-700 dark:text-white/80">
            Web Technologies
          </h4>

          <ul className="flex items-center flex-wrap gap-3 sm:gap-5">
            <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
              <img src="./images/mongocom.png" className="w-5 sm:w-7" />
            </li>
            <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
              <img
                src="./images/expressjs_logo_icon_169185.png"
                className="w-5 sm:w-7 color-white"
              />
            </li>
            <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
              <img src="./images/react753244.png" className="w-5 sm:w-7" />
            </li>
            <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
              <img src="./images/node-js.svg" className="w-5 sm:w-7" />
            </li>
            <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
              <img src="./images/html-5.svg" className="w-5 sm:w-7" />
            </li>
            <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
              <img src="./images/css-3.svg" className="w-7 sm:w-7" />
            </li>
            <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
              <img src="./images/node-js (1).svg" className="w-7 sm:w-7" />
            </li>
            <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
              <img
                src="./images/tailwind-css-icon.webp"
                className="w-7 sm:w-7"
              />
            </li>
            <li className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500">
              <img src="./images/mysql-com-icon.avif" className="w-7 sm:w-7" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
