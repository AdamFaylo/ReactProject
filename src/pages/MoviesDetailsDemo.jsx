import React from "react";
import { useSelector } from "react-redux";
// import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { toggleFavorite } from "../features/movies/movies-slice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import "../CssControls/movies_details_demo.css"

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
 <div >
  <div className="movie-card">
  
  <div className="container_details">
    
    <a href="#"><img src={movie.poster_path} alt="cover" className="cover" /></a>
        
    <div className="hero" >
            {/* <img src={movie.poster_path} alt="" className="img_style"/> */}
    <div className="details">
      
    <div className="title1">{movie.title} <span>PG-13</span></div>

    <div className="title2">The Battle of the Five Armies</div>    
        
  <fieldset className="rating">
    <input type="radio" id="star5" name="rating" value="5" /><label className = "full" for="star5" title="Awesome - 5 stars"></label>
    <input type="radio" id="star4half" name="rating" value="4 and a half" /><label className="half" for="star4half" title="Pretty good - 4.5 stars"></label>
    <input type="radio" id="star4" name="rating" value="4" checked /><label className = "full" for="star4" title="Pretty good - 4 stars"></label>
    <input type="radio" id="star3half" name="rating" value="3 and a half" /><label className="half" for="star3half" title="Meh - 3.5 stars"></label>
    <input type="radio" id="star3" name="rating" value="3" /><label className = "full" for="star3" title="Meh - 3 stars"></label>
    <input type="radio" id="star2half" name="rating" value="2 and a half" /><label className="half" for="star2half" title="Kinda bad - 2.5 stars"></label>
    <input type="radio" id="star2" name="rating" value="2" /><label className = "full" for="star2" title="Kinda bad - 2 stars"></label>
    <input type="radio" id="star1half" name="rating" value="1 and a half" /><label className="half" for="star1half" title="Meh - 1.5 stars"></label>
    <input type="radio" id="star1" name="rating" value="1" /><label className = "full" for="star1" title="Sucks big time - 1 star"></label>
    <input type="radio" id="starhalf" name="rating" value="half" /><label className="half" for="starhalf" title="Sucks big time - 0.5 stars"></label>
  </fieldset>
        
    <span className="likes">109 likes</span>
        
    </div> 
      
    </div> 
    
    <div className="description">
      
      <div className="column1">
        <span className="tag">action</span>
        <span className="tag">fantasy</span>
        <span className="tag">adventure</span>
      </div> 
      
      <div className="column2">
        
        <p className="movie_overview">{movie.overview}</p>
        
        <div className="avatars">

          <a href="#" data-tooltip="Person 1" data-placement="top">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/hobbit_avatar1.png" alt="avatar1" />
          </a>
          
          <a href="#" data-tooltip="Person 2" data-placement="top">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/hobbit_avatar2.png" alt="avatar2" />
          </a>
          
          <a href="#" data-tooltip="Person 3" data-placement="top">
            <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/hobbit_avatar3.png" alt="avatar3" />
          </a>

          <ToastContainer />
        </div>
      </div>
    </div>
  </div> 
</div> 
 </div>
  );
};

export default MovieDetails;
