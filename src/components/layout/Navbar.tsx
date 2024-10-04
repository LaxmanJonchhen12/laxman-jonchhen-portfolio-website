"use client";
import { useContext } from 'react';
import { ThemeContext } from '@/context/ThemeContext';
import Link from 'next/link'
import Image from 'next/image'
function Navbar() {

  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    return null;
  }

  const { theme, toggleTheme } = themeContext;

  console.log(theme);

  const navLinks = [
    {
      id:1,
      linkTitle: "About",
      linkRoute: "#about",
    },
    {
      id:2,
      linkTitle: "Work",
      linkRoute: "#work",
    },
    {
      id:3,
      linkTitle: "Testimonials",
      linkRoute: "#testimonials",
    },
    {
      id:4,
      linkTitle: "Contact",
      linkRoute: "#contact",
    }
  ]

  return (
    <nav
    className='dark:bg-secondary-black bg-white px-20 py-4'
    >
        <div className='flex items-start justify-between w-full px-8'>
                <div>
                    <Link
                    href="/"
                    >
                        <h1
                        className='dark:text-primary-white text-primary-black  text-3xl font-bold'
                        >
                            {'<LJ />'}
                        </h1>
                    </Link>
                </div>
                <div
                className='flex items-center justify-start gap-x-[6px]'
                >
                    <div
                    className='flex items-start justify-start gap-x-6 border-r border-solid border-[#1F2937] pe-6 '
                    >
                        {
                          navLinks.map((navLinks) => (
                            <a
                            key={navLinks.id}
                            className='dark:text-primary-gray dark:hover:text-white text-tertiary-gray hover:text-primary-black  transition-all '
                            href={navLinks.linkRoute}
                            > 
                              {navLinks.linkTitle}
                            </a>
                          ))
                        }
                    </div>
                    <div
                    className='flex items-center justify-start gap-x-4'
                    >
                      <button
                      onClick={toggleTheme}
                      >
                        {
                          theme === "dark"?
                          <Image
                          src="/images/icons/light_mode.svg"
                          alt="light mode"
                          width={36}
                          height={36}
                          />
                          :
                          <Image
                          src="/images/icons/dark_mode.svg"
                          alt="light mode"
                          width={36}
                          height={36}
                          />
                        }
                      </button>
                      <a
                      href="https://drive.google.com/file/d/1t_iwAapSkPHN4k6EqKqZugPvaIkoHYdK/view?usp=sharing" 
                      target='_blank'
                      className='text-primary-black font-medium dark:bg-primary-gray py-1.5 px-4 rounded-xl hover:bg-gray-600 transition-colors duration-200  '>
                        Download CV
                      </a>
                    </div>
                </div>
        </div>
    </nav>
  )
}

export default Navbar