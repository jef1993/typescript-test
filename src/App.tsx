import React, { useState } from "react";
import ToDos from "./components/ToDos";
import NewTodo from "./components/NewTodo";
import { TodoProps } from "./components/ToDos";

const arr = [new TodoProps("001"), new TodoProps("002"), new TodoProps("003")];

function App() {
  const [items, setItems] = useState<TodoProps[]>([]);

  const itemsHandler = (str: string) => {
    setItems((prev) => {
      return [...prev, new TodoProps(str)];
    });
  };
  return (
    <div className="App">
      <NewTodo onSubmit={itemsHandler} />
      <ToDos items={items} />
    </div>
  );
}

export default App;
