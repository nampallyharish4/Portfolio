import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="group relative p-2 hover:scale-105 transition-transform duration-300 focus:outline-none"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <div
        className={`relative w-14 h-7 rounded-full transition-colors duration-500 ease-in-out ${
          theme === 'light'
            ? 'bg-slate-200 shadow-inner'
            : 'bg-slate-700 shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)]'
        }`}
      >
        <div
          className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full shadow-md transform transition-all duration-500 cubic-bezier(0.4, 0.0, 0.2, 1) flex items-center justify-center ${
            theme === 'dark' ? 'translate-x-7' : 'translate-x-0'
          }`}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            <Sun
              className={`absolute w-3.5 h-3.5 text-yellow-500 transition-all duration-500 ${
                theme === 'light'
                  ? 'rotate-0 opacity-100 scale-100'
                  : '-rotate-90 opacity-0 scale-0'
              }`}
            />
            <Moon
              className={`absolute w-3.5 h-3.5 text-blue-600 transition-all duration-500 ${
                theme === 'dark'
                  ? 'rotate-0 opacity-100 scale-100'
                  : 'rotate-90 opacity-0 scale-0'
              }`}
            />
          </div>
        </div>
      </div>
    </button>
  );
};

export default ThemeToggle;
