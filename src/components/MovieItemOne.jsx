import React from "react";
import { FaHeart, FaRegHeart} from "react-icons/fa";
import { useDispatch } from "react-redux";
import { toggleFavorite } from "../features/movies/movies-slice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Swal from "sweetalert2";
import { useNavigate } from "react-router"
import DeleteMovie from "./DeleteMovie";
// import "../components/MovieItem.css"
import "../components/movieItemOne.css"



const MoviesItem = ({ movie }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const iconStyles = { 
    color: "#FF008A", 
    fontSize: "30px", 
    width: "40px",
    borderRadius: "60rem 60rem 60rem 60rem",
  };
  const style_average = { 
    color: "white", 
    fontSize: "21px", 
    textShadow: "2px 2px black",
    background: "black",
    borderRadius: "70rem 70rem 70rem 70rem",
    width: "30px",
  };


  return (
    <div>
      <div class="container">
    <div class="cellphone-container"   onClick={()=>{
      navigate(`/movies/${movie.id}`)
      // Swal.fire("Clicked")
    }}>    
      <div class="movie">       
        <div class="menu"><i class="material-icons"></i></div>
        <div>
          <img class="movie-img" src={movie.poster_path} alt="" />
        </div>
        <div class="text-movie-cont">
          <div class="mr-grid">
            <div class="col1">
              <h1>{movie.title}</h1>
              <ul class="movie-gen">
                <li>PG-13  /</li>
                <li>2h 49min  /</li>
                <li>Adventure, Drama, Sci-Fi,</li>
              </ul>
            </div>
          </div>
          <div class="mr-grid summary-row">
            <div class="col2">
              <h5>SUMMARY</h5>
            </div>
            <div class="col2">
               <ul class="movie-likes">
                <li><i class="material-icons">&#xE813;</i>{movie.vote_average}</li>
                <li><i class="material-icons">&#xE813;</i>{movie.vote_count}</li>
              </ul>
            </div>
          </div>
          <div class="mr-grid actors-row">
            <div class="col1">
              <p class="movie-actors">Matthew McConaughey, Anne Hathaway, Jessica Chastain</p>
            </div>
          </div>
          <div class="mr-grid action-row">
            <div class="col2"><div class="watch-btn"><h3><i class="material-icons">&#xE037;</i>WATCH TRAILER</h3></div>
            </div>
            <div className="btn_haert" onClick={(e) => {e.stopPropagation()
            if (!movie.isFavorite) {
              toast.success("Added", {
                position: "top-center",
                style: { textAlign: "center" },
              });
            } else {
              toast.error("Removed", {
                position: "top-center",
                style: { textAlign: "center" },});}dispatch(toggleFavorite(movie.id));}}>
          {movie.isFavorite && <FaHeart style={iconStyles} />}
          {!movie.isFavorite && <FaRegHeart style={iconStyles} />}
          
        </div>
           <DeleteMovie movie={movie}/>

          </div>
        </div>
      </div>
  </div>
</div>
    </div>
   
  );
};

export default MoviesItem;

