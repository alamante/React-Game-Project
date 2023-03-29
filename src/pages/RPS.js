/*<<<<<<< eightball*/

/*<<<<<<< feature/footer*/
import { useState, useEffect } from "react"
import Scissors from "../Design-Materials/icons-etc/SVG/Scissors-icon-description.svg"
import Paper from "../Design-Materials/icons-etc/SVG/Paper-icon-description.svg"
import Rock from "../Design-Materials/icons-etc/SVG/Rock-icon-description.svg"

const RockPaperScissors = () => {
  const [userChoice, setUserChoice] = useState(null)
  const [computerChoice, setComputerChoice] = useState(null)
  const [result, setResults] = useState(null)
  const choices = [
    { name: "rock", image: Rock },
    { name: "paper", image: Paper },
    { name: "scissors", image: Scissors}
  ]

  const handleClick = (value) => {
    setUserChoice(value)
    GenerateComputerChoice()
  }

  const GenerateComputerChoice = () => {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)]
    setComputerChoice(randomChoice)
  }

  useEffect(() => {
    if (userChoice && computerChoice) {
      switch(userChoice.name + computerChoice.name){
        case "scissorspaper":
        case "rockscissors":
        case "paperrock":
          setResults("YOU WIN!!")
          break
        case "paperscissors":
        case "scissorsrock":
        case "rockpaper":
          setResults("YOU LOSE!!")
          break
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
          setResults("ITS A DRAW!!")
          break
        default:
          setResults(null)
      }
    }
  },[userChoice, computerChoice])

  return (
    <div>
      <h1 className="header">DING DING!</h1>
      <h2 className="center game-choices">User Choice is: {userChoice?.name}</h2>
      <h2 className="center game-choices">Computer choice is: {computerChoice?.name}</h2>
      <div>
        {choices.map((choice, index) => (
          <button className="weapons" key={index} onClick={() => handleClick(choice)}>
            <img className="weapon-choices"src={choice.image} alt={choice.name} />
          </button>
        ))}
      </div>
      {result && <h1 className="center result">{result}</h1>}
    </div>
  )
}

export default RockPaperScissors

/*>>>>>>> main*/
import './App.css';
import Header from './components/header-nav';

function RPS() {
  return (
      <h1 className="header"> ROCk PAPER SCISSORS</h1>
    
  );
}

export default RPS;
/*<<<<<<< eightball*/


