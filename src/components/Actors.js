import React from 'react';
import { actors } from '../data';

const Actors = () => {
  const actorsHtml = actors.map((actor, i) =>{
    const movie = actor.movies.join(",");
    return(
      <div key={i} className="actor">
        {actor.name}- {movie}
      </div> );
    });
  
    return (
    <div>
      <h1>Actors Page</h1>
      
        {actorsHtml}
      
    </div>
  );
};

export default Actors;
