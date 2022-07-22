import { BrowserRouter as Route, Router, Routes } from "react-router-dom";
import About from "./components/AboutPage";
import Home from "./components/HomePage";
import NavBar from "./components/NavBar";
import NotFound from "./components/NotFoundPage";
import DataBase from "./database";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <NavBar />
          <Routes>
            {/* <Route path={<NotFound />} /> */}
            <Route path="/" element={<DataBase />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}
