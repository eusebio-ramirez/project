import React from 'react';
import { Container } from 'react-bootstrap';
import { useTheme } from '../../context/ThemeContext';

export const FooterComponent = () => {
  const { theme } = useTheme();

  return (
    <footer 
      className={`${theme === 'dark' ? 'text-light' : 'bg-dark text-light'} py-4`} 
      style={{
        width: '100%',
        minHeight: '10vh',
        marginTop: 'auto',
        backgroundColor: theme === 'dark' ? '#A02142' : '#343a40' 
      }}
    >
      <Container>
        <p className="text-center mb-0">© 2024 Mi Sitio. Todos los derechos reservados.</p>
      </Container>
    </footer>
  );
};