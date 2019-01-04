import React, { Component } from "react";
import Todos from "./components/Todos";

import "./App.css";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "code",
        completed: false
      },
      {
        id: 2,
        title: "code more",
        completed: false
      },
      {
        id: 3,
        title: "code some more",
        completed: false
      }
    ]
  };

  render() {
    return (
      <div className="App">
        <header>
          <Todos todos={this.state.todos} />
        </header>
      </div>
    );
  }
}

export default App;
