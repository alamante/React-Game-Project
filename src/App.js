import React from 'react';
import './App.css';
import SimpleContainer from './components/welcome';
import Header from './components/header-nav';
import Hangman from "./components/Hangman"
import Time from './components/Time';


function App() {
  return (
    <div className="App">
      <Header/>
      <Time />
     <Hangman />
     
    </div>
  );
}

export default App;
