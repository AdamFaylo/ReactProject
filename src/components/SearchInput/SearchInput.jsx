import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { queryMovies } from "../../features/movies/searchMovies-slice";
import { FaSearch } from "react-icons/fa";
import "./search.css";
import SortAzButton from "../SortAzButton";

const SearchInput = () => {
  const dispatch = useDispatch();
  return (
    <div className="search_style">
      <input
        placeholder="Search.."
        onChange={(e) => {
          dispatch(queryMovies(e.target.value));
        }}
      ></input>
      <FaSearch className="btn_search" />
      <SortAzButton />
    </div>
  );
};

export default SearchInput;
