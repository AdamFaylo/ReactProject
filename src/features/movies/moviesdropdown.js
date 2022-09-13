import { fetchMovies } from "./movies-slice"

export const dropDownList = (dispatch) => [
    {action: (category) => {
        alert(category)
        dispatch(fetchMovies({category,page:1})) },title:'Horror',value:'29'},
  
    {action: (category) => { dispatch(fetchMovies({category,page:1})) }, title:'Action',value:'28'},
  
    {action: (category) => { dispatch(fetchMovies({category,page:1})) }, title:'Adventure',value:'12'},
  
    {action: (category) => { dispatch(fetchMovies({category,page:1})) },title:'Animation',value:'16'},

    {action: (category) => { dispatch(fetchMovies({category,page:1})) },title:'Comedy',value:'35'},

    {action: (category) => { dispatch(fetchMovies({category,page:1})) },title:'Crime',value:'80'},
    
    {action: (category) => { dispatch(fetchMovies({category,page:1})) }, title:'Documentary',value:'99'},
  
    {action: (category) => { dispatch(fetchMovies({category,page:1})) },title:'Family',value:'10751'},

    {action: (category) => { dispatch(fetchMovies({category,page:1})) },title:'Fantasy',value:'14'},

    {action: (category) => { dispatch(fetchMovies({category,page:1})) },title:'History',value:'36'},

  ]