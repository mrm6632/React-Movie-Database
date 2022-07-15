import React from "react";
import Square from "./Square";

// Declare a class Board that "is" a React component
class Board extends React.Component {
  // A helper function that returns a Square component
  // The Square component has properties that we pass in such as the onClick callback
  // i.e When the square is clicked, it will actually activate the onClick function from the Board's parent
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  // Every React class must have a render() block to return a single element
  // In this case it is the <div> that contains the 9 squares
  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

export default Board;
