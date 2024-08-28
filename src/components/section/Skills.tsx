
"use client";
import React from 'react'
import SectionIntro from '../SectionIntro';
import Image from "next/image";
import { useContext } from 'react';
import { ThemeContext } from '@/context/ThemeContext';
const technologyData = [
  {
    name:"JavaScript",
    lightLogo: "/images/technologies/js-light.svg",
    darkLogo: "/images/technologies/js-dark.svg",
    techLink: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    imgWidth: 64,
    imgHeight: 64
  },
  {
    name:"Typescript",
    lightLogo: "/images/technologies/ts-light.svg",
    darkLogo: "/images/technologies/ts-dark.svg",
    techLink: "https://www.typescriptlang.org/",
    imgWidth: 65,
    imgHeight: 64
  },
  {
    name:"React",
    lightLogo: "/images/technologies/react-light.svg",
    darkLogo: "/images/technologies/react-dark.svg",
    techLink: "https://react.dev/",
    imgWidth: 71,
    imgHeight: 64
  },
  {
    name:"Next JS",
    lightLogo: "/images/technologies/nextjs-light.svg",
    darkLogo: "/images/technologies/nextjs-dark.svg",
    techLink:"https://nextjs.org/",
    imgWidth: 65,
    imgHeight: 64
    
  },
  {
    name:"Sass/Scss",
    lightLogo: "/images/technologies/scss-light.svg",
    darkLogo: "/images/technologies/scss-dark.svg",
    techLink: "https://sass-lang.com/",
    imgWidth: 65,
    imgHeight: 64
  },
  {
    name:"Tailwindcss",
    lightLogo: "/images/technologies/tailwind-light.svg",
    darkLogo: "/images/technologies/tailwind-dark.svg",
    techLink: "https://tailwindcss.com/",
    imgWidth: 106,
    imgHeight: 64
  },
  {
    name:"Git",
    lightLogo: "/images/technologies/git-light.svg",
    darkLogo: "/images/technologies/git-dark.svg",
    techLink: "https://git-scm.com/",
    imgWidth: 64,
    imgHeight: 64
  },
]
function Skills() {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    return null;
  }

  const { theme, toggleTheme } = themeContext;
  return (
    <section className=' bg-primary-white dark:bg-secondary-black px-20 py-24'>
        <div className='flex flex-col items-center justify-center gap-y-4'>
            <SectionIntro introTitle='Skills' />
            <p className='text-xl font-normal text-tertiary-gray dark:text-primary-gray'>
            The skills, tools and technologies I am really good at:
            </p>
        </div>
        <div className='grid grid-cols-3 md:mt-12 gap-y-4 md:grid-cols-6 lg:grid-cols-7 md:gap-y-8 lg:gap-y-12'>
          {
            technologyData.map((technologies) => (
              <div
               key={technologies.name}
               className='flex flex-col gap-2 items-center justify-start'
               >
                <a 
                href={technologies.techLink}
                target='_blank'
                >
                  {
                    theme === "dark" ?
                    <Image
                    src={technologies.darkLogo}
                    alt={technologies.name}
                    width={technologies.imgWidth}
                    height={technologies.imgHeight}
                    className='transition-transform duration-300 md:hover:scale-110'
                    /> 
                    :
                    <Image
                    src={technologies.lightLogo}
                    alt={technologies.name}
                    width={technologies.imgWidth}
                    height={technologies.imgHeight}
                    className='transition-transform duration-300 md:hover:scale-110'
                    /> 
                  }
                </a>
                <p className=' text-tertiary-gray dark:text-primary-gray text-lg font-normal'>
                  {technologies.name}
                </p>
              </div>
            ))
          }
        </div>
    </section>
  )
}

export default Skills