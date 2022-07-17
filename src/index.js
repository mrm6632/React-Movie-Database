import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// Change the import above to change the type e.g
// import Main from "./tic-tac-toe/functional/typescript/Game";
// import Main from "./tic-tac-toe/functional/javascript/Game";
// import Main from "./tic-tac-toe/classes/typescript/Game";
// import Main from "./tic-tac-toe/classes/javascript/Game";

// Following are to run the exercise demos
import Main from "./exercises/exercise3/main";
// import Main from "./exercises/exercise4/exercise";
// import Main from "./exercises/exercise5/exercise";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>
);
