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
    <div className="text-sm">
      <form onSubmit={onSubmit}>
        <input
          value={todoText}
          onChange={onChange}
          className="focus:outline-none border border-blue-400 p-2 rounded-md"
        />
        <button
          type="submit"
          className="border-t border-b border-r p-2 rounded-md border-blue-300 bg-blue-300 text-white transition-colors focus:outline-none"
        >
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
