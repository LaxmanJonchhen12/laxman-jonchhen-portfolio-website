"use client";
import { useContext, useState } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import Link from "next/link";
import Image from "next/image";
function Navbar() {
  const themeContext = useContext(ThemeContext);

  const [showMobileMenu, setShowMobileMenu] = useState(false);

  if (!themeContext) {
    return null;
  }

  const { theme, toggleTheme } = themeContext;

  const navLinks = [
    {
      id: 1,
      linkTitle: "About",
      linkRoute: "#about",
    },
    {
      id: 2,
      linkTitle: "Work",
      linkRoute: "#work",
    },
    {
      id: 3,
      linkTitle: "Testimonials",
      linkRoute: "#testimonials",
    },
    {
      id: 4,
      linkTitle: "Contact",
      linkRoute: "#contact",
    },
  ];

  return (
    <nav className=" z-[30] dark:bg-secondary-black bg-white md:px-20 py-4 sticky top-0 w-full md:h-fit overflow-hidden md:overflow-visible ">
      <div className="flex items-start justify-between w-full sm:pb-4 md:pb-0 px-4 md:px-8">
        <div>
          <Link href="/">
            <h1 className="dark:text-primary-white text-primary-black text-2xl md:text-3xl font-bold">
              {"<LJ />"}
            </h1>
          </Link>
        </div>
        <div className=" hidden md:flex items-center justify-start gap-x-[6px]">
          <div className="flex items-start justify-start gap-x-6 border-r border-solid border-[#1F2937] pe-6 ">
            {navLinks.map((navLinks) => (
              <a
                key={navLinks.id}
                className="dark:text-primary-gray dark:hover:text-white text-tertiary-gray hover:text-primary-black  transition-all "
                href={navLinks.linkRoute}
              >
                {navLinks.linkTitle}
              </a>
            ))}
          </div>
          <div className="flex items-center justify-start gap-x-4">
            <button onClick={toggleTheme}>
              {theme === "dark" ? (
                <Image
                  src="/images/icons/light_mode.svg"
                  alt="light mode"
                  width={36}
                  height={36}
                />
              ) : (
                <Image
                  src="/images/icons/dark_mode.svg"
                  alt="light mode"
                  width={36}
                  height={36}
                />
              )}
            </button>
            {/* {
                        theme === "dark" ?
                        <button className="relative flex justify-center items-center hover:bg-gray-100 active:bg-gray-200 rounded-lg p-1.5 transition-colors duration-200 [&amp;_svg]:stroke-gray-600 [&amp;_svg]:hover:stroke-gray-700 [&amp;_svg]:w-6 [&amp;_svg]:h-6"
                        onClick={toggleTheme}
                        >
                          <Image
                          src="/images/icons/light_mode.svg"
                          alt="light mode"
                          width={36}
                          height={36}
                          />
                          </button>
                        :
                        <button className="relative flex justify-center items-center hover:bg-gray-100 active:bg-gray-200 rounded-lg p-1.5 transition-colors duration-200 [&amp;_svg]:stroke-gray-600 [&amp;_svg]:hover:stroke-gray-700 [&amp;_svg]:w-6 [&amp;_svg]:h-6"
                        onClick={toggleTheme}
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-moon-star"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path><path d="M19 3v4"></path><path d="M21 5h-4"></path></svg>
                          </button>
                      } */}

            <a
              href="https://drive.google.com/file/d/1t_iwAapSkPHN4k6EqKqZugPvaIkoHYdK/view?usp=sharing"
              target="_blank"
              className="dark:text-primary-black text-primary-white font-medium bg-primary-black dark:bg-primary-gray py-1.5 px-4 rounded-xl hover:bg-gray-600 transition-colors duration-200  "
            >
              Download CV
            </a>
          </div>
        </div>
        <button className="block md:hidden"
        onClick={() => {
          setShowMobileMenu(prev => !prev);
        }}
        >
          {
            showMobileMenu?
          <Image
          src="/images/icons/close_dark.svg"
          alt="close icon"
          width={36}
          height={36}
          />
          :
          <Image
          src="/images/icons/hamburger_dark.svg"
          alt="hamburger icon"
          width={36}
          height={36}
        />
          }
        </button>
      </div>
      <div className={` ${showMobileMenu ? 'flex': 'hidden' } h-screen mt-4 overflow-hidden md:hidden flex-col items-start justify-start gap-y-4 `}>
        <div className="flex flex-col items-start justify-start gap-y-4 w-full py-4 border-t-[0.5px] border-b-[0.5px] border-solid border-[#F9FAFB] px-4 md:px-0">
          {navLinks.map((navLinks) => (
            <a
              key={navLinks.id}
              className=" text-base dark:text-primary-gray dark:hover:text-white text-tertiary-gray hover:text-primary-black  transition-all "
              href={navLinks.linkRoute}
            >
              {navLinks.linkTitle}
            </a>
          ))}
        </div>
        
        <div className="flex items-start justify-between w-full">

        <p className="dark:text-primary-gray px-4 md:px-0">Switch Theme</p>
        <button onClick={toggleTheme}>

            {
              theme === "dark" ?
              <Image
              src="/images/icons/light_mode.svg"
              alt="light mode icon"
              width={36}
              height={36}
              />
              :
              <Image
              src="/images/icons/dark_mode.svg"
              alt="dark mode icon"
              width={36}
              height={36}
              />
            }

        </button>
        
        </div>

        
        <a
          href="https://drive.google.com/file/d/1t_iwAapSkPHN4k6EqKqZugPvaIkoHYdK/view?usp=sharing"
          target="_blank"
          className="dark:text-primary-black text-primary-white font-medium bg-primary-black dark:bg-primary-gray py-1.5 px-4 rounded-xl hover:bg-gray-600 transition-colors duration-200 w-[92%] md:w-fit mx-4 text-center  "
        >
          Download CV
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
