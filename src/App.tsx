import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MovieInfo from "./components/movie/MovieInfo";
import About from "./components/navigation_bar/AboutPage";
import NavBar from "./components/navigation_bar/NavBar";
import NotFound from "./components/navigation_bar/NotFoundPage";
import DataBase from "./database";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<DataBase />} />
          <Route path="/about" element={<About />} />
          <Route path="/movies/:id" element={<MovieInfo />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
