import React from 'react';
import {directors, movies} from '../data';

const Directors = () => {
  return (
      <div>
        <h1>Directors Page</h1>
        {directors.map((director, index) => {
          debugger
          return (
            <div name={director.name} key={index}>
              <h3>Name: {director.name}</h3>
              <p>Movies: {director.movies.map(movie => movie + " ")}</p>
            </div>
          )
        })}
      </div>
  );
}

export default Directors
