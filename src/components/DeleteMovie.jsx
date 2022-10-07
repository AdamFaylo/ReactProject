import React from "react";
import { useDispatch } from "react-redux";
import { deleteMovies } from "../features/movies/movies-slice";
import { TiDeleteOutline } from "react-icons/ti";

const DeleteMovie = ({ movie }) => {
  const styleDelete = {
    margin: "0",
    fontSize: "40px",
    position: "relative",
    bottom: "3.3rem",
    right: "2.5rem",
    background: "none",
    border: "none",
    color: "red"
  };
  const dispatch = useDispatch();

  const hendelleRemoveMovie = () => {
    dispatch(deleteMovies(movie.id));
  };
  return (
    <>
      <button style={styleDelete}>
        <TiDeleteOutline onClick={hendelleRemoveMovie} className={'delete_btn_movie'}/>
      </button>
    </>
  );
};

export default DeleteMovie;

