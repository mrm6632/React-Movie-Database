import React from "react";

interface FooterComponentProps {

}


const FooterComponent: React.FC<FooterComponentProps> = (props) => {

  return (
    <div className="foot">
      <footer>My foot goes here..</footer>
    </div >
  );
}

export default FooterComponent;
