import React from "react";

const ProfileIntro = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <img src="./images/Profile.jpg" className="rounded-md w-32 mt-28" />
      <h3 className="flex items-end gap-2 text-xml md:text-2xl mb-3 font-Ovo">
        {`Hi! I'm Sanjay Rishidev`}
        <img src="./images/hand-icon.png" className="w-6" />
      </h3>
      <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">
        Software Developer
      </h1>
      <p className="max-w-2xl mx-auto font-Ovo">
        {`Welcome to my portfolio! I'm an aspiring software developer passionate
          about front-end development, I specialize in ReactJS , NodeJS , NextJS , and MySQL , delivering high-quality solutions for modern web applications.`}
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <a
          href="#contact"
          className="px-10 py-3 border rounded-full bg-gradient-to-r from-[#b820e6] to-[#da7d20] text-white flex items-center gap-2 dark:border-transparent"
        >
          contact me
          <img src="./images/right-arrow-white.png" className="w-4" />
        </a>

        <a
          href="/sanjay-rishidev-resume.pdf"
          target="_blank"
          download
          className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black"
        >
          my resume
          <img src="./images/download-icon.png" className="w-4" />
        </a>
      </div>
    </div>
  );
};

export default ProfileIntro;
