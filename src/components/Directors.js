import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
        <ol>
          {directors.map((director, index)=> (
          <div className="director" key="index">
            <li>
              <h4>Name: {director.name}</h4>
              <h5>Movies: <ul><li>{director.movies.map((movie) => movie)}</li></ul></h5>
            </li>
          </div>
          ))
          }
        </ol>
    </div>
  );
}

export default Directors
