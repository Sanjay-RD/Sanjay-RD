"use client";
import React, { useEffect } from "react";

const Header = () => {
  useEffect(() => {
    const navBar = document.querySelector("nav");
    const navLinks = document.querySelector("nav ul");
    window.addEventListener("scroll", () => {
      if (navBar && navLinks) {
        if (window.scrollY > 50) {
          navBar.classList.add(
            "bg-white",
            "bg-opacity-50",
            "backdrop-blur-lg",
            "shadow-sm",
            "dark:bg-darkTheme",
            "dark:shadow-white/20"
          );
          navLinks.classList.remove(
            "bg-white",
            "shadow-sm",
            "bg-opacity-50",
            "dark:border",
            "dark:border-white/70",
            "dark:bg-transparent"
          );
        } else {
          navBar.classList.remove(
            "bg-white",
            "bg-opacity-50",
            "backdrop-blur-lg",
            "shadow-sm",
            "dark:bg-darkTheme",
            "dark:shadow-white/20"
          );
          navLinks.classList.add(
            "bg-white",
            "shadow-sm",
            "bg-opacity-50",
            "dark:border",
            "dark:border-white/70",
            "dark:bg-transparent"
          );
        }
      }
    });
  }, []);

  return (
    <nav className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50">
      <h1>
        <span className="text-3xl">S</span>anjay
        <span className="text-3xl">RD</span>
      </h1>

      <ul className="hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50 font-Ovo dark:border dark:border-white/50 dark:bg-transparent">
        <li>
          <a href="#top">Home</a>
        </li>
        <li>
          <a href="#about">About me</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#work">My Work</a>
        </li>
        <li>
          <a href="#contact">Contact me</a>
        </li>
      </ul>
      <div className="flex items-center gap-4">
        {/* <button>
            <img src="./images/moon_icon.png" className="w-6 dark:hidden" />
            <img
              src="./images/sun_icon.png"
              className="w-6 hidden dark:block"
            />
          </button> */}

        <a
          href="#contact"
          className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full m1-4 font-Ovo dark:border-white/50"
        >
          Contact
          <img src="./images/arrow-icon.png" className="w-3 dark:hidden" />
          <img
            src="./images/arrow-icon-dark.png"
            className="w-3 hidden dark:block"
          />
        </a>

        <button className="block md:hidden ml-3">
          <img src="./images/menu-black.png" className="w-6 dark:hidden" />
          <img
            src="./images/menu-white.png"
            className="w-6 hidden dark:block"
          />
        </button>
      </div>

      <ul
        id="sideMenu"
        className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 font-Ovo dark:bg-darkHover dark:text-white"
      >
        <div className="absolute right-6 top-6">
          <img
            src="./images/close-black.png"
            className="w-5 cursor-pointer dark:hidden"
          />
          <img
            src="./images/close-white.png"
            className="w-5 cursor-pointer hidden dark:block"
          />
        </div>

        <li>
          <a href="#top">Home</a>
        </li>
        <li>
          <a href="#about">About me</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#work" />
          <a href="#contact"></a>
        </li>
        <li>
          <a href="#contact">Contact me</a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
