import React from "react";
import Square from "./Square";

// Declare a class Board that "is" a React component
const Board = (props) => {
  // A helper function that returns a Square component
  // The Square component has properties that we pass in such as the onClick callback
  // i.e When the square is clicked, it will actually activate the onClick function from the Board's parent
  const renderSquare = (i) => {
    return <Square value={props.squares[i]} onClick={() => props.onClick(i)} />;
  };

  // Every React class must have a render() block to return a single element
  // In this case it is the <div> that contains the 9 squares
  return (
    <div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;
