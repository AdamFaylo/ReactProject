import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
const movieUrl = (category) => {
    return `https://api.themoviedb.org/3/discover/movie` + 
    `?api_key=b3b1492d3e91e9f9403a2989f3031b0c&language=en-us` +
    `&sort_by=popularity.desc` +
    `&include_adult=false` +
    `&with_genres=${category}` +
    `&include_video=false` +
    `&page=1` +
    `&with_watch_monetization_types=flatrate`
}


const imageUrl = (image_path) => `https://image.tmdb.org/t/p/original${image_path}`


const initialState = {
    movies: [],
    error: '',
    loading: false
}
export const fetchMovies = createAsyncThunk('movie/fetch', (category) => {
    //return fetch url
    return fetch(movieUrl(category),)
        .then((response) => response.json())
        .then((json) => json.results)
        .then(movies => movies.map(m => ({
            ...m,
            poster_path: imageUrl(m.poster_path),
            backdrop_path: imageUrl(m.backdrop_path),
            isFavorite: false
        })))
})
// fetchMovies()
const moviesSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {
        addMovies: (state, action) => {
            state.movies = action.payload;
        },
        toggleFavorite: (state, { payload }) => {
            const index = state.movies.findIndex(m => m.id === payload)
            if (index !== -1) {
                state.movies[index].isFavorite = !state.movies[index].isFavorite
            }
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchMovies.pending, (state) => {
            state.loading = true;
            state.movies = [];
            state.error = ''
        })
        builder.addCase(fetchMovies.fulfilled, (state, action) => {
            state.loading = false;
            state.movies = action.payload;
            state.error = ''
            // Swal.fire({
            //     icon: 'success',
            //     title: 'Movies loaded!',
            //     showConfirmButton: false,
            //     timer: 1500
            // })
        })
        builder.addCase(fetchMovies.rejected, (state, action) => {
            state.loading = false;
            state.movies = [];
            state.error = action.error ?? 'Something went wrong'
        })
    }
});

export default moviesSlice.reducer;
export const { toggleFavorite, addMovies, removeMovies } = moviesSlice.actions;

