import React, { createContext, useState, useContext, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const storedTheme = localStorage.getItem('theme') || 'light'; 
  const [theme, setTheme] = useState(storedTheme);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);  
  };

  useEffect(() => {
    const body = document.body;
    if (theme === 'light') {
      body.classList.add('bg-light', 'text-dark');
      body.classList.remove('bg-dark', 'text-light');
    } else {
      body.classList.add('bg-dark', 'text-light');
      body.classList.remove('bg-light', 'text-dark');
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
