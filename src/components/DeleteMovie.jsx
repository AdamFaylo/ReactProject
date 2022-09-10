import React from "react";
import { useDispatch } from "react-redux";
import { deleteMovies } from "../features/movies/movies-slice";
import { TiDeleteOutline } from "react-icons/ti";

const DeleteMovie = ({ movie }) => {
  const styleDelete = {
    margin: "0",
    fontSize: "40px",
    position: "relative",
    bottom: "22.8rem",
    left: "5rem",
    background: "none",
    border: "none",
    color: "yellow"
  };
  const dispatch = useDispatch();

  const hendelleRemoveMovie = () => {
    dispatch(deleteMovies(movie.id));
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

