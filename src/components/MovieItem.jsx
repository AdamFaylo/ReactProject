import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { toggleFavorite } from "../features/movies/movies-slice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router";
import DeleteMovie from "./DeleteMovie";
import "../components/CssControls/movie-item.css";

const MoviesItem = ({ movie }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="container_card">
      <div
        className="cellphone_container"
        onClick={(e) => {
          if (typeof e.target.className === "object") return;
          navigate(`/movies/${movie.id}`);
          // Swal.fire("Clicked")
        }}
      >
        <div>
          <img className="movie-img" src={movie.poster_path} alt="img movies" />
          <div className="text-movie-cont">
            <div className="text_movie">
              <h1 className="text_h1">{movie.title}</h1>
            </div>

            <div className="vote_movie">
              <ul className="movie_likes">
                <li>
                  <i>{movie.vote_average}</i>
                </li>

                <li>
                  <i>{movie.vote_count}</i>
                </li>
              </ul>
            </div>
            <div className="">
              <div className="watch_btn">
                <h3>
                  <i></i>WATCH TRAILER
                </h3>
              </div>
              <div
                className="btn_haert"
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
                {movie.isFavorite && <div className="fa_heart_container"><FaHeart className="fa_heart" /></div>}
                {!movie.isFavorite && <FaRegHeart className="fa_heart" />}
              </div>
              <div className="delete_movie">
                <DeleteMovie movie={movie} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviesItem;
