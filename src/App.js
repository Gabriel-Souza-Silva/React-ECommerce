import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './pages/homepage/homepage.component'
import {Switch, Route} from 'react-router-dom'


function Hats() {
  return (
    <div>
      <h1>HATS</h1>
    </div>
  );
}

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage}/> 
        <Route exact path="/hats" component={Hats}/> 
      </Switch>
    </div>
  );
}
 
export default App;
