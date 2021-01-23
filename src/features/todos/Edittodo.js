import React, { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { editTodo, toggleEdit, toggleShow } from "./todoSlice";

import EditIcon from "@material-ui/icons/Edit";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";

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
      <form onSubmit={onSubmit} className="flex items-center w-full">
        <EditIcon
          fontSize="small"
          className={`${todo.editing ? "text-blue-400" : "text-blue-200"} cursor-pointer ml-2`}
          onClick={() => {
            dispatch(toggleEdit(todo.id));
          }}
        />
        <TrendingUpIcon
          onClick={() => {
            dispatch(toggleShow(todo.id));
          }}
          className={`${todo.show ? "text-blue-400" : "text-blue-200"} cursor-pointer ml-2`}
        />
        <div className="w-full mx-2">
          <input
            ref={todoRef}
            value={todoText}
            onChange={onChange}
            onFocus={(e) => e.currentTarget.select()}
            disabled={!todo.editing}
            className="focus:outline-none py-2 px-4 rounded-2xl bg-white text-sm w-full block"
          />
        </div>
      </form>
    </>
  );
};

export default EditTodo;
