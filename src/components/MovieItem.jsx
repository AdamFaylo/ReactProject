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
    bottom: "22rem",
    left: "5rem",
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
      <ToastContainer />
      <div className="card-body">
      </div>
      <img
        className="w-100 shadow-lg p-0 mb-5 bg-white rounded card"
        src={movie.poster_path}
        alt="movie poster"
      />
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
        </div>
        <DeleteMovie movie={movie}/>
    </div>
  );
};

export default MoviesItem;

