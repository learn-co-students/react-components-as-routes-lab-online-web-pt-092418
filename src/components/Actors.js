import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
        <ol>
          {actors.map((actor, index) => (
          <div className="actor" key="index">
            <li>
              <h4>Name: {actor.name}</h4>
              <h5>movies list</h5>
            </li>
          </div>
          ))
          }
        </ol>
    </div>
  );
};

export default Actors;
