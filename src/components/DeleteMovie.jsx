import React from "react";
import { useDispatch } from "react-redux";
import { deleteMovies } from "../features/movies/movies-slice";
import { TiDeleteOutline } from "react-icons/ti";
import "../../src/components/CssControls/movie-item.css"

const DeleteMovie = ({ movie }) => {
  const dispatch = useDispatch();
  const hendelleRemoveMovie = () => {
    dispatch(deleteMovies(movie.id));
  };
  return (
    <>
      <button className="delete_movie">
        <TiDeleteOutline onClick={hendelleRemoveMovie} className={'delete_btn_movie'}/>
      </button>
    </>
  );
};

export default DeleteMovie;

