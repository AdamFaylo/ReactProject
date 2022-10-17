import { useEffect, useState } from "react";
import axios from "axios";


export const useQuery = (query) => {
    const [searchedQuery, setSearchedQuery] = useState(null);

    useEffect(() => {
        if (!query) return
        axios({
            method: "get",
            url: (`https://api.themoviedb.org/3/search/movie?api_key=b3b1492d3e91e9f9403a2989f3031b0c&query=${query}`)
    })
            .then(res => {
                const result = res.data.results
                console.log(result)
                setSearchedQuery({ result })
            }
            );
    }, [query])
    return [searchedQuery]///מקבל מערך של תוצאות
}

