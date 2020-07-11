import React from 'react';
import { directors } from '../data';

const Directors = () => {
  const directorsHtml= directors.map((director, i) =>{
  const movie = director.movies.join(",");
  return(
         <div key={i}>
            {director.name}-{movie}
          </div>);
          });
  return (
    <div>
      <h1>Directors Page</h1>
      
        {directorsHtml}
    
    </div>
  );
}

export default Directors
