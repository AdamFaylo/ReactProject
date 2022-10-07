import { configureStore } from "@reduxjs/toolkit";
import DarkModeSlice from "../features/DarkMode-Slice";
import movieReducer from '../features/movies/movies-slice'
import commentsReducer from '../features/comments/comments-slice'
import LogInSlice from "../features/LogInSlice";
import searchMoviesSlice from "../features/movies/searchMovies-slice";

const store = configureStore({
    reducer: {
        commentsReducer,
        movie: movieReducer,
        darkMode: DarkModeSlice,
        login: LogInSlice,
        search: searchMoviesSlice,
    }
})
export default store;
