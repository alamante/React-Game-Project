import React, { useState } from 'react';
import Welcome from "../Design-Materials/icons-etc/SVG/welcome.svg"
import Enter from "../Design-Materials/icons-etc/SVG/Enter-btn.svg"
import Container from '@mui/material/Container';
import RockPaperScissors from '../pages/RPS';

export default function SimpleContainer() {
  const [showChoices, setShowChoices] = useState(false);
  const [showGame, setShowGame] = useState(false);
  const [hasMadeSelection, setHasMadeSelection] = useState(false);
  const [enterClicked, setEnterClicked] = useState(false);

  const handleGameClick = () => {
    setShowGame(true);
    setShowChoices(false);
    setHasMadeSelection(true);
  };

  const handleEnterClick = () => {
    setEnterClicked(true);
    setShowChoices(true);
  }

  return (
    <React.Fragment>
      <Container className="container" maxWidth="sm">
        {!enterClicked ? (
          <div className='show'>
            <img className="welcome" src={Welcome} />
            <button className="enter-btn" onClick={handleEnterClick}>
              <img className="enter-img" src={Enter} alt="Enter button" />
            </button>
          </div>
        ) : !hasMadeSelection && (
          <div className="choices">
            <h1 className="header-game-choice">CHOOSE YOUR GAME</h1>
            <div className="choices">
              <button className="custom-btn choice-btn">MAGIC 8 BALL</button>
              <button className="custom-btn choice-btn" onClick={handleGameClick}>
                ROCK PAPER SCISSORS
              </button>
              <button className="custom-btn choice-btn">HANGMAN</button>
            </div>
          </div>
        )}
        {showGame && <RockPaperScissors />}
      </Container>
    </React.Fragment>
  );
}