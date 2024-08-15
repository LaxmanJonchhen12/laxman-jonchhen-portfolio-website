"use client";
import { useContext } from 'react';
import { inter } from "@/app/ui/fonts";
import { ThemeContext } from '../context/ThemeContext';

interface SectionIntroProps {
    introTitle: string,
}

function SectionIntro({ introTitle }:SectionIntroProps ) {
    const themeContext = useContext(ThemeContext);

    if (!themeContext) {
      return null;
    }
  
    const { theme, toggleTheme } = themeContext;
    console.log(theme);
  return (
    <div className={` bg-secondary-gray dark:bg-tertiary-gray text-tertiary-gray dark:text-primary-gray text-sm font-medium ${inter.className} py-1 px-5 rounded-xl `}>
    {introTitle}
    </div>
  )
}

export default SectionIntro