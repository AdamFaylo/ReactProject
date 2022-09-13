import React from "react";
import { FaHeart, FaRegHeart} from "react-icons/fa";
import { useDispatch } from "react-redux";
import { toggleFavorite } from "../features/movies/movies-slice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Swal from "sweetalert2";
import { useNavigate } from "react-router"
import DeleteMovie from "./DeleteMovie";
import "../components/MovieItem.css"


const MoviesItem = ({ movie }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const iconStyles = { 
    color: "#FF008A", 
    fontSize: "30px", 
    position: "relative", 
    bottom: "6rem",
    left: "4.5rem",
    // background: "black",
    width: "40px",
    borderRadius: "60rem 60rem 60rem 60rem",
  };
  const style_average = { 
    color: "white", 
    fontSize: "21px", 
    position: "relative", 
    bottom: "25.2rem",
    right: "7rem",
    textShadow: "2px 2px black",
    background: "black",
    borderRadius: "70rem 70rem 70rem 70rem",
    width: "30px",
    textAlign: "center",
  };


  return (
    
    <div
     onClick={()=>{
      navigate(`/movies/${movie.id}`)
      // Swal.fire("Clicked")
    }}
      className="btn d-flex align-items-center flex-column btn_card"
      style={{ width: "15rem" }}
    >
      {/* <ToastContainer /> */}
      <div className="card-body">
        
      </div>
      <img className="w-100 shadow-lg p-0 mb-5 bg-white rounded card" src={movie.poster_path} alt="movie poster"/>
      
        <div className="btn_haert" onClick={(e) => {e.stopPropagation()
            if (!movie.isFavorite) {
              toast.success("Added", {
                position: "top-center",
                style: { textAlign: "center" },
              });
            } else {
              toast.error("Removed", {
                position: "top-center",
                style: { textAlign: "center" },
              });
            }
            dispatch(toggleFavorite(movie.id));
          }}
        >
          {movie.isFavorite && <FaHeart style={iconStyles} />}
          {!movie.isFavorite && <FaRegHeart style={iconStyles} />}
          <div style={style_average}>{movie.vote_average}</div>
        </div>
        <DeleteMovie movie={movie}/>
    </div>
  );
};

export default MoviesItem;

