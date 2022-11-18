import React from "react";
import { useDispatch } from "react-redux";
import { sortAzMovies } from "../features/movies/movies-slice";
import { BsSortAlphaDown } from "react-icons/bs";
import "./CssControls/movie-item.css"

const SortAzButton = () => {
const dispatch = useDispatch();

  const handleSortAzMovie = () => {
    dispatch(sortAzMovies());
    console.log("sorted");
    // console.log(title);
  };
  return (
      <button className="btn_sort">
        <BsSortAlphaDown onClick={handleSortAzMovie} />
      </button>
  );
};
export default SortAzButton;


