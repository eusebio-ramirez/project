import React from 'react';
import { useTheme } from '../../context/themeContext';

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      onClick={toggleTheme}
      style={{
        position: 'fixed',
        bottom: '20px', 
        right: '20px', 
        width: '40px',
        height: '40px',
        borderRadius: '50%', 
        backgroundColor: theme === 'light' ? '#000' : '#fff', 
        color: theme === 'light' ? '#fff' : '#000', 
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', 
        cursor: 'pointer',
        zIndex: 1000, 
        transition: 'all 0.3s ease', 
      }}
    >
      {theme === 'light' ? (
        <span style={{ fontSize: '20px' }}>🌙</span> 
      ) : (
        <span style={{ fontSize: '20px' }}>☀️</span> 
      )}
    </div>
  );
};

export default ThemeToggleButton;
