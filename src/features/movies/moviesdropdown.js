import { fetchMovies } from "./movies-slice"

export const dropDownList = (dispatch) => [
    {action: (category) => {
        alert(category)
        dispatch(fetchMovies(category)) },title:'Horror',value:'29'},
  
    {action: (category) => { dispatch(fetchMovies(category)) }, title:'Action',value:'28'},
  
    {action: (category) => { dispatch(fetchMovies(category)) }, title:'Adventure',value:'12'},
  
    {action: (category) => { dispatch(fetchMovies(category)) },title:'Animation',value:'16'},

    {action: (category) => { dispatch(fetchMovies(category)) },title:'Comedy',value:'35'},

    {action: (category) => { dispatch(fetchMovies(category)) },title:'Crime',value:'80'},
    
    {action: (category) => { dispatch(fetchMovies(category)) }, title:'Documentary',value:'99'},
  
    {action: (category) => { dispatch(fetchMovies(category)) },title:'Family',value:'10751'},

    {action: (category) => { dispatch(fetchMovies(category)) },title:'Fantasy',value:'14'},

    {action: (category) => { dispatch(fetchMovies(category)) },title:'History',value:'36'},

  ]