import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import './App.scss';

import HomePage from './pages/homepage.component';

const HatsPage = props => {
  console.log(props);
  if (props.history.action === 'POP') {
    return (
    <div>
      <h1 style={{ background: 'red' }}>
        Hey you are suppose to use the button. DONT write directly in the url
        adress area!!!!!!! Go back and use the button
      </h1>
        <p>Your action is: {props.history.action}</p>
        <p>Length: <span style={{color: 'red'}}>{props.history.length}</span></p>
    </div>);
  }
  return (
    <div>
      <h1>
        Hats page. Action: {props.history.action} Length: {props.history.length}
      </h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
