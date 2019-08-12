import React from 'react';
import { directors } from '../data';

const Directors = () => {
  const directorsHtml= directors.map((director, i) =>
         (<div key={i}>{director.name}<ul>{director.movies}</ul></div>))
  return (
    <div>
      <h1>Directors Page</h1>
      <div>
        {directorsHtml}
      </div>
    </div>
  );
}

export default Directors
