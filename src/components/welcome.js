import React, { useState } from 'react';
import WelcomeIcon from '../Design-Materials/icons-etc/SVG/welcome.svg';
import EnterButtonIcon from '../Design-Materials/icons-etc/SVG/Enter-btn.svg';
import Container from '@mui/material/Container';
import Choice from './choices';
import RockPaperScissors from '../pages/RPS';
import Footer from './footer';

export default function SimpleContainer() {
  const [showGame, setShowGame] = useState(false);
  const [enterClicked, setEnterClicked] = useState(false);

  const handleGameClick = () => {
    setShowGame(true);
  };

<<<<<<< HEAD
=======
/*<<<<<<< feature/footer*/
>>>>>>> 85b4d85cba2209f3616e0a048dbfffd50e074cd0
  const handleEnterClick = () => {
    setEnterClicked(true);
  };

  const handleReset = () => {
    setShowGame(false);
    setEnterClicked(false);
  };

  return (
<<<<<<< HEAD
=======
    <React.Fragment>
      <Container className="container" maxWidth="sm">
        {showChoices ? null : (
          <>
            <img className="welcome" src={Welcome} />
            <button className="enter-btn" onClick={handleChoices}>
              <img className="enter-img" src={Enter} alt="Enter button" />
            </button>
          </>
        )}
        {showChoices ? (
          <>
            <h1 className="Header">CHOOSE YOUR GAME</h1>
            <div className='choices'>
              <button className='custom-btn choice-btn'>MAGIC 8 BALL</button>
              <button className='custom-btn choice-btn'>ROCK PAPER SCISSORS</button>
              <button className='custom-btn choice-btn'>HANGMAN</button>
            </div>
          </>
        ) : null}
/*>>>>>>> main*/

  return (
>>>>>>> 85b4d85cba2209f3616e0a048dbfffd50e074cd0
    <Container className="container" maxWidth="sm">
      {!enterClicked ? (
        <div className="show">
          <img className="welcome" src={WelcomeIcon} alt="Welcome" />
          <button className="enter-btn" onClick={handleEnterClick}>
            <img className="enter-img" src={EnterButtonIcon} alt="Enter" />
          </button>
        </div>
      ) : (
        <>
          {showGame ? (
            <RockPaperScissors />
          ) : (
            <Choice handleGameClick={handleGameClick} setShowGame={setShowGame} />
          )}
          <Footer handleReset={handleReset} />
        </>
      )}
    </Container>
  );
}