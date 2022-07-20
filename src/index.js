import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// Change the import above to change the type e.g
// import Demo from "./tic-tac-toe/functional/typescript/Game";
// import Demo from "./tic-tac-toe/functional/javascript/Game";
// import Demo from "./tic-tac-toe/classes/typescript/Game";
// import Demo from "./tic-tac-toe/classes/javascript/Game";

// Following are to run the exercise demos
// import Demo from "./exercises/exercise3/main";
import Demo from "./exercises/exercise4/exercise";
// import Demo from "./exercises/exercise5/exercise";

// Following are examples of React hooks and router
// import Demo from "./routes/RoutingExample";
// import Demo from "./hooks/useEffectExample";
// import Demo from "./hooks/useStateExample";
// import Demo from "./hooks/useRefExample";
// import Demo from "./hooks/useContextExample";
// import Demo from "./hooks/useCallbackExample";
// import Demo from "./hooks/useMemoExample";

// import Demo from "./hooks/useNonRefExample";
// import Demo from "./hooks/useNonContextExample";
// import Demo from "./hooks/useNonMemoExample";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Demo />
  </React.StrictMode>
);
