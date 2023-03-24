import React, { useState } from 'react';
import Welcome from "../Design-Materials/icons-etc/SVG/welcome.svg"
import Enter from "../Design-Materials/icons-etc/SVG/Enter-btn.svg"
import Container from '@mui/material/Container';

export default function SimpleContainer() {

  const [showChoices, setShowChoices] = useState(false);

  const handleChoices = () => setShowChoices(true);
  
  return (
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
            <h1 className="choose">CHOOSE YOUR GAME</h1>
            <div className='choices'>
              <button className='custom-btn choice-btn'>MAGIC 8 BALL</button>
              <button className='custom-btn choice-btn'>ROCK PAPER SCISSORS</button>
              <button className='custom-btn choice-btn'>HANGMAN</button>
            </div>
          </>
        ) : null}

      </Container>
    </React.Fragment>
  );
}