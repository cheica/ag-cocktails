// import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Cocktails from "./Cocktails"
import CocktailCard from './CocktailCard';
import { useState } from 'react';
import AboutUs from './AboutUs';
import LogIn from './Login';

function App() {

  return (
    <div >
      <BrowserRouter>
      <NavBar/>

      <Switch>
        <Route path="/aboutus">
          <AboutUs/>
        </Route>

        <Route path="/cocktails">
          <Cocktails/>

        </Route>

        <Route path="/login">
          <LogIn/>

        </Route>
      </Switch>
      </BrowserRouter>

    </div>
  )
}

export default App;
