import React from "react";
import { useMovieData } from "../app/hooks/useMovieData";

const MoviesGenre = ({ category }) => {
  const [movies] = useMovieData(category);
  return movies ? (
    <div>
      {movies.map((movie) => {
        (<h2>{category}</h2>),
          (<p>{movie.title}</p>)
          (<p>{video.title}</p>)
      })}
    </div>
  ) : (
    <div>error</div>
  );
};

export default MoviesGenre;
