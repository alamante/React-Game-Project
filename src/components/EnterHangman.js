import React from 'react';
import Choice from './Choice';
import Hangman from './Hangman';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HangmanButton from './HangmanButton';

export default function EnterHangMan() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Choice />
          <HangmanButton />
        </Route>
        <Route path="/hangman">
          <Hangman />
        </Route>
      </Switch>
    </Router>
  );
}