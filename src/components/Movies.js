import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies Page</h1>
      <ol>
        {movies.map((movie, index) => (
        <div className="movie" key="index">
          <li>
            <h4>Title: {movie.title}</h4>
            <h5>Minutes: {movie.time}</h5>
            <h5>Genres List: <ul><li>{movie.genres.map((genre) => genre)}</li></ul></h5>
          </li>
        </div>))
        }
      </ol>
    </div>
  )
}


export default Movies;
