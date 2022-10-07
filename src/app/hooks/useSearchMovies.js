import { useEffect,useState } from "react";

export const useQuery = ({query})=>{
    const [searchedQuery, setSearchedQuery] = useState('');

    useEffect(() => {
    fetch(
        `https://api.themoviedb.org/3/search/movie` +
        `?api_key=b3b1492d3e91e9f9403a2989f3031b0c` +
        `&query=${query}`,
    )
    .then((response)=>response.json())
    .then((json) => json.results)
    .then((movies)=>{
        console.log(movies)
      setSearchedQuery(movies);
    })
}, []);
return [searchedQuery]///מקבל מערך של תוצאות
}

