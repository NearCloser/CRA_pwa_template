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
      <form onSubmit={onSubmit} className="flex flex-row">
        <input
          value={todoText}
          onChange={onChange}
          className="focus:outline-none border border-blue-400 py-2 px-4 rounded-md flex-1"
        />
        <button
          type="submit"
          className="border-t border-b border-r p-2 rounded-md border-blue-300 bg-blue-300 text-white hover:opacity-80 transition-opacity focus:outline-none"
        >
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
