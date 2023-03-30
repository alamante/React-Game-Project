import React, { useState } from "react";

export default function MagicBall() {
  const [userInput, setUserInput] = useState("");
  const [randomIndex, setRandomIndex] = useState("");
  const [error, setError] = useState("");

  const handleChange = (event) => {
    console.log(event.target.value);
    setUserInput(event.target.value);
  };

  const handleClick = () => {
    if (userInput) {
      setError("");
      setRandomIndex(Math.round(Math.random() * 20));
      setUserInput("");
    } else {
      setError("Ask a Question First...");
    }
  };

  const possibleAnswers = [
    "It Is Certain",
    "It Is Decidedly So",
    "Without A Doubt!",
    "Yes, Definitely",
    "You May Rely On It",
    "As I See It, Yes!",
    "Outlook Good!",
    "Yes!",
    "Signs Point To Yes",
    "Reply Hazy. Try Again",
    "Ask Again Later...",
    "Better Not Tell You Now",
    "Cannot Predict Now",
    "Concentrate and Ask Again",
    "Don't Count On It",
    "My Reply Is No!",
    "My Sources Say No",
    "Most Likely",
    "Outlook Not So Good",
    "Very Doubtful!",
  ];

  const answer = possibleAnswers[randomIndex];

  return (
    <div className="App">
      <h1>Magic 8-Ball</h1>
      <p className="info">Type a question and click me for an answer...</p>
      <input
        type="text"
        className="question"
        value={userInput}
        onChange={handleChange}
      />
      <div className="eight-ball">
        <div className="content" onClick={handleClick}>
          {error ? (
            <p className="error">{error}</p>
          ) : answer ? (
            <p className="answer">{answer}</p>
          ) : (
            <p className="eight">8</p>
          )}
        </div>
      </div>
    </div>
  );
}
