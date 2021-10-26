// import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Cocktails from "./Cocktails"
import CocktailCard from './CocktailCard';
import { useState } from 'react';
import AboutUs from './AboutUs';
import LogIn from './Login';
import Rates from './Rates';
import Reviews from './Reviews';
import ContactUs from './ContactUs'
import BookNow from './BookNow';

function App() {

  return (
    <div >
      <BrowserRouter>
        <NavBar/>
        
      
      <Switch>


        <Route path="/cocktails">
          <Cocktails/>

        </Route>
        <Route path="/services">
          <Rates/>

        </Route>

        
        <Route path="/reviews">
          <Reviews />

        </Route>

        <Route path="/contactus">
          <ContactUs/>

        </Route>

        <Route path="/login">
          <LogIn/>

        </Route>

        <Route path="/">
          <AboutUs/>

        </Route>


      </Switch>
      </BrowserRouter>

    </div>
  )
}

export default App;
