import React from "react";
import { useDispatch, useSelector } from "react-redux";
import MovieItem from "../components/MovieItem";
import "../components/Grid.css"
import NextPage from "../components/NextPage/NextPage";
import { fetchMovies } from "../features/movies/movies-slice";

const Movies = () => {
  const movies = useSelector((s) => s.movie.movies);
  const dispatch = useDispatch()
  return (
    <div className="card_controle">
      <select onChange={(e) => {
        const category = e.target.value
        dispatch(fetchMovies(category))
      }}>
        <option value={'29'}>Horror</option>
        <option value={'36'}>Action</option>
      </select>
      <NextPage/>
      <div style={{direction:'rtl'}} className="card_grid container">
        {movies.map((m) => (
        <MovieItem key={m.id} movie={m} /> 
        ))}
      </div>
    </div>
  );
};

export default Movies;
