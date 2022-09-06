import React from "react";
import { useSelector } from "react-redux/es/exports";
import MoviesItem from "../components/MovieItem";
import "../components/Grid.css"

const Favorites = () => {
  
  const movies = useSelector((s) => s.movie.movies).filter(m=>m.isFavorite);
  return (
    <div className="container">
      <div
        style={{ direction: "rtl" }}
        className="card_grid"
      >
        {movies.map((m) => (
          <MoviesItem key={m.id} movie={m} />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
