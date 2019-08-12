import React from 'react';
import { movies } from '../data';

const Movies = () => {
  const movieHtml = movies.map((movie, i)=> <div>{movie.title}</div>)
  return (
    <div>
        <h1>Movies Page</h1>
    </div>
  );
};

export default Movies;
