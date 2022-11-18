import React from "react";
import { useSelector } from "react-redux/es/exports";
import MovieItemOne from "../components/MovieItem"
import "../components/CssControls/favorites.css"
const Favorites = () => {
  
  const movies = useSelector((s) => s.movie.movies).filter(m=>m.isFavorite);
  return (
    <div>
      <div className="favorites">
        {movies.map((m) => (
          <MovieItemOne key={m.id} movie={m}/>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
