import { useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import Footer from './components/footer/Footer.jsx';
import Main from './components/main/Main.jsx';
import Header from './components/header/Header.jsx';
import Favorites from './components/main/Favorites.jsx';
import { FavoritesProvider } from './hooks/FavoritesContext.jsx';

import './App.css';

function App() {
  const [category, setCategory] = useState('');

  return (
    <FavoritesProvider>
      <BrowserRouter>
        <ConditionalHeader chooseCategory={setCategory} />

        <Routes>
          <Route path="/" element={ <Main category={category} /> } />
          <Route path="/favorites" element={ <Favorites /> } />
        </Routes>
        
        <ConditionalFooter />
      </BrowserRouter>
    </FavoritesProvider>
  );
}

const ConditionalHeader = ({ chooseCategory }) => {
  const location = useLocation();
  if (location.pathname !== '/favorites') {
    return <Header chooseCategory={chooseCategory} />;
  }
  return null;
};

const ConditionalFooter = ({ chooseCategory }) => {
  const location = useLocation();
  if (location.pathname !== '/favorites') {
    return <Footer />;
  }
  return null;
};

export default App;