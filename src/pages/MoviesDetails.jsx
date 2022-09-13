import React from "react";
import { useSelector } from "react-redux";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { toggleFavorite } from "../features/movies/movies-slice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import "../components/Grid.css"

const MovieDetails = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //convert string to number:
  const mid = Number(movieId);
  const movie = useSelector((state) => state.movie.movies).find(
    (m) => m.id === mid
  );
  const iconStyles = { color: "#FF008A", fontSize: "100px" };
  if (!movie) {
    return <Navigate to={"/"} />;
  }

  return (
    <div style={{ direction: "rtl"}} className="card_controle btn border-0 d-flex flex-column align-items-center">
      <button className="btn btn-primary w-25" onClick={() => { navigate(-1);}}> חזרה </button>
      <h2>פרטים לסרט - {movie.title}</h2>
      <ToastContainer />
      <p>{movie.overview}</p>
      <button
        className="btn border-0"
        onClick={(e) => {
          e.stopPropagation();
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
      </button>
      <img
        className="w-50 shadow-lg p-3 mb-5 bg-white rounded card"
        src={movie.poster_path}
        alt="movie poster"
      />

      <img
        className="w-50 shadow-lg p-3 mb-5 bg-white rounded card"
        src={movie.backdrop_path}
        alt="movie poster"
      />
      <video src={movie.video}></video>
    </div>
  );
};

export default MovieDetails;
