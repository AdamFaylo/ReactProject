import { Route, Routes } from "react-router-dom";
import "./App.css";
import TopNav from "./components/Nav/TopNav";
import About from "./pages/About";
import Favorites from "./pages/Favorites";
import Movies from "./pages/Movies";
import MoviesDetails from "./pages/MoviesDetails";
import useMovies from "./app/hooks/useMovies";
import CenterNav from "./components/Nav/CenterNav"
import { useSelector } from 'react-redux'
import Footer from "./components/react-footer/Footer";
import MoviesGenre from "./pages/MoviesGenre";

function App() {
  const isDark = useSelector(state => state.darkMode.isDark);
  useMovies();
  return (
    <div className={`${!isDark ? 'light' : 'dark' }`}>
      <TopNav />
      <CenterNav/>
      <Routes>
        <Route path="/" element={<Movies catecory="general" />} />
        <Route path="/movies" element={<Movies catecory="general"/>} />
        <Route path="/category" element={<MoviesGenre catecory=""/>} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/about" element={<About />} />
        <Route path="/movies/:movieId" element={<MoviesDetails />} />
      </Routes>
      <Footer/> 
    </div>
  );
}

export default App;