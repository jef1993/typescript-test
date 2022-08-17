import React, { useRef } from "react";

const NewTodo: React.FC<{ onSubmit: (str: string) => void }> = (props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const enteredText = inputRef.current!.value;
    if (enteredText.trim().length === 0) return;
    props.onSubmit(enteredText);
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="text">Todo text</label>
      <input type="text" id="text" ref={inputRef}></input>
      <button>Add todo</button>
    </form>
  );
};

export default NewTodo;
