import React from 'react';
import { movies } from '../data';

const Movies = () => {
  const movieHtml = movies.map((movie, i)=> {
  return(
  <div key={i}>
    {movie.title}-{movie.time}-{movie.genres.join(",")} - {movie.metascore}
    </div>
    );
  });
  
  return (
    <div>
        <h1>Movies Page</h1>
        {movieHtml}
    </div>
  );
};

export default Movies;
