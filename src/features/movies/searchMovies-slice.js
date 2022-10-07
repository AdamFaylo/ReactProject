
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    moviesSearched: ""
}

const searchMoviesSlice = createSlice({
    name: "query",
    initialState,
    reducers: {
        queryMovies: (state, action) => {
        state.moviesSearched = action.payload
            console.log(state.moviesSearched)
        },
    }
}
)
export const { queryMovies } = searchMoviesSlice.actions;
export const selectedMovie =(state)=> state.moviesSearched.moviesSearched
export default searchMoviesSlice.reducer;

