import { createContext, useState, useContext, useEffect } from "react";

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  const updateFavorites = (freshFavorites) => {
    setFavorites(freshFavorites);
    localStorage.setItem("favorites", JSON.stringify(freshFavorites));
  };

  const toggleFavorite = (fact) => {
    if (favorites.includes(fact)) {
      const newFavorites = favorites.filter((item) => item !== fact);
      updateFavorites(newFavorites);
    } else {
      const newFavorites = [...favorites, fact];
      updateFavorites(newFavorites);
    }
  };

  const isFavorite = (fact) => {
    return favorites.includes(fact);
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, toggleFavorite, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  return useContext(FavoritesContext);
};
