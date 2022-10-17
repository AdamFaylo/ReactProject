import React from "react";
import { useSelector } from "react-redux/es/exports";
import MovieItemOne from "../components/MovieItem"
import "../components/CssControls/grid.css"


const Favorites = () => {
  
  const movies = useSelector((s) => s.movie.movies).filter(m=>m.isFavorite);
  return (
    <div>
      <div
        style={{ direction: "rtl" }}
        className="card_grid">
        {movies.map((m) => (
          <MovieItemOne key={m.id} movie={m}/>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
