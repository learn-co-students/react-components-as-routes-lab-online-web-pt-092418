import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div class= "navbar">
    <route path='/' render={Home}/>
    <route exact path='/movies' render={Movies}/>
    <route exact path='/actors' render={Actors}/>
    <route exact path='/directors' render={Directors}/>
    </div>
  );
};

export default NavBar;
