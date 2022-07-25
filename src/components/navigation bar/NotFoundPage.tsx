import React from "react";
import {
  NavLink
} from "react-router-dom";
import "../images/space.jpeg";
import "../styles/NavBar.scss";
import "../styles/NotFound.scss";

const NotFound = () => {
  return (
    <div className="not-found-div">
      <h1 className="number">404</h1>
      <h2 className="page">Page Not Found</h2>
      <p className="oops">Oops! Looks like you got lost...</p>
      <NavLink to="/">
        <button className="button">Go Back Home</button>
      </NavLink>
    </div>
  );
};

export default NotFound;
