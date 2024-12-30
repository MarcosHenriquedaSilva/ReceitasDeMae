// src/pages/Home.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { receitas } from '../data'; // Certifique-se de que você está importando corretamente

const Home: React.FC = () => {
  return (
    <div>
      <header>
        <h1>Receitas da Mãe</h1>
        <p>Deliciosas receitas caseiras para você!</p>
      </header>

      <section>
        <h2>Receitas Populares</h2>
        <div className="recipes-list">
          {receitas.map((receita) => (
            <div className="recipe-card" key={receita.id}>
              <img
                src={`https://via.placeholder.com/150?text=${receita.nome}`} // Coloque uma imagem real depois
                alt={receita.nome}
                className="recipe-image"
              />
              <h3>{receita.nome}</h3>
              <p>{receita.ingredientes.slice(0, 2).join(', ')}...</p>
              <Link to={`/detalhes/${receita.id}`} className="btn-view-details">
                Ver Detalhes
              </Link>
            </div>
          ))}
        </div>
      </section>

      <footer>
        <p>&copy; 2024 Receitas da Mãe</p>
      </footer>
    </div>
  );
};

export default Home;
