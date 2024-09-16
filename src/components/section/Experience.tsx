import React from 'react'
import SectionIntro from '../SectionIntro'
const experienceData = [
  {
    id:1,
    organizationName:"Nest Nepal",
    organizationImage:"",
    jobRole: "Frontend Developer",
    jobTask: [
      "Developed web applications using React.js, Next.js, and Tailwind CSS, ensuring responsiveness and optimal performance.",
      "Collaborated with designers to translate UI/UX designs into efficient, clean code, enhancing user experience across various projects.",
      "Integrated APIs and optimized front-end performance to ensure smooth interactions across the application.",
      "Mentored a junior developer, providing guidance on best practices and code reviews."
    ],
    jobDate: "Nov 2023 - Present",
  },
  {
    id:2,
    organizationName:"Cashkar",
    organizationImage:"",
    jobRole: "Frontend Developer",
    jobTask: [
      "Designed and implemented intuitive UIs for both the website and mobile app, following modern design trends to improve user experience.",
      "Utilized HTML, JavaScript, and CSS to translate designs into functional, well-structured front-end code.",
      "Improved existing website functionalities, ensuring a more seamless and user-friendly interface."
    ],
    jobDate: "Mar 2023 - Jun 2023",
  },
  {
    id:1,
    organizationName:"Mining Infosys",
    organizationImage:"",
    jobRole: "Junior Frontend Developer",
    jobTask: [
      "Redesigned the company's website with a focus on modernizing the user interface, enhancing both the visual appeal and usability.",
      "Developed user-friendly and responsive front-end solutions using HTML, CSS, and JavaScript, contributing to a more engaging user experience.",
      "Supported additional front-end projects, gaining experience in cross-functional collaboration and front-end development best practices."
    ],
    jobDate: "Jul 2022 - Mar 2023",
  }
]

function ExperienceCard() {
    return(
      <div className='flex flex-col items-start justify-start gap-y-6 mt-6'>
          {
            experienceData.map((experience) => (
              <div 
              key={experience.id}
              className='dark:bg-ascent-gray dark:shadow-2xl shadow-md bg-white rounded-xl p-8 flex flex-col md:flex-row items-start justify-start gap-y-4'
              >
                <h2 className='dark:text-white text-black'>
                  {experience.organizationName}
                </h2>
                <p className='text-base dark:text-secondary-gray font-normal'>
                  {experience.jobDate}
                </p>
                <p className='text-lg font-semibold dark:text-primary-gray '>
                  {experience.jobRole}
                </p>
                <ul className='list-disc'>
                  {
                    experience.jobTask.map((task) => (
                      <li 
                      key={task}
                      className='dark:text-primary-gray text-base font-normal gap-2'
                      >
                        {task}
                      </li>
                    ))
                  }
                </ul>
              </div>
            ))
          }
      </div>
    )
}

function Experience() {
  return (
    <section className='flex flex-col items-center justify-center px-4 py-16 md:py-20  md:px-20 dark:bg-primary-black bg-primary-gray'>
        <SectionIntro introTitle='Experience' />
        <p
      className="dark:text-primary-gray text-center md:text-left text-tertiary-gray text-lg font-normal pt-4"
      >
        Here is a quick summary of my most recent experiences:
      </p>
      <ExperienceCard />
    </section>
  )
}

export default Experience