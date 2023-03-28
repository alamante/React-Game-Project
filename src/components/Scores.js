import React from "react";
import Header from "./header-nav";

function Scores(props) {
  return (
    <div>
      <h2>Score: {props.score}</h2>
    </div>
  );
}

export default Scores;