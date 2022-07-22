import { BrowserRouter as 
    Router, 
    Route, 
    Routes, 
} from "react-router-dom";
import About from "./components/navigation bar/AboutPage";
import Home from "./components/navigation bar/HomePage";
import NavBar from "./components/navigation bar/NavBar";
import NotFound from "./components/navigation bar/NotFoundPage";
import DataBase from "./database";
import "./components/styles/App.scss";

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
            <Route element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
