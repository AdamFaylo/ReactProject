import {configureStore } from "@reduxjs/toolkit";
import movieReducer from '../features/movies/movies-slice'
import darkModeReducer from "../reducers/DarkMode-Slice";

const store = configureStore({
    reducer: {
        movie: movieReducer, 
        darkMode: darkModeReducer,

     
    }
})
export default store;
