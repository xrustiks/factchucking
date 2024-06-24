import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

const SearchResults = () => {
  const location = useLocation();
  const [results, setResults] = useState([]);
  const [error, setError] = useState('');

  const query = new URLSearchParams(location.search).get('query');

  useEffect(() => {
    const fetchResults = async () => {
      if (query) {
        try {
          const response = await fetch(`https://api.chucknorris.io/jokes/search?query=${query}`);
          const data = await response.json();

          if (data.result.length > 0) {
            setResults(data.result);
            setError('');
          } else {
            setResults([]);
            setError('No results found');
          }
        } catch (error) {
          setResults([]);
          setError('An error occurred while fetching data');
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
            <li key={index}>{result.value}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchResults;
