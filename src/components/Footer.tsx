// src/components/Footer.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <p>&copy; 2024 Receitas da Mãe</p>
      <nav>
        <Link to="/">Início</Link> | <Link to="/detalhes">Receitas</Link>
      </nav>
    </footer>
  );
};

export default Footer;
