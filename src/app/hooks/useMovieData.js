import React from 'react';
import { useEffect, useState } from 'react';

export const useMovieData = ( genre ) => {
  const [movies, setMovies] = useState();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie` +
      `?api_key=b3b1492d3e91e9f9403a2989f3031b0c` +
      `&language=en&sort_by=popularity.desc` +
      `&include_adult=false` +
      `&include_video=false` +
      `&page=1` +
      `&with_watch_monetization_types=flatrate` +
      `&[19:31]%20alex%20kiochukov%20` +
      `&with_genres=${genre}`

    )
    .then((response) => response.json())
     .then((data) =>{setMovies(data.results)});
  },[]);
  return [movies]
}



// `https://api.themoviedb.org/3/discover/movie` +
// `?api_key=b3b1492d3e91e9f9403a2989f3031b0c&language=he-il` +
// `&sort_by=popularity.desc` +
// `&genre=${genre}` +
// `&include_adult=false` +
// `&include_video=false` +
// `&page=1` +
// `&with_watch_monetization_types=flatrate`