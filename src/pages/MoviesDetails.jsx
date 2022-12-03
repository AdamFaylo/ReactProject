import React from "react";
import { useSelector } from "react-redux";
import { FaHeart, FaRegHeart, FaBackspace } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { toggleFavorite } from "../features/movies/movies-slice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import "../components/CssControls/movies_details.css";

const MovieDetails = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const mid = Number(movieId);
  const movie = useSelector((state) => state.movie.movies).find(
    (m) => m.id === mid
  );
  const iconStyles = { color: "#FF008A", fontSize: "30px" };
  if (!movie) {
    return <Navigate to={"/"} />;
  }

  return (
    <div>
      <div className="movie-card">
        <div className="container_details">
          <div
            style={{
              backgroundImage: `url('${movie.poster_path}')`,
              position: "absolute",
              width: "100%",
              height: "60%",
              objectFit: "contain",
              backgroundPosition: "no-repeat center center fixed",
              mozBackgroundSize: "no-repeat",
              oBackgroundSize: "cover",
              backgroundSize: "cover",
              transform: " translateY(-22px)",
              zIndex: "1",
              maxWidth: "100%",
              // opacity: "0.8",
            }}
          />
          <a href="#">
            <img src={movie.poster_path} alt="cover" className="cover" />
          </a>

          <div className="hero">
            <div></div>
            <button
              className="btn_back"
              onClick={() => {
                navigate(-1);
              }}
            >
              <FaBackspace /> Back
            </button>
            <button
              className="bnt_heart"
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
            <div className="details">
              <div className="title1">{movie.title}</div>
              <div className="title2">{movie.release_date}</div>
            </div>
          </div>
          <div className="description">
            <div className="column1"></div>
            <div className="column2">
              <p className="movie_overview">{movie.overview}</p>
              <div className="avatars">
                <a href="#" data-tooltip="Person 1" data-placement="top"></a>
                <a href="#" data-tooltip="Person 2" data-placement="top"></a>
                <a href="#" data-tooltip="Person 3" data-placement="top"></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
