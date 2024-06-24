import { useState, useEffect } from 'react';

import FactsBoard from './FactsBoard.jsx';


import GetRandomFact from '../../utils/GetRandomFact.jsx';

const Main = ({ category }) => {
  const [fact, setFact] = useState('');

  const handleNextFact = () => {
    GetRandomFact(category)
      .then(nextFact => {
        setFact(nextFact);
      });
  };

  useEffect(() => {
    handleNextFact();

    const handleKeyPress = (event) => {
      if (event.key === 'r' || event.key === 'к') { // for Latin and Cyrillic
        handleNextFact();
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [category])

  return (
    <>
      <FactsBoard fact = { fact } />

      <div className="refresher">
        <button className = "generate-fact-button" onClick={handleNextFact}>Get next fact</button>
      </div>

      <p className="press-r">
        Click "R" to recieve new fact
      </p>
    </>
  );
}

export default Main;