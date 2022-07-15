import React from "react";

// Note that JavaScript does not have types so it's hard to determine what props are until runtime
const Square = (props) => {
  return (
    <button className="square" onClick={() => props.onClick()}>
      {props.value}
    </button>
  );
};

export default Square;
