import React from "react";

interface NavBarComponentProps {

}


const NavBarComponent: React.FC<NavBarComponentProps> = (props) => {

  return (
    <div className="nav">
      <ul>
        <li><a href="/">It's</a></li>
        <li><a href="/">Like</a></li>
        <li><a href="/">Whatever</a></li>
      </ul>
    </div >
  );
}

export default NavBarComponent;
