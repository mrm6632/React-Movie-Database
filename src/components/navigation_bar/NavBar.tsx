import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <ul>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/About">About</NavLink>
      </li>
      <div className="nav-right">
        <li>
          <NavLink to="/">
            <img
              className="logo-image"
              src={require("../images/logo.png")}
              alt="logo"
            />
          </NavLink>
        </li>
      </div>
      <li>
        <NavLink to="*"></NavLink>
      </li>
    </ul>
  );
};

export default NavBar;
