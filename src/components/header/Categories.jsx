import { useState, useEffect } from 'react';

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch('https://api.chucknorris.io/jokes/categories/');
      const data = await response.json();
      setCategories(data);
    }
    fetchCategories();
  }, [])

  return (
    <div>
      <select>
        <option value="" disabled selected>Choose category</option>
        {categories.map(category => {
          return <option key={category} value={category}>{category}</option>;
        })}
      </select>
    </div>
  );
}

export default Categories;