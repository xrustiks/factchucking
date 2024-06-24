// Search.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (query.trim() !== '') {
      navigate(`/search?query=${query}`);
    }
  };

  const handleKeyDown = (evt) => {
    if (evt.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div>
      <input 
        type="text"
        onChange={(evt) => setQuery(evt.target.value)} 
        onKeyDown={handleKeyDown}
        placeholder="Search for fact" 
      />
    </div>
  );
};

export default Search;
