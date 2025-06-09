import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="group relative p-3 hover:scale-110 transition-all duration-500 smooth-hover cursor-pointer"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {/* Simple toggle container - Completely clean, no borders or effects */}
      <div className="relative w-12 h-6 bg-gray-300 dark:bg-gray-600 rounded-full transition-colors duration-500">
        {/* Sliding indicator - Clean and minimal */}
        <div 
          className={`absolute top-0.5 w-5 h-5 bg-white rounded-full shadow-sm transition-transform duration-500 ease-out ${
            theme === 'dark' ? 'translate-x-6' : 'translate-x-0.5'
          }`}
        >
          {/* Icon container */}
          <div className="absolute inset-0 flex items-center justify-center">
            {theme === 'light' ? (
              <Sun className="w-3 h-3 text-yellow-500 transition-all duration-300" />
            ) : (
              <Moon className="w-3 h-3 text-blue-600 transition-all duration-300" />
            )}
          </div>
        </div>
      </div>
    </button>
  );
};

export default ThemeToggle;