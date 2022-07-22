import {
    BrowserRouter as Router,
    NavLink,
    Route,
    Routes,
  } from "react-router-dom";
import Home from "./HomePage";
import About from "./AboutPage";
import NotFound from "./NotFoundPage";
import "./styles/NavBar.scss";

const NavBar = () => {
    return (
    <ul>
        <li>
        <NavLink to="/">Home</NavLink>
        </li>
        <li>
        <NavLink to="/About">About</NavLink>
        </li>
        <li>
        <NavLink to="/404">Not Found</NavLink>
        </li>
    </ul>
    )
};

export default NavBar;