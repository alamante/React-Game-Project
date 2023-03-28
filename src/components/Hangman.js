import React, { Component } from "react";
import { randomWord } from "./RandomWord";
import "./Hangman.css";
import image0 from "./images/0.jpg";
import image1 from "./images/1.jpg";
import image2 from "./images/2.jpg";
import image3 from "./images/3.jpg";
import image4 from "./images/4.jpg";
import image5 from "./images/5.jpg";
import image6 from "./images/6.jpg";
import Scores from "./Scores";
import Header from "./header-nav";


class Hangman extends Component {
  static defaultProps = {
    maxWrong: 6,
    images: [image0, image1, image2, image3, image4, image5, image6],
  };

/* The constructor initializes the state with the number of wrong guesses, 
guessed letters, random word to guess, and the score. It also binds the handleGuess 
and reset methods to the component instance. */

  constructor(props) {
    super(props);
    this.state = {
      noOfWrong: 0,
      guessed: new Set(),
      answer: randomWord(),
      score: 0,
    };
    this.handleGuess = this.handleGuess.bind(this);
    this.reset = this.reset.bind(this);
  }
/* This resets the state to its initial values. */
  reset() {
    this.setState({
      noOfWrong: 0,
      guessed: new Set(),
      answer: randomWord(),
      score: 0,
    });
  }

/* This returns an array of characters that represent the letters of 
the answer word that have been guessed correctly and underscores for the 
letters that have not been guessed yet. */

  guessedWord() {
    return this.state.answer
      .split("")
      .map((letter) => (this.state.guessed.has(letter) ? letter : "_"));
  }

  /*This handles the click event of a letter button. 
  It updates the state with the guessed letter, the number of wrong guesses, and the score. */

  handleGuess(evt) {
    let letter = evt.target.value;
    this.setState((st) => {
      const isCorrectGuess = st.answer.includes(letter);
      const scoreIncrement = isCorrectGuess ? 100 : 0;
      const score = st.score + scoreIncrement;
      return {
        guessed: st.guessed.add(letter),
        noOfWrong: st.noOfWrong + (isCorrectGuess ? 0 : 1),
        score: score,
      };
    });

    if (this.guessedWord().join("") === this.state.answer) {
      this.setState((st) => ({
        score: st.score + 500,
      }));
    }
  }

  /* This generates the keypad of letters that can be guessed. 
It returns an array of buttons that represent the letters of the alphabet. */

  generateKeypad() {
    return "abcdefghijklmnopqrstuvwxyz".split("").map((letter) => (
      <button
        key={letter}
        value={letter}
        onClick={this.handleGuess}
        disabled={this.state.guessed.has(letter)}
      >
        {letter}
      </button>
    ));
  }


/*This is the render method that displays the game screen with the image of the hangman, the number of 
guesses left, the guessed letters, the buttons for guessing letters, and the game state (whether the game is won or lost). 
It also displays a restart button if the game is over.*/

  render() {
    const gameOver = this.state.noOfWrong >= this.props.maxWrong;
    const isWinner = this.guessedWord().join("") === this.state.answer;
    let gameState = this.generateKeypad();
    if (isWinner) gameState = `Congrats, You have won the Game. Score: ${this.state.score}`;
    if (gameOver) gameState = "Better Luck Next Time";
    let restart = gameOver || isWinner;
    return (
      <div className="Hangman">
     
        <h2>Hangman</h2>
        <img src={this.props.images[this.state.noOfWrong]} alt="HangMan" />
        <p>
          Guessed Left: {this.props.maxWrong - this.state.noOfWrong} /{" "}
          {this.props.maxWrong}
        </p>
        <p>Guess the Programming Language</p>
        <p className="Hangman-word">
          {!gameOver ? this.guessedWord() : this.state.answer}
        </p>
        <Scores score={this.state.score} />
        <p className="Hangman-btns">{gameState}</p>
        {restart && (
          <button id="reset" onClick={this.reset}>
            Restart?
          </button>
        )}
      </div>
    );
  }
}

export default Hangman;