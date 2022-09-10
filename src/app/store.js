import { configureStore } from "@reduxjs/toolkit";
import DarkModeSlice from "../features/DarkMode-Slice";
import movieReducer from '../features/movies/movies-slice'
import nextPageSlise from "../features/next-page-slise";
import LogInSlice from "../features/LogInSlice";

const store = configureStore({
    reducer: {
        movie: movieReducer,
        darkMode: DarkModeSlice,
        page: nextPageSlise,
        login: LogInSlice,
    }
})
export default store;
