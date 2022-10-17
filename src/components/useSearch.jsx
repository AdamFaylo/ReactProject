import React from "react"
import axios from "axios"
import { useState } from "react"



const searchUrl = (type,query) => {
    return `https://api.themoviedb.org/3/search/${type}` +
        `?api_key=b3b1492d3e91e9f9403a2989f3031b0c&language=en-us` +
        `&query=${query}`
}

export const useSearch = (type) => {
    const [results, setSearchResults] = useState([])

    return {
        search: (query) => {
             const url = searchUrl(type,query)
                axios.get(url)
                    .then(response => response.data)
                    .then(data => data.results)
                    .then(setSearchResults)
                    .catch(console.log)
        },
        results
    }
}

export const MOVIE_SEARCH = "movie"
export const PEOPLE_SEARCH = "person"
const MULTI_SEARCH = "multi"
const COMPANY_SEARCH = "company"


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

    const { search, results } = useSearch(type)

    const doSearch = (formEvent) => {
        formEvent.preventDefault()
        let searchQuery = formEvent.target[0].value
        search(searchQuery)
    }
    return <div>

        <form onSubmit={doSearch}>
        <input type="text" placeholder="Search.."/>
        <button type="submit">Search</button>
        </form>
        <SearchResults {...{type, results}}/>
    </div>

}