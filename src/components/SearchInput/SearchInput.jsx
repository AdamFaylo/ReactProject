import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import { filterMovie } from "../../features/movies/movies-slice";
// import useSearchMovies  from "../../app/hooks/useSearchMovies"
import { useQuery } from "../../app/hooks/useSearchMovies";
import { queryMovies } from "../../features/movies/searchMovies-slice";
import './search.css'

const SearchInput = () => {

const dispatch = useDispatch();
  return  (
    <div className="search_style container">
    
      <div className="input-group md-form form-sm form-2 pl-0">
        {/* <input onChange={(e) => dispatch(filterMovie(e.target.value))}
          className="form-control my-0 py-1 red-border"
          type="text"
          placeholder="Search Movies"
          aria-label="Search"
        /> */}
        <input onChange={(e)=>{
          dispatch(queryMovies(e.target.value))
        }}></input>
        <div>
         
        </div>
      </div>
    </div>
  );
};

export default SearchInput;




// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// // import { filterMovie } from "../../features/movies/movies-slice";
// // import useSearchMovies  from "../../app/hooks/useSearchMovies"
// import { useQuery } from "../../app/hooks/useSearchMovies";
// import { queryMovies } from "../../features/movies/searchMovies-slice";
// import './search.css'

// const SearchInput = () => {

// const dispatch = useDispatch();
//   return  (
//     <div className="search_style container">
    
//       <div className="input-group md-form form-sm form-2 pl-0">
//         {/* <input onChange={(e) => dispatch(filterMovie(e.target.value))}
//           className="form-control my-0 py-1 red-border"
//           type="text"
//           placeholder="Search Movies"
//           aria-label="Search"
//         /> */}
//         <input onChange={(e)=>{
//           dispatch(queryMovies(e.target.value))
//         }}></input>
//         <div>
         
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SearchInput;