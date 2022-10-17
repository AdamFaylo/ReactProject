import React from "react";
import { useSelector } from "react-redux";
import { FaHeart, FaRegHeart,  FaBackspace } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { toggleFavorite } from "../features/movies/movies-slice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import "../components/CssControls/movies_details.css"


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
    <div style={{
    backgroundImage:`url('${movie.poster_path}')`,
    position:'absolute',
    width:'100%',
    height:'60%',
    objectFit:'contain',
    backgroundPosition:"center center",
    backgroundSize:'1000px 100%',
    transform:'rotate(-5deg) translateY(-32px)',
    zIndex:'2'  
  }}/>

    <a href="#"><img src={movie.poster_path} alt="cover" className="cover" /></a>
        
    <div className="hero">
      <div>
      </div>
    <button className="btn_back" onClick={() => { navigate(-1);}}><FaBackspace/> Back</button>
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
       
            {/* <img src={movie.poster_path} alt="" className="img_style"/> */}
   
    <div className="details">
      
    <div className="title1">{movie.title}</div>

    <div className="title2">{movie.release_date}</div>    
        
  {/* <fieldset className="rating">
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
  </fieldset> */}
        
         
    </div> 
      
    </div> 
    
    <div className="description">
      
      <div className="column1">

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
        </div>
      </div>
    </div>
  </div> 
</div> 
        
 </div>
  );
};

export default MovieDetails;
