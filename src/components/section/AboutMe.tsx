import SectionIntro from "../SectionIntro"
import Image from "next/image"

function AboutMe() {
  return (
    <section className="w-full py-16 md:py-20 2xl:py-24 dark:bg-primary-black" id="about">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 md:gap-12 md:px-8">
                <SectionIntro
                introTitle="About me" 
                />
                <div className="flex  w-full flex-col justify-between gap-12 md:flex-row">
                    <div>
                        <Image
                        src="/images/laxman jonchhen.jpg"
                        alt="laxman jonchhen"
                        width={400}
                        height={380}
                        />
                    </div>
                    <div className="flex flex-col items-start justify-start">
                        <h2 className="text-primary-white text-3xl font-semibold mb-6">
                          Curious about Me? Here you Have it 
                        </h2>
                        <div
                        className="flex flex-col items-start justify-start gap-y-4"
                        > 
                          <p
                          className="dark:text-primary-gray text-base font-normal max-w-[585px] "
                          >
                          Hello! I’m a frontend developer with a focus on transforming creative ideas into fully functional web applications. With 2 years of hands-on experience in React.js, Next.js, TypeScript, JavaScript, HTML, and CSS, I’ve developed a keen eye for user experience and a passion for pixel-perfect design.
                          </p>
                          <p
                          className="dark:text-primary-gray text-base font-normal max-w-[585px]"
                          >
                            I began my journey as a developer on July 17, 2022. Since then, I’ve been expanding my skill set, learning new technologies, and overcoming various challenges. In my early 20s, I’m currently using React, Next.js, and Tailwind CSS to build modern, responsive applications.
                          </p>
                          <p
                          className="dark:text-primary-gray text-base font-normal max-w-[585px]"
                          >
                            When I’m not coding, you’ll find me cheering on my favorite football teams or diving into documentaries. I’m always eager to collaborate, so whether it&apos;s freelance work or a new job opportunity, let’s connect and make great things happen!
                          </p>
                        </div>
                    </div>
                </div>
        </div>
    </section>
  )
}

export default AboutMe