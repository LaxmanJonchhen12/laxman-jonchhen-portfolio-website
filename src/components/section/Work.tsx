
"use client"
import SectionIntro from "../SectionIntro";
import Image from "next/image";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
const projectData = [
    {
        id:1,
        projectImage:"/images/works/gyansar.png",
        projectName: "Gyansar",
        projectDescription: "a complete educational study material site for student where  students can find notes, exercises and community support.",
        technologiesUsed:["HTML","CSS","JavaScript","Bootstrap"],
        githubLink:"https://github.com/LaxmanJonchhen12/gyansar",
        liveLink:"https://gyansar.netlify.app/",
    },
    {
        id:2,
        projectImage:"/images/works/mining-infosys.png",
        projectName: "Mining Infosys",
        projectDescription: "Website created for mining infosys during tenure at mining infoys as frontend developer. Revamped the site",
        technologiesUsed:["HTML","CSS","JavaScript","Bootstrap"],
        githubLink:"https://github.com/LaxmanJonchhen12/mining-infosys-site",
        liveLink:"https://mininginfosys.com/",
    },
    {
        id:3,
        projectImage:"/images/works/ramesh-kharbuja.png",
        projectName: "Ramesh Kharbuja Portfolio Site",
        projectDescription: "Portfolio site Created for Ramesh Kharbuja",
        technologiesUsed:["HTML","CSS","JavaScript","Bootstrap"],
        githubLink:"https://github.com/LaxmanJonchhen12/ramesh-kharbuja-portfolio",
        liveLink:"https://rameshkharbuja.com.np/",
    }
]

export function ProjectCard() {
    const themeContext = useContext(ThemeContext);

    if (!themeContext) {
      return null;
    }
  
    const { theme, toggleTheme } = themeContext;
    return(
        <section
        id="work" 
        className="flex flex-col items-start justify-start gap-y-6 gap-x-0 mt-6 md:gap-y-12 md:gap-x-none md:mt-12">
            {/* my works improvements left */}
            {
                projectData.map((projectData) => (
                    <div 
                    key={projectData.id}
                    className="flex flex-col md:flex-row items-center justify-center"
                    >
                        <div className="dark:bg-tertiary-gray bg-primary-gray p-6 md:p-8 rounded-t-xl rounded-l-none md:rounded-t-none md:rounded-l-xl">
                            <Image
                            src={projectData.projectImage}
                            alt={projectData.projectName}
                            width={480}
                            height={384}
                            className="mx-auto md:mx-0 transition-transform duration-500 md:hover:scale-105"
                            />
                        </div>
                        <div className="dark:bg-ascent-gray bg-primary-white rounded-b-xl md:rounded-none px-6 py-8 flex flex-col items-start justify-start gap-y-6 md:rounded-r-xl  ">
                            <p className="dark:text-primary-white text-primary-black font-semibold ">
                                {projectData.projectName}
                            </p>
                            <p className="dark:text-primary-gray text-tertiary-gray font-normal text-base md:max-w-[480px]">
                                {projectData.projectDescription}
                            </p>
                            <div className="flex items-start justify-start flex-wrap gap-2">
                                {
                                    projectData.technologiesUsed.map((technologies) => (
                                        <SectionIntro 
                                        introTitle={technologies} 
                                        key={technologies}
                                        />
                                    ))
                                }
                            </div>
                            <div className="flex items-start justify-start gap-x-2">
                                <div className="flex items-center justify-start">
                                     {
                                    theme === "dark" && (
                                        <Image
                                        src="/images/works/live-preview-dark.svg"
                                        alt="live preview"
                                        width={36}
                                        height={36}
                                        />
                                    )
                                    }
                                    {
                                    theme === "light" && (
                                        <Image
                                        src="/images/works/live-preview-light.svg"
                                        alt="live preview"
                                        width={36}
                                        height={36}
                                        />
                                    )
                                    }
                                    <a 
                                    href={projectData.liveLink}
                                    target="_blank"    
                                    className="text-base dark:text-primary-white dark:hover:text-blue-600">
                                        Live Preview 
                                    </a>
                                </div>
                                <div className="flex items-center justify-start">
                                {
                                theme === "dark" && (
                                    <Image
                                    src="/images/getintouch/github-dark.svg"
                                    alt="github icon"
                                    width={36}
                                    height={36}
                                    />
                                )
                                }
                                {
                                theme === "light" && (
                                    <Image
                                    src="/images/getintouch/github-light-desktop.svg"
                                    alt="github icon"
                                    width={36}
                                    height={36}
                                    />
                                )
                                }
                                    <a 
                                    href={projectData.githubLink}
                                    target="_blank"    
                                    className="text-base dark:text-primary-white dark:hover:text-blue-600">
                                        View Code
                                    </a>
                                </div>
                        </div>
                        </div>
                    </div>
                ))
            }

        </section>
    )
}
function Work() {
  return (
    <section 
    id="work"
    className="dark:bg-secondary-black py-16 px-4 flex flex-col items-center justify-center "
    >
        <SectionIntro introTitle="Work" />
        <p
        className="text-tertiary-gray dark:text-primary-gray text-lg font-normal pt-4"
        >
            Some noteworthy projects I have built:
        </p>
        <ProjectCard />
    </section>
  )
}

export default Work