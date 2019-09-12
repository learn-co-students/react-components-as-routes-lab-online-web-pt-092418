import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
        {movies.map((movie, index) => {

          return (
            <div name={movie.title} key={index}>
              <h3>{movie.title}</h3>
              <p>Duration: {movie.time} minutes</p>
              <p>Genres: {movie.genres.map(genre => genre + " ")}</p>
            </div>
          )
        })}
    </div>
  );
};

export default Movies;
