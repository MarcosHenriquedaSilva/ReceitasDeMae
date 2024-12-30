// src/pages/Recipes.tsx
import React from 'react';
import { Link } from 'react-router-dom';

// Definindo a interface para uma receita
interface Receita {
  id: number;
  nome: string;
  ingredientes: string[];
}

// Definindo a interface para as props do componente Recipes
interface RecipesProps {
  receitas: Receita[];
}

const Recipes: React.FC<RecipesProps> = ({ receitas }) => {
  return (
    <div>
      <header>
        <h1>Receitas da Mãe</h1>
        <p>Explore nossas receitas deliciosas!</p>
      </header>

      <section>
        <h2>Lista de Receitas</h2>
        <div className="recipes-list">
          {receitas.length > 0 ? (
            receitas.map((receita) => (
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
            ))
          ) : (
            <p>Não há receitas disponíveis no momento.</p>
          )}
        </div>
      </section>

      <footer>
        <p>&copy; 2024 Receitas da Mãe</p>
      </footer>
    </div>
  );
};

export default Recipes;
