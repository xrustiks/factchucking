import FactsBoard from './FactsBoard.jsx';

import GetRandomFact from '../../utils/GetRandomFact.jsx';

import { useState, useEffect } from 'react';

const Main = () => {
  const [fact, setFact] = useState('');

  const handleNextJoke = () => {
    GetRandomFact()
      .then(nextJoke => {
        setFact(nextJoke);
      });
  };

  useEffect(() => {
    handleNextJoke();

    const handleKeyPress = (event) => {
      if (event.key === 'r' || event.key === 'к') {
        handleNextJoke();
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [])

  return (
    <>
      <FactsBoard fact = { fact } />

      <div className="refresher">
        <button onClick={handleNextJoke}>Get next fact</button>
      </div>

      <p className="read-the-docs">
        Click "R" to recieve new fact
      </p>
    </>
  );
}

export default Main;