import React from "react";
import TodoItem from "./ToDoItem";

export class TodoProps {
  id: string;
  text: string;

  constructor(todoText: string) {
    this.text = todoText;
    this.id = new Date().toISOString();
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
