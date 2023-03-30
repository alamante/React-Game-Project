import React, { useState } from "react";
import WelcomeIcon from "../Design-Materials/icons-etc/SVG/welcome.svg";
import EnterButtonIcon from "../Design-Materials/icons-etc/SVG/Enter-btn.svg";
import Container from "@mui/material/Container";
import Choice from "./choices";
import RockPaperScissors from "../pages/RPS";
import Hangman from "./Hangman";
import MagicBall from "./magic8ball";
import Footer from "./footer";

export default function SimpleContainer() {
  const [showGame, setShowGame] = useState(false);
  const [enterClicked, setEnterClicked] = useState(false);
  const [gameType, setGameType] = useState("");

  const handleGameClick = (type) => {
    setShowGame(true);
    setGameType(type);
  };

  const handleEnterClick = () => {
    setEnterClicked(true);
  };

  const handleReset = () => {
    setShowGame(false);
    setEnterClicked(false);
    setGameType("");
  };

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
            gameType === "hangman" ? (
              <Hangman />
            ) : gameType === "rps" ? (
              <RockPaperScissors />
            ) : (
              <MagicBall />
            )
          ) : (
            <Choice
              handleGameClick={handleGameClick}
              handleHangmanClick={() => handleGameClick("hangman")}
              handleMagicBallClick={() => handleGameClick("magicball")}
            />
          )}
          <Footer handleReset={handleReset} />
        </>
      )}
    </Container>
  );
}
