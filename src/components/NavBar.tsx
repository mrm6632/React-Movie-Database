import {
    BrowserRouter as Router,
    NavLink,
    Route,
    Routes,
  } from "react-router-dom";
import Home from './HomePage';
import About from './AboutPage';
import NotFound from './NotFoundPage';

const NavBar = () => {
    <ul>
        <li>
        <NavLink to="/">Home</NavLink>
        </li>
        <li>
        <NavLink to="/About">About</NavLink>
        </li>
        <li>
        <NavLink to="/Not Found">NotFound</NavLink>
        </li>
    </ul>

    return (
    <Router>
        <div className="App">
            <NavBar />
            <Routes>
            <Route element={<NotFound />} />
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            </Routes>
        </div>
    </Router>
    );
};

export default NavBar;