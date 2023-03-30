import React, { useState } from "react";

export default function Choice({
  handleGameClick,
  setShowGame,
  handleHangmanClick,
}) {
  const [hasMadeSelection, setHasMadeSelection] = useState(false);

  const handleChoiceClick = () => {
    handleGameClick();
    setHasMadeSelection(true);
    setShowGame(true);
  };

  return (
    <div>
      <h1 className="header">CHOOSE YOUR GAME</h1>
      <div className="choices">
        <button className="custom-btn choice-btn" disabled={hasMadeSelection}>
          MAGIC 8 BALL
        </button>
        <button
          className="custom-btn choice-btn"
          onClick={handleChoiceClick}
          disabled={hasMadeSelection}
        >
          ROCK PAPER SCISSORS
        </button>
        <button
          className="custom-btn choice-btn"
          onClick={handleHangmanClick}
          disabled={hasMadeSelection}
        >
          HANGMAN
        </button>
      </div>
    </div>
  );
}
