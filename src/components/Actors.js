import React from 'react';
import { actors } from '../data';

const Actors = () => {
  const actorsHtml = actors.map((actor, i) =><div key={i}>{actor.name}<ul>{actor.movie}</ul></div> )
  return (
    <div>
      <h1>Actors Page</h1>
      <div> 
        {actorsHtml}
      </div>
    </div>
  );
};

export default Actors;
