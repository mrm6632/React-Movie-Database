import "../styles/NavBar.scss";
import React from "react";

const NotFound = () => {
  return (
    <div>
      <h1 className="notFound">404 URL Not Found</h1>
      <p>Oops! Seems like you've gotten lost! Redirecting to <span>HomePage</span></p>
    </div>
  );
};

export default NotFound;
