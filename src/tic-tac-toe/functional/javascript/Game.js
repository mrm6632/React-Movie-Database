import React, { useState } from "react";
import Board from "./Board";

// A helper function to determine the winner
// The parameter 'squares' is a 3 by 3 array
function calculateWinner(squares) {
  // Instantiate all possible ways to win
  const lines = [
    [0, 1, 2], // First row
    [3, 4, 5], // Second row
    [6, 7, 8], // Third row
    [0, 3, 6], // First column
    [1, 4, 7], // Second column
    [2, 5, 8], // Third column
    [0, 4, 8], // Back slash
    [2, 4, 6], // Forward slash
  ];

  // Loop through all possibilities and check
  for (let i = 0; i < lines.length; i++) {
    // Deconstruct the indices
    const [a, b, c] = lines[i]; // For example, when i is 1, a is 3, b is 4, and c is 5
    // Check is the symbols (X or O) are all the same
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]; // If so, get out and return the winner
    }
  }

  return null;
}

const Game = (props) => {
  const [history, setHistory] = useState([{ squares: Array(9).fill(null) }]);
  const [xIsNext, setxIsNext] = useState(true);
  const [stepNumber, setStepNumber] = useState(0);

  // Jump to past moves
  const jumpTo = (step) => {
    setStepNumber(step);
    setxIsNext(step % 2 ? false : true);
  };

  // When the Square gets clicked, this will be invoked
  const handleClick = (i) => {
    // Get a copy of the history and its squares
    const copiedHistory = history.slice(0, stepNumber + 1);
    const current = copiedHistory[history.length - 1];
    const squares = current.squares.slice();

    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    // Current square is marked with X or O based on whose turn it is
    squares[i] = xIsNext ? "X" : "O";

    // Update the state including the state of the board
    setStepNumber(copiedHistory.length);
    setxIsNext(!xIsNext);
    setHistory(
      copiedHistory.concat([
        {
          squares: squares,
        },
      ])
    );
  };

  const current = history[stepNumber];
  const winner = calculateWinner(current.squares);

  // Inform the players of the status
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  const moves = history.map((step, move) => {
    const desc = move ? "Move #" + move : "Game start";
    return (
      <li key={move}>
        <a href="/#" onClick={() => jumpTo(move)}>
          {desc}
        </a>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={current.squares} onClick={(i) => handleClick(i)} />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
};

export default Game;
