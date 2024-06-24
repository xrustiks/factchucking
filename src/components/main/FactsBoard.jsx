import { useFavorites } from '../../contexts/FavoritesContext.jsx';

const FactsBoard = ({ fact }) => {
  const { toggleFavorite, isFavorite } = useFavorites();

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