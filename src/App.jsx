import { Route, Routes } from "react-router-dom";
import "./App.css";
import TopNav from "./components/Nav/TopNav";
import About from "./pages/About";
import Favorites from "./pages/Favorites";
import Movies from "./pages/Movies";
import MoviesDetails from "./pages/MoviesDetails";
import useMovies from "./app/hooks/useMovies";
import CenterNav from "./components/Nav/CenterNav";
import { useSelector } from "react-redux";
import Footer from "./components/react-footer/Footer";
import MoviesGenre from "./pages/MoviesGenre"

function App() {
  const isDark = useSelector((state) => state.darkMode.isDark);
  useMovies();
  return (
    <div className={`${!isDark ? "light" : "dark"}`}>
      <TopNav />
      <CenterNav />
      <Routes>
        <Route path="/" element={<Movies catecory="general" />} />
        <Route path="/movies" element={<Movies catecory="28" />} />
        <Route path="/category" element={<MoviesGenre catecory="" />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/about" element={<About />} />
        <Route path="/movies/:movieId" element={<MoviesDetails />} />
        <Route path="/history" element={<MoviesGenre category="36" />} />
        <Route path="/drama" element={<MoviesGenre category="18" />} />
        <Route path="/comedy" element={<MoviesGenre category="35" />} />
        <Route path="/romance" element={<MoviesGenre category="10749" />} />
        <Route path="/action" element={<MoviesGenre category="28" />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
