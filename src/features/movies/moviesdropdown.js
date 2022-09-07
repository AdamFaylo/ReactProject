import { fetchMovies } from "./movies-slice"

export const dropDownList = (dispatch) => [
    {action: (category) => {
        alert(category)
        dispatch(fetchMovies(category)) },title:'Horror',value:'29'},
  
    {action: (category) => { dispatch(fetchMovies(category)) }, title:'Action',value:'26'},
  
    {action: (category) => { dispatch(fetchMovies(category))}, title:'Drama',value:'36'},
  
    {action: (category) => { dispatch(fetchMovies(category))  },title:'About',value:'45'}
  ]