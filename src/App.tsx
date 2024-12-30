// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import RecipeDetails from './pages/RecipeDetails';
import Recipes from './pages/Recipes'; // Importando a página de receitas
import { receitas } from './data'; // Importando as receitas

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home receitas={receitas} />} />
        {/* Passando as receitas para a página Recipes */}
        <Route path="/receitas" element={<Recipes receitas={receitas} />} />
        <Route path="/detalhes/:id" element={<RecipeDetails receitas={receitas} />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
