import React from "react";
import ToDos from "./components/ToDos";
import { TodoProps } from "./components/ToDos";

const arr = [new TodoProps("001"), new TodoProps("002"), new TodoProps("003")];

function App() {
  return (
    <div className="App">
      <ToDos items={arr} />
    </div>
  );
}

export default App;
