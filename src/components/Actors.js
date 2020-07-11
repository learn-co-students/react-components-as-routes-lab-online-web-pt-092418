import React from 'react';
import {actors, directors} from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map((actor, index) => {
        debugger;
        return (
          <div name={actor.name} key={index}>
            <h1>Name: {actor.name}</h1>
            <p>Movies: {actor.movies.map(movie => movie + " ")}</p>
          </div>
        )
      })}
    </div>
  );
};

export default Actors;
