import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import Swal from 'sweetalert2';
import axios, { Axios } from 'axios';

const movieUrl = (category, page) => {
    return `https://api.themoviedb.org/3/discover/movie` +
        `?api_key=b3b1492d3e91e9f9403a2989f3031b0c&language=en-us` +
        `&sort_by=popularity.desc` +
        `&include_adult=false` +
        `&with_genres=${category}` +
        `&include_video=false` +
        `&page=${page}` +
        `&with_watch_monetization_types=flatrate`
}

const imageUrl = (image_path) => `https://image.tmdb.org/t/p/original${image_path}`


const initialState = {
    movies: [],
    error: '',
    loading: false,
    initialState: [1],
    filterMovie: [],
    video: false,
}
export const fetchMovies = createAsyncThunk('movie/fetch',async ({category,page}) => {
    const url = movieUrl(category, page)
    const response = await axios.get(url);
    return response.data.results.map(m => ({
            ...m,
            poster_path: imageUrl(m.poster_path),
            backdrop_path: imageUrl(m.backdrop_path),
            video: imageUrl(m.video),
             isFavorite: false
         }))
  
})

// export const fetchMovies = createAsyncThunk('movie/fetch', ({category,page}) => {
//     const url = movieUrl(category, page)
//     console.log(url)
//     //return fetch url
//     return fetch(url)
//         .then((response) => response.json())
//         .then((json) => json.results)
//         .then(movies => movies.map(m => ({
//             ...m,
//             poster_path: imageUrl(m.poster_path),
//             backdrop_path: imageUrl(m.backdrop_path),
//             video: imageUrl(m.video),
//             isFavorite: false
//         })))
// })
// ----------------------------------------------------------------------//
const moviesSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {
        addMovies: (state, action) => {
            state.movies = action.payload;
            state.filterMovie = action.payload;
        },
        deleteMovies: (state, action) => {
            if (!action.payload || action.payload === null)
                return
            state.movies = state.movies.filter(movie => movie.id !== action.payload)
            state.filterMovie = state.movies.filter(movie => movie.id !== action.payload)
        },
        toggleFavorite: (state, { payload }) => {
            const index = state.movies.findIndex(m => m.id === payload)
            if (index !== -1) {
                state.movies[index].isFavorite = !state.movies[index].isFavorite
                state.filterMovie[index].isFavorite = !state.filterMovie[index].isFavorite
            }
        },
        filterMovie: (state, { payload }) => {
            payload = payload.toLowerCase()
            // state.movies=state.movies.filter(x=> x.title.includes(payload))
            if (!payload || payload === null || payload.trim().length < 1) { // user didnt enter anything
                state.filterMovie = [ ...state.movies ]
                return;
            }
            state.filterMovie = state.movies.filter(x => x.title.toLowerCase().includes(payload))
            console.log(payload);
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchMovies.pending, (state) => {
            state.loading = true;
            state.movies = [];
            state.filterMovie = []
            state.error = ''
        })
        builder.addCase(fetchMovies.fulfilled, (state, action) => {
            state.loading = false;
            state.movies = action.payload;
            state.filterMovie = action.payload;
            state.error = ''
            Swal.fire({
                 icon: 'success',
                 title: 'Movies loaded!',
                 showConfirmButton: false,
                 timer: 1500
             })
        })
        builder.addCase(fetchMovies.rejected, (state, action) => {
            state.loading = false;
            state.movies = [];
            state.filterMovie = []
            state.error = action.error ?? 'Something went wrong'
        })
    }
});

export default moviesSlice.reducer;
export const { toggleFavorite, addMovies, deleteMovies, nextPage, backPage, filterMovie } = moviesSlice.actions;