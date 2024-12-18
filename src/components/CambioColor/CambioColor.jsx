import React from 'react';
import { useTheme } from '../../context';

export const CambioColor = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button 
      className={`btn ${theme === 'dark' ? 'btn-light' : 'btn-dark'} btn-sm position-fixed bottom-0 start-0 m-3 rounded-circle`} 
      onClick={toggleTheme}
      style={{
        zIndex: 1000,
        width: '50px',
        height: '50px',
        padding: '0',
        border: `2px solid ${theme === 'dark' ? '#fff' : '#000'}`,
        boxShadow: `0 0 10px ${theme === 'dark' ? 'rgba(255,255,255,0.5)' : '#fff'}`,
        fontSize: '1.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '60px'
      }}
      title={theme === 'dark' ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
    >
      {theme === 'dark' ? '☀️' : '🌙'}
    </button>
  );
};