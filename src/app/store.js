import {configureStore } from "@reduxjs/toolkit";
import movieReducer from '../features/movies/movies-slice'
import darkModeReducer from "../reducers/DarkMode-Slice";

//import newsReducer from '../features/news'

//const rootReducer = combineReducers(movieReducer, newsReducer)

//RTK also adds the developer tools a middleware
const store = configureStore({
    reducer: {
        movie: movieReducer, 
        darkMode: darkModeReducer,

     
    }
})
export default store;
