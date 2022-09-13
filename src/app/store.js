import { configureStore } from "@reduxjs/toolkit";
import DarkModeSlice from "../features/DarkMode-Slice";
import movieReducer from '../features/movies/movies-slice'
import LogInSlice from "../features/LogInSlice";

const store = configureStore({
    reducer: {
        movie: movieReducer,
        darkMode: DarkModeSlice,
        login: LogInSlice,
    }
})
export default store;
