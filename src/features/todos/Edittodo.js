import React, { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { editTodo, toggleEdit } from "./todoSlice";

import EditIcon from "@material-ui/icons/Edit";

const EditTodo = ({ todo }) => {
  const dispatch = useDispatch();

  const todoRef = useRef(null);
  const [todoText, setTodoText] = useState(todo.text);

  const onChange = (e) => setTodoText(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!todoText.trim() || todoText.trim() === todo.text) {
      dispatch(toggleEdit(todo.id));
      return;
    }

    dispatch(editTodo(todoText, todo.id));
    dispatch(toggleEdit(todo.id));
  };

  useEffect(() => {
    if (todo.editing) {
      todoRef.current.focus();
    }
  }, [todo.editing]);

  return (
    <>
      <form onSubmit={onSubmit} className="flex items-center">
        <EditIcon
          fontSize="small"
          className={`${todo.editing ? "text-blue-300" : "text-blue-200"} cursor-pointer`}
          onClick={() => {
            dispatch(toggleEdit(todo.id));
          }}
        />
        <input
          ref={todoRef}
          value={todoText}
          onChange={onChange}
          onFocus={(e) => e.currentTarget.select()}
          disabled={!todo.editing}
          className="focus:outline-none p-2 mx-2 rounded-2xl text-center bg-white text-sm"
        />
      </form>
    </>
  );
};

export default EditTodo;
