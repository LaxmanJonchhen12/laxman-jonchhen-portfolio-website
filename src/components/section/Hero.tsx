import React from 'react'

function Hero() {
  return (
    <section className='w-full py-16 md:py-20 2xl:py-24 dark:bg-primary-black' id='hero'>
        <div className='mx-auto flex w-full max-w-7xl  gap-6 px-4 md:gap-12 md:px-8'>
            <div className='flex flex-col items-start justify-start gap-x-12'>
                    <div className='flex flex-col items-start justify-start gap-y-2'>
                        <h1 className='lg:text-6xl dark:text-primary-white font-bold'>
                            Hi, I&apos;m Laxman 👋
                        </h1>
                        <p className='dark:text-primary-gray text-base font-normal max-w-[700px]'>
                        I&apos;m a passionate Front-end Developer with two years of experience creating pixel-perfect, user-focused web applications. I specialize in transforming detailed designs into responsive, functional interfaces that enhance user experiences. Driven by innovation, I thrive on solving challenges and crafting seamless, visually appealing digital solutions.
                        </p>
                    </div>
            </div>
        </div>
    </section>
  )
}

export default Hero