import React from 'react';
import { actors } from '../data';

const Actor = ({name, movies}) => (
  <div className="actor">
    <h3>{name}</h3>
    <p>Movies:</p>
    <ul>
      {movies.map((movie, index) => (
        <li key={index}>{movie}</li>
      ))}
    </ul>
  </div>
)

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map(Actor)}
    </div>
  );
};

export default Actors;
