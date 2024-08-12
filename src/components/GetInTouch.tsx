
"use client";
import { inter } from "@/app/ui/fonts";
import Image from "next/image";
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
function GetInTouch() {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    return null;
  }

  const { theme, toggleTheme } = themeContext;
  console.log(theme);

  return (
    <div className=' bg-primary-white dark:bg-secondary-black flex flex-col items-center justify-center py-16 md:py-24 px-4'>
      <div className={` bg-secondary-gray dark:bg-tertiary-gray text-tertiary-gray dark:text-primary-gray text-sm font-medium ${inter.className} py-1 px-5 rounded-xl `}>
        Get in touch
      </div>
      <p
      className={` text-tertiary-gray dark:text-primary-gray text-xl font-normal ${inter.className} mt-4 max-w-[343px] md:max-w-[576px] text-center  `}
      >
      What&apos;s next? Feel free to reach out to me if you&apos;re looking for a developer, have a query, or simply want to connect.
      </p>
      <div className="flex items-center justify-start mt-6 md:mt-12 gap-x-4 md:gap-x-5">
        {
          theme === "dark" &&
          (
            <>
              <Image
              src="/images/getintouch/email-mobile.svg"
              alt="email icon"
              width={24}
              height={24}
              className=" block md:hidden"
              />
              <Image
              src="/images/getintouch/email-desktop.svg"
              alt="email icon"
              width={32}
              height={32}
              className=" hidden md:block"
              />
            </>
          )
        }
        {
          theme === "light" &&
          <>
              <Image
              src="/images/getintouch/email-light-mobile.svg"
              alt="email icon"
              width={24}
              height={24}
              className=" block md:hidden"
              />
              <Image
              src="/images/getintouch/email-light-desktop.svg"
              alt="email icon"
              width={32}
              height={32}
              className=" hidden md:block"
              />
          </>
        }
        <p
        className={` font-semibold text-primary-black dark:text-primary-white text-lg md:text-4xl ${inter.className} `}
        >
          laxmanjonchhen@gmail.com
        </p>
        {
          theme === "dark" &&
          <>
            <Image
            src="/images/getintouch/copy-mobile.svg"
            alt="copy icon"
            width={36}
            height={36}
            className=" block md:hidden"
            />
            <Image
            src="/images/getintouch/copy-desktop.svg"
            alt="copy icon"
            width={44}
            height={44}
            className=" hidden md:block"
            />
          </>
        }
        {
          theme === "light" &&
          <>
            <Image
            src="/images/getintouch/copy-light-mobile.svg"
            alt="copy icon"
            width={36}
            height={36}
            className=" block md:hidden"
            />
            <Image
            src="/images/getintouch/copy-light-desktop.svg"
            alt="copy icon"
            width={44}
            height={44}
            className=" hidden md:block"
            />
          </>
        }
      </div>
      <div className="flex items-center justify-start gap-x-4 md:gap-x-5 mt-[4px] md:mt-[16px]">
        {
          theme === "dark" && (
            <>
              <Image
              src="/images/getintouch/call-mobile.svg"
              alt="call icon"
              width={24}
              height={24}
              className=" block md:hidden"
              />
              <Image
              src="/images/getintouch/call-desktop.svg"
              alt="call icon"
              width={32}
              height={32}
              className=" hidden md:block"
              />
            </>
          )
        }
        {
          theme === "light" && (
            <>
              <Image
              src="/images/getintouch/call-light-mobile.svg"
              alt="call icon"
              width={24}
              height={24}
              className=" block md:hidden"
              />
              <Image
              src="/images/getintouch/call-light-desktop.svg"
              alt="call icon"
              width={32}
              height={32}
              className=" hidden md:block"
              />
            </>
          )
        }
        <p
        className={` font-semibold text-primary-black dark:text-primary-white text-lg md:text-4xl ${inter.className} `}
        >
          +977&nbsp;9861287158
        </p>
        {
          theme === "dark" &&
          <>
            <Image
            src="/images/getintouch/copy-mobile.svg"
            alt="copy icon"
            width={36}
            height={36}
            className=" block md:hidden"
            />
            <Image
            src="/images/getintouch/copy-desktop.svg"
            alt="copy icon"
            width={44}
            height={44}
            className=" hidden md:block"
            />
          </>
        }
        {
          theme === "light" &&
          <>
            <Image
            src="/images/getintouch/copy-light-mobile.svg"
            alt="copy icon"
            width={36}
            height={36}
            className=" block md:hidden"
            />
            <Image
            src="/images/getintouch/copy-light-desktop.svg"
            alt="copy icon"
            width={44}
            height={44}
            className=" hidden md:block"
            />
          </>
        }
      </div>
      <p className={` text-base font-normal text-tertiary-gray dark:text-primary-gray mt-6 md:mt-12 `}>
        You may also find me on these platforms!
      </p>
      <div className="mt-2">
        <div className="bg-white h-[10] w-[10] hover:bg-gray-active">
        {
          theme === "dark" && (
            <a 
            href="https://github.com/LaxmanJonchhen12" 
            target="_blank"
            className="hover:bg-gray-active"
            >
              <Image
              src="/images/getintouch/github-dark.svg"
              alt="github icon"
              width={36}
              height={36}
              />
           </a>
          )
        }
        </div>
        {
          theme === "dark" && (
            <a 
            href="https://github.com/LaxmanJonchhen12" 
            target="_blank"
            className="hover:bg-gray-active"
            >
              <Image
              src="/images/getintouch/github-dark.svg"
              alt="github icon"
              width={36}
              height={36}
              />
           </a>
          )
        }
        {
          theme === "light" && (
              <a href="https://github.com/LaxmanJonchhen12" target="_blank">
                <Image
                src="/images/getintouch/github-light-desktop.svg"
                alt="github icon"
                width={36}
                height={36}
                />
             </a>
          )
         }
      </div>

    </div>
  )
}

export default GetInTouch