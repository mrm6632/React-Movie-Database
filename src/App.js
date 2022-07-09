// import Game from "./functional/typescript/Game";

// Change the import above to change the type e.g
// import Game from "./functional/javascript/Game";
// import Game from "./classes/typescript/Game";
// import Game from "./classes/javascript/Game";

// Following are to run the exercise demos
import BlogApp from "./exercises/exercise3/BlogApp";

function App() {
  return (
    <div className="App">
      <BlogApp />
    </div>
  );
}

// "Export" allows this component to be imported elsewhere
// Each JavaScript file can only export one thing as a "default"
export default App;
