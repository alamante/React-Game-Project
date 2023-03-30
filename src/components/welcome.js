import React, { useState } from "react";
import WelcomeIcon from "../Design-Materials/icons-etc/SVG/welcome.svg";
import EnterButtonIcon from "../Design-Materials/icons-etc/SVG/Enter-btn.svg";
import Container from "@mui/material/Container";
import Choice from "./choices";
import RockPaperScissors from "../pages/RPS";
import Hangman from "./Hangman"; // import the Hangman component
import Footer from "./footer";

export default function SimpleContainer() {
  const [showGame, setShowGame] = useState(false);
  const [enterClicked, setEnterClicked] = useState(false);

  const handleGameClick = () => {
    setShowGame(true);
  };

  const handleHangmanClick = () => {
    // define the new function
    setShowGame(true);
    setHangmanClicked(true);
  };

  const handleEnterClick = () => {
    setEnterClicked(true);
  };

  const handleReset = () => {
    setShowGame(false);
    setEnterClicked(false);
  };

  const [hangmanClicked, setHangmanClicked] = useState(false); // add state for Hangman

  return (
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
            hangmanClicked ? (
              <Hangman />
            ) : (
              <RockPaperScissors />
            )
          ) : (
            <Choice
              handleGameClick={handleGameClick}
              setShowGame={setShowGame}
              handleHangmanClick={handleHangmanClick}
            />
          )}
          <Footer handleReset={handleReset} />
        </>
      )}
    </Container>
  );
}
