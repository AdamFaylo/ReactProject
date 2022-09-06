import React from "react";
import { useSelector } from "react-redux";
import useMovies from "../app/hooks/useMovies";
import MovieItem from "../components/MovieItem";
import "../components/Grid.css"
import Categories from "../components/Categories/Categories"

const Movies = () => {

  const movies = useSelector((s) => s.movie.movies);
  useMovies();

  return (
    <div className="card_controle">
      <Categories/>
      <div style={{direction:'rtl'}} className="card_grid container">
        {movies.map((m) => (
        <MovieItem key={m.id} movie={m} /> 
        ))}
      </div>
    </div>
  );
};

export default Movies;
