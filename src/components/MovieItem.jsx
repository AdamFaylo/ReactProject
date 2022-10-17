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
    <div className="container_card">
      <div >
        <div
          className="cellphone-container"
          onClick={(e) => {
            if (typeof e.target.className === "object") return;
            navigate(`/movies/${movie.id}`);
            // Swal.fire("Clicked")
          }}
        >
          <div className="movie">
            <div>
              <img
                className="movie-img"
                src={movie.poster_path}
                alt="img movies"
              />
            </div>
            <div className="text-movie-cont">
              <div className="mr-grid">
                <div className="col1">
                  <h1>{movie.title}</h1>
                  <ul className="movie-gen">
                    <li>PG-13 /</li>
                    <li>2h 49min /</li>
                    <li>Adventure, Drama, Sci-Fi,</li>
                  </ul>
                </div>
              </div>
              <div className="mr-grid summary-row">
                <div className="col2">
                  <h5>SUMMARY</h5>
                </div>
                <div className="col2">
                  <ul className="movie-likes">
                    <li>
                      <i className="material-icons">&#xE813;</i>
                      {movie.vote_average}
                    </li>
                    <li>
                      <i className="material-icons">&#xE813;</i>
                      {movie.vote_count}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mr-grid actors-row">
                <div className="col1">
                  <p className="movie-actors">
                    Matthew McConaughey, Anne Hathaway, Jessica Chastain
                  </p>
                </div>
              </div>
              <div className="mr-grid action-row">
                <div className="col2">
                  <div className="watch-btn">
                    <h3>
                      <i className="material-icons">&#xE037;</i>WATCH TRAILER
                    </h3>
                  </div>
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
                  {movie.isFavorite && <FaHeart style={iconStyles} />}
                  {!movie.isFavorite && <FaRegHeart style={iconStyles} />}
                </div>
                <div className="delete_movie">
                  <DeleteMovie movie={movie} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviesItem;
