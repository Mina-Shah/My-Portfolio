// ThemeToggle.jsx
import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react'; 

export default function ThemeToggle() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const saved = localStorage.getItem('theme') || 'light';
    setTheme(saved);
    document.documentElement.classList.toggle('dark', saved === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    localStorage.setItem('theme', newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center gap-2 px-4 py-2 sm: mr-5 lg:mr-60 border border-teal-600 dark:border-white rounded-full text-sm font-medium transition-all bg-slate-50 dark:bg-gray-800 dark:text-white hover:bg-teal-400 dark:hover:bg-teal-400"
    >
      {theme === 'light' ? <Moon size={16} color='teal'/> : <Sun size={16} />}
    </button>
  );
}
