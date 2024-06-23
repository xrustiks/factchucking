import { useFavorites } from '../../hooks/FavoritesContext.jsx';

const FactsBoard = ({ fact }) => {
  const { favorites, setFavorites } = useFavorites();

  const toggleFavorite = (fact) => {
    if (favorites.includes(fact)) {
      setFavorites(favorites.filter(f => f !== fact));
    } else {
      setFavorites([...favorites, fact]);
    }
  };

  // Returns true or false depending on whether the fact is in favorites or not
  const isFavorite = (fact) => {
    return favorites.includes(fact);
  };

  return (
    <>
      <div className = "facts-board">
        <div className = "heart" onClick={() => toggleFavorite(fact)}>
          { isFavorite(fact) ? '♥' : '♡' }
        </div>

        { fact }
      </div>
    </>
  )
}

export default FactsBoard;