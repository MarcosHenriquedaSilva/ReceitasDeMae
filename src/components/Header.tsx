// src/components/Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>Receitas da Mãe</h1>
      </div>
      <nav className="navbar">
        <Link to="/">Início</Link>
        <Link to="/detalhes">Receitas</Link>
      </nav>
    </header>
  );
};

export default Header;
