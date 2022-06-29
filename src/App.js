import Game from "./typescript/Game";

function App() {
  return (
    <div className="App">
      <Game></Game>
    </div>
  );
}

// "Export" allows this component to be imported elsewhere
// Each JavaScript file can only export one thing as a "default"
export default App;
