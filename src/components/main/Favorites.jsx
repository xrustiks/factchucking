import { useFavorites } from '../../hooks/FavoritesContext.jsx';

const Favorites = () => {
  const { favorites, setFavorites } = useFavorites();

  const removeFavorite = (fact) => {
    setFavorites(favorites.filter(f => f !== fact));
  };

  return (
    <div class = 'favorites'>
      <h2>Favorites</h2>

      {favorites.length > 0 ? (
        <ul className = "favorites-list">
          {favorites.map((fact, index) => (
            <li key = {index}>
              {fact}
              <div className = "remove-favorite" onClick={() => removeFavorite(fact)}>Remove</div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No favorite facts</p>
      )}
    </div>
  );
}

export default Favorites;
