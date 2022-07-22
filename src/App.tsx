import { BrowserRouter as Switch, Router, Route, Routes } from "react-router-dom";
import About from "./components/AboutPage";
import Home from "./components/HomePage";
import NavBar from "./components/NavBar";
import NotFound from "./components/NotFoundPage";
import DataBase from "./database";
// import "App.css";

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
          <Switch>
            <Route path="/" element={<Home />} />
            <Route element={<NotFound />} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
