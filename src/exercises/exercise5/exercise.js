import { Component } from 'react';

// Change the import above to change the type e.g functional versus classes
import Todos from './components/functional/todos';

import "./exercise.css";

class App extends Component {

  render() {
    return (
      <div className="container">
        <Todos />
      </div>
    );
  }
}

export default App;
