import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./todoSlice";

const AddTodo = () => {
  const dispatch = useDispatch();

  const [todoText, setTodoText] = useState("");

  const onChange = (e) => setTodoText(e.target.value);
  const onSubmit = (e) => {
    e.preventDefault();
    if (!todoText.trim()) {
      return;
    }
    dispatch(addTodo(todoText));
    setTodoText("");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={todoText} onChange={onChange} />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default AddTodo;
