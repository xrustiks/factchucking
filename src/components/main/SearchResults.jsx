import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useFavorites } from "../../contexts/FavoritesContext";

const SearchResults = () => {
  const location = useLocation();
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");
  const { toggleFavorite, isFavorite } = useFavorites();

  const query = new URLSearchParams(location.search).get("query");

  useEffect(() => {
    const fetchResults = async () => {
      if (query) {
        try {
          const response = await fetch(
            `https://api.chucknorris.io/jokes/search?query=${query}`
          );
          const data = await response.json();

          if (response.status === 400 && data.error) {
            setResults([]);
            setError(data.message);
          } else if (data.result.length > 0) {
            setResults(data.result);
            setError("");
          } else {
            setResults([]);
            setError("No results found");
          }
        } catch (error) {
          setResults([]);
          setError("Something whent wrong");
        }
      }
    };

    fetchResults();
  }, [query]);

  return (
    <div>
      <h2>Search Results for "{query}"</h2>
      {error && <p>{error}</p>}
      {results.length > 0 && (
        <ul>
          {results.map((result, index) => (
            <li key={index}>
              {result.value}
              <div
                className="button favorite-button"
                onClick={() => toggleFavorite(result.value)}
              >
                {isFavorite(result.value)
                  ? "Remove from Favorites"
                  : "Add to Favorites"}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchResults;
