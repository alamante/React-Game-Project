import React, { useState } from "react";

export default function Choice({
  handleGameClick,
  handleHangmanClick,
  handleMagicBallClick,
}) {
  const [hasMadeSelection, setHasMadeSelection] = useState(false);

  const handleChoiceClick = (type) => {
    setHasMadeSelection(true);
    handleGameClick(type);
  };

  return (
    <div>
      <h1 className="header">CHOOSE YOUR GAME</h1>
      <div className="choices">
        <button
          className="custom-btn choice-btn"
          disabled={hasMadeSelection}
          onClick={() => handleChoiceClick("magicball")}
        >
          MAGIC 8 BALL
        </button>
        <button
          className="custom-btn choice-btn"
          onClick={() => handleChoiceClick("rps")}
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
