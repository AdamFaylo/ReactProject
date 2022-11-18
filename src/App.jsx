import { Route, Routes } from "react-router-dom";
import "./App.css";
import TopNav from "./components/Nav/top-nav.";
import About from "./pages/About";
import Favorites from "./pages/Favorites";
import Movies from "./pages/Movies";
import MoviesDetailsDemo from "./pages/MoviesDetails" 
import useMovies from "./app/hooks/useMovies";
import CenterNav from "./components/Nav/CenterNav";
import { useSelector } from "react-redux";
import Footer from "../src/components/footer/Footer";
import Login from "./components/Login/Login";
import Comments from "./pages/Comments";
import Home from "./pages/Home";

function App() {
  const isDark = useSelector((state) => state.darkMode.isDark);
  const logIn = useSelector((state) => state.login.show);
  useMovies();
  return (
    <>
      <div className={`${!isDark ? "light" : "dark"}`}>
        <TopNav />
        <CenterNav />
        {logIn && (<Login />)}
        <Routes>
          <Route path="/" element={<Home catecory="movies"/>} />
          <Route path="movies" element={<Movies catecory="movies" /> } />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/about" element={<About />} />
          <Route path ="/comments" element={<Comments/>}/>
          <Route path="/movies/:movieId" element={<MoviesDetailsDemo />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
