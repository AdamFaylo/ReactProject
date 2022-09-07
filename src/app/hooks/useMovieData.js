import React from 'react';
import { useEffect, useState } from 'react';

export const useMovieData = (category) => {
  const [movies, setMovies] = useState();
  const urlCategory = (category) => 
  `https://api.themoviedb.org/3/discover/movie` + 
  `?api_key=ee0b9cb97935dee14cd460feff399211` + 
  `&language=en` +
  `&sort_by=popularity.desc` + 
  `&include_adult=false` + 
  `&include_video=false` + 
  `&page=1` + 
  `&with_watch_monetization_types=flatrate` +
  `&with_genres=${category}`

      console.log(urlCategory)
  useEffect(() => {
    fetch(
      urlCategory(category)
      
    )
      .then((response) => response.json())
      .then((data) => { setMovies(data.results); });
  }, []);
  return [movies]
}
