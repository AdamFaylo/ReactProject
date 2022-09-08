import React from "react";
import { useDispatch } from "react-redux";
import { removeMovies } from "../features/movies/movies-slice";
import { TiDeleteOutline } from "react-icons/ti";

const DeleteMovie = ({ movie }) => {
  const styleDelete = {
    fontSize: "32px",
    position: "relative",
    bottom: "25rem",
    right: "5rem",
    background: "none",
    border: "none",
    color: "black"
  };
  const dispatch = useDispatch();

  const hendelleRemoveMovie = () => {

    dispatch(removeMovies(movie.id));

    console.log("remove")
  };
  return (
    <>
      <button  style={styleDelete}>
        <TiDeleteOutline onClick={hendelleRemoveMovie}/>
      </button>
    </>
  );
};

export default DeleteMovie;

