import React from "react";
import TodoItem from "./ToDoItem";
import { v4 as uuidv4 } from "uuid";

export class TodoProps {
  id: string;
  text: string;

  constructor(todoText: string) {
    this.text = todoText;
    this.id = uuidv4();
  }
}

const ToDos: React.FC<{ items: TodoProps[] }> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <TodoItem key={item.id} text={item.text} />
      ))}
    </ul>
  );
};

export default ToDos;
