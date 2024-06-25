import { useState, useEffect } from "react";

import FactsBoard from "./FactsBoard.jsx";

import GetRandomFact from "../../utils/GetRandomFact.jsx";

const Main = ({ category }) => {
  const [fact, setFact] = useState("");

  const handleNextFact = async () => {
    try {
      const nextFact = await GetRandomFact(category);
      setFact(nextFact.value);
    } catch (error) {
      console.error("Error receiving fact:", error);
    }
  };

  useEffect(() => {
    handleNextFact();

    const handleKeyPress = (event) => {
      // for Latin and Cyrillic keyboard layout
      if (event.key === "r" || event.key === "к") {
        handleNextFact();
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [category]);

  return (
    <>
      <FactsBoard fact={fact} />

      <div className="refresher">
        <button
          className="button generate-fact-button"
          onClick={handleNextFact}
        >
          Get next fact
        </button>
      </div>
    </>
  );
};

export default Main;
