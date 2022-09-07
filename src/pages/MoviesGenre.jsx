import React from 'react';
import { useMovieData } from '../app/hooks/useMovieData';

const MoviesGenre = ({ category }) => {
    const [movies] = useMovieData( category );
  console.log(category);
  return movies ? (
   
    <div >
      <h2>{category}</h2>
      {movies.map((movie) => {
       <p>{movie.title}</p>
      })}
    </div>

) : (
  <div>error</div>
);
};

export default MoviesGenre;
