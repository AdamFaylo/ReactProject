import React from "react";
import { useDispatch } from "react-redux";
import { sortZaMovies } from "../features/movies/movies-slice";
import { AiFillStar } from "react-icons/ai";
import "./CssControls/movie-item.css"
function SortZaMovies() {
  const dispatch = useDispatch();

  const handeleSortZaMovie = () => {
    dispatch(sortZaMovies());
    console.log("sortZA");
  };
  return (
    <button className="sort_za">
      <AiFillStar  className="icon_style" onClick={handeleSortZaMovie} />
    </button>
  );
}

export default SortZaMovies;
