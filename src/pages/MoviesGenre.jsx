import React from 'react';
import { useMovieData } from '../app/hooks/useMovieData';
import MoviesItem from '../components/MovieItem';

const MoviesGenre = ({ category }) => {
    const [movies] = useMovieData( category );
  // console.log(movies);
  const urlImage = "https://image.tmdb.org/t/p/w500/";

  return movies ? (
   
    <div >
      <h2>{category}</h2>
      {movies.map((movie) => {
        <MoviesItem
        title={movie.title}
        
        />
      })}
    </div>
 
) : (
  <div>error</div>
);
};

export default MoviesGenre;

{/* <div >
{movies.map((movie) => {
  return (
    <div className="card-item" key={movie.id}>
      <p>{movie.title}</p>
      <img src={urlImage + movie.poster_path} alt="image card" />
    </div>
  );
})}
</div>

) : (
<div>error</div>
);
}; */}