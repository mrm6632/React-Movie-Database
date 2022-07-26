import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/navigation bar/AboutPage";
import NavBar from "./components/navigation bar/NavBar";
import NotFound from "./components/navigation bar/NotFoundPage";
import DataBase from "./database";
import "./components/styles/App.scss";
import Movie from "./components/movie/moviePage";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<DataBase />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/:id" element={<Movie />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
