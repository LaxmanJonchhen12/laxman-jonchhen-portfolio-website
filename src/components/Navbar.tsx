
"use client";
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Navbar = () => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    return null;
  }

  const { theme, toggleTheme } = themeContext;

  return (
    <nav className="p-4">
      <button onClick={toggleTheme} className="bg-red-400 dark:bg-gray-800 p-2 rounded">
        {theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
      </button>
    </nav>
  );
};

export default Navbar;
