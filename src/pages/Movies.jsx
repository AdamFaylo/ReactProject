import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import MovieItem from "../components/MovieItem";
import "../components/CssControls/grid.css";
import NextPage from "../components/NextPage/Pages";
import { fetchMovies } from "../features/movies/movies-slice";
import SearchInput from "../components/SearchInput/SearchInput";
import { useState } from "react";
import MovieItemOne from "../components/MovieItem";
import { useQuery } from "../app/hooks/useSearchMovies";
import { useEffect } from "react";
import { selectedMovie } from "../features/movies/searchMovies-slice";


const Movies = () => {
  const value = useSelector((state) => state.search.moviesSearched);
  const movies = useSelector((s) => s.movie.filterMovie);
  const dispatch = useDispatch();
  const [category, setCategory] = useState();
  const [searchedQuary] = useQuery(selectedMovie);
  useEffect(() => {}, []);
  if (value == false) {
    return (
      <div className="card_controle">
        <div>
        <SearchInput/>
        </div>
     
        {<div style={{ direction: "rtl" }} className="card_grid">
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
        <SearchInput />
        {/* <NextPage/> */}
        {
          <div style={{ direction: "rtl" }} className="card_grid">
            {searchedQuary.map((m) => (
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
  }
};

export default Movies;

{
  /* <MovieItem key={m.id} movie={m} />  */
}

{
  /* <select onChange={(e) => {
        const category = e.target.value
        dispatch(fetchMovies({category,page:1}))
        setCategory(category)
      }}>
        <option value={'29'}>Horror</option>
        <option value={'36'}>Action</option>
      </select>  */
}
