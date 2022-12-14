import React from "react";
import axios from "axios";
import { useState } from "react";
import "../components/CssControls/movie-item.css"
import { filterMovie, imageUrl } from "../features/movies/movies-slice";
import { useDispatch } from "react-redux";

const searchUrl = (type,query) => {
    return `https://api.themoviedb.org/3/search/${type}` +
        `?api_key=b3b1492d3e91e9f9403a2989f3031b0c&language=en-us` +
        `&query=${query}`
}

export const useSearch = (type) => {

    const dispatch = useDispatch()
    return {
        search: (query) => {
            if(!query)
                return dispatch(filterMovie([]))
            
             const url = searchUrl(type,query)
                axios.get(url)
                    .then(response => response.data)
                    .then(data => data.results)
                    .then(results =>{
                        dispatch(filterMovie(results.map(m => ({
                            ...m,
                            poster_path: imageUrl(m.poster_path),
                            backdrop_path: imageUrl(m.backdrop_path),
                            video: imageUrl(m.video),
                            isFavorite: false,
                        }))))
                    })
                    .catch(console.log)
        }
    }
}

export const MOVIE_SEARCH = "movie";
export const PEOPLE_SEARCH = "person";
const MULTI_SEARCH = "multi";
const COMPANY_SEARCH = "company";

const SearchResults = ({type,results}) => {

    const renderResultRow = (resultItem) => {
        switch(type) {
            case MOVIE_SEARCH:
                return <div>{resultItem.title}</div>
            case PEOPLE_SEARCH:
            case COMPANY_SEARCH:    
                return <div>{resultItem.name}</div> 
            case MULTI_SEARCH:
                return <div>
                    {resultItem.title ?? ''}
                    <br/>
                    {resultItem.name ?? ''}
                </div>       
        }
    }

return  <React.Fragment>
    {React.Children.toArray(results.map(renderResultRow))}
</React.Fragment>
}

export const MovieSearchComponent = ({type}) => {

    const { search } = useSearch(type)
    const doSearch = (e) => {
        let searchQuery = e.target.value
        search(searchQuery)
    }
    return <div >
        <input className="search_movie" onChange={doSearch} type="text" placeholder="Search.."/>
    </div>
}


