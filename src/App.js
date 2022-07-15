// Change the import above to change the type e.g
// import Main from "./tic-tac-toe/functional/typescript/Game";
// import Main from "./tic-tac-toe/functional/javascript/Game";
// import Main from "./tic-tac-toe/classes/typescript/Game";
// import Main from "./tic-tac-toe/classes/javascript/Game";

// Following are to run the exercise demos
// import Main from "./exercises/exercise3/main";
// import Main from "./exercises/exercise4/exercise";
import Main from "./exercises/exercise5/exercise";

const App = () => {
  return (
    <div className="App">
      <Main />
    </div>
  );
}

// "Export" allows this component to be imported elsewhere
// Each JavaScript file can only export one thing as a "default"
export default App;
