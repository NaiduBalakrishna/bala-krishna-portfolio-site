
import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check if dark mode is preferred or stored
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    console.log('Theme initialization:', { savedTheme, prefersDark });
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
      console.log('Dark theme applied on initialization');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
      console.log('Light theme applied on initialization');
    }
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    
    console.log('Theme toggle clicked, switching to:', newIsDark ? 'dark' : 'light');
    
    if (newIsDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      console.log('Dark theme applied');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      console.log('Light theme applied');
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-white/30 shadow-lg relative overflow-hidden"
      aria-label="Toggle theme"
    >
      <div className="relative w-5 h-5">
        <Sun 
          className={`w-5 h-5 absolute inset-0 transition-all duration-500 ${
            isDark 
              ? 'rotate-90 scale-0 opacity-0' 
              : 'rotate-0 scale-100 opacity-100'
          } text-yellow-500`}
        />
        <Moon 
          className={`w-5 h-5 absolute inset-0 transition-all duration-500 ${
            isDark 
              ? 'rotate-0 scale-100 opacity-100' 
              : '-rotate-90 scale-0 opacity-0'
          } text-blue-400`}
        />
      </div>
    </button>
  );
};
