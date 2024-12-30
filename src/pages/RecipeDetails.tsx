// src/pages/RecipeDetails.tsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const RecipeDetails: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <div>
      <header>
        <h1>Detalhes da Receita</h1>
      </header>
      <section>
        <h2>Receita {id}</h2>
        <p>Detalhes da receita {id} irão aqui...</p>
        <button onClick={handleBackClick} className="btn-back">Voltar para a Página Principal</button>
      </section>
      <footer>
        <p>&copy; 2024 Receitas da Mãe</p>
      </footer>
    </div>
  );
};

export default RecipeDetails;
