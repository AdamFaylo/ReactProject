import React from "react";
import { useDispatch, useSelector } from "react-redux";
import NextPage from "../components/NextPage/Pages";
import { fetchMovies } from "../features/movies/movies-slice";
import { useState } from "react";
import MovieItemOne from "../components/MovieItem";
import { useQuery } from "../app/hooks/useSearchMovies";
import { useEffect } from "react";
import { selectedMovie } from "../features/movies/searchMovies-slice";
import SortAzButton from "../components/SortAzButton";
import SortZaMovies from "../components/SortZaMovies";
import {MovieSearchComponent,MOVIE_SEARCH,PEOPLE_SEARCH} from "../components/useSearch";
import "../components/CssControls/movie-item.css"
const Movies = () => {
  const value = useSelector((state) => state.search.moviesSearched);
  const movies = useSelector((s) => s.movie.filterMovie);

  const dispatch = useDispatch();
  const [category, setCategory] = useState();
  const [searchedQuary] = useQuery(selectedMovie);
  // const 
  useEffect(() => {}, []);
  if (value == false) {
   
    return (
      <div className="card_controle">
        <div className="sort_container">
        <MovieSearchComponent type={MOVIE_SEARCH} />  
         <div className="spacer"></div>
        <SortAzButton/>
        <SortZaMovies/>
        </div>
        {<div className="card_grid">
        
          {movies.map((m) => (
            <MovieItemOne key={m.id} movie={m} />
            ))}
          </div>
        }
        <NextPage
          onNextPage={(page) => {
            dispatch(fetchMovies({ category, page }));
          }}
        />
      </div>
    );
  } else {
    return (
      <div className="card_controle">
          <div className="card_grid">
            {searchedQuary.map((m) => (
              <MovieItemOne key={m.id} movie={m} />
            ))}
          </div>
        <NextPage
          onNextPage={(page) => {
            dispatch(fetchMovies({ category, page }));
          }}
        />
      </div>
    );
  }
};

export default Movies;
