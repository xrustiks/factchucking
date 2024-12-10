import { useFavorites } from "../../contexts/FavoritesContext.jsx";

const Favorites = () => {
  const { favorites, toggleFavorite } = useFavorites();

  const removeFavorite = (fact) => {
    toggleFavorite(fact);
  };

  return (
    <div className="favorites">
      <h2>Favorites</h2>

      {favorites.length > 0 ? (
        <ul className="favorites-list">
          {favorites.map((fact, index) => (
            <li key={index}>
              {fact}
              <div
                className="button favorite-button"
                onClick={() => removeFavorite(fact)}
              >
                Remove
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No favorite facts</p>
      )}
    </div>
  );
};

export default Favorites;
