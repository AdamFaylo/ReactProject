import React from "react";
import { useDispatch, useSelector } from "react-redux";
import MovieItem from "../components/MovieItem";
import "../components/Grid.css"
import NextPage from "../components/NextPage/Pages";
import { fetchMovies } from "../features/movies/movies-slice";
import SearchInput from "../components/SearchInput/SearchInput";
import { useState } from "react";

const Movies = () => {
  const movies = useSelector((s) => s.movie.filterMovie);
  const dispatch = useDispatch()
  const [category,setCategory] = useState()

  return (
    <div className="card_controle container">
       
        <SearchInput/>
      {/* <NextPage/> */}
      {<div style={{direction:'rtl'}} className="card_grid">
       
        {movies.map((m) => (
        <MovieItem key={m.id} movie={m} /> 
        ))}
        </div>}
        <NextPage onNextPage ={(page) => {
          dispatch(fetchMovies({category,page}))
        }}/>
    </div>
  );
};

export default Movies;





{/* <select onChange={(e) => {
        const category = e.target.value
        dispatch(fetchMovies({category,page:1}))
        setCategory(category)
      }}>
        <option value={'29'}>Horror</option>
        <option value={'36'}>Action</option>
      </select>  */}