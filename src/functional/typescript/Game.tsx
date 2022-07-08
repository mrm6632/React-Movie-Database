import React, { useEffect, useState } from 'react';
import Board from "./Board";
import Helper from "./Helper";

interface GameProps {

}

interface History {
  squares: string[]
}

const Game: React.FC<GameProps> = props => {
  const [time, setTime] = useState<number>(0);
  const [xIsNext, setxIsNext] = useState<Boolean>(true);
  const [history, setHistory] = useState<History[]>([{ squares: Array(9).fill(null), }]);
  const [stepNumber, setStepNumber] = useState<number>(0);

  useEffect(() => {
    setInterval(() => setTime(time + 1), 1000);
  })

  const handleClick = (i: number) => {
    const sliced_history = history.slice(0, stepNumber + 1);
    const current = sliced_history[sliced_history.length - 1];
    const squares = current.squares.slice();

    if (Helper.calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = xIsNext ? "X" : "O";

    setHistory(history.concat([{ squares: squares }]));
    setStepNumber(history.length)
    setxIsNext(!xIsNext);
  }

  const jumpTo = (step: number) => {
    setStepNumber(step)
    setxIsNext((step % 2) === 0);
  }

  const history_copy = history;
  const current = history_copy[stepNumber];

  const moves = history.map((_, move) => {
    const desc = move ?
      'Go to move #' + move :
      'Go to game start';
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    );
  });

  let status;
  const winner = Helper.calculateWinner(current.squares);
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <>
      <p>Time Played: {time} seconds</p>
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={i => handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    </>
  );

}

export default Game;