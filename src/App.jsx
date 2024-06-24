import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Footer from './components/footer/Footer.jsx';
import Main from './components/main/Main.jsx';
import Header from './components/header/Header.jsx';
import Favorites from './components/main/Favorites.jsx';
import { FavoritesProvider } from './contexts/FavoritesContext.jsx';
import SearchResults from './components/main/SearchResults.jsx';

import './App.css';

function App() {
  const [category, setCategory] = useState('');

  return (
    <FavoritesProvider>
      <BrowserRouter>
        <Header chooseCategory={setCategory} />

        <Routes>
          <Route path="/" element={ <Main category={category} /> } />
          <Route path="/favorites" element={ <Favorites /> } />
          <Route path="/search" element={ <SearchResults /> } />
        </Routes>

        <Footer />
      </BrowserRouter>
    </FavoritesProvider>
  );
}

export default App;