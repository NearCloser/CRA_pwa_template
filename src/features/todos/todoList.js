import React, { useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";

import { VisibilityFilters } from "../filters/filterSlice";
import { toggleTodo, deleteTodo, allSet } from "./todoSlice";
import EditTodo from "./Edittodo";

import DeleteIcon from "@material-ui/icons/Delete";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";

const TodoList = () => {
  const dispatch = useDispatch();
  const selectTodos = (state) => state.todos;
  const selectFilter = (state) => state.visibilityFilter;

  const selectVisibleTodos = createSelector([selectTodos, selectFilter], (todos, filter) => {
    switch (filter) {
      case VisibilityFilters.SHOW_ALL:
        return todos;
      case VisibilityFilters.SHOW_COMPLETED:
        return todos.filter((t) => t.completed);
      case VisibilityFilters.SHOW_ACTIVE:
        return todos.filter((t) => !t.completed);
      default:
        throw new Error("Unknown filter: " + filter);
    }
  });

  const todos = useSelector((state) => selectVisibleTodos(state));

  const ref = useRef();

  const handleClickOutside = (e) => {
    if (ref?.current?.contains(e.target)) {
      // inside click
      return;
    }
    // outside click
    if (todos.some((todo) => todo.editing)) {
      dispatch(allSet());
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  return (
    <div className="max-w-screen-md mx-auto">
      <ul className="my-8 gap-y-4 flex flex-col items-start" ref={ref}>
        {todos.map((todo) => (
          <li key={todo.id} className={`px-2 py-1 inline-block`}>
            <div
              className={`${
                todo.completed ? "bg-blue-50" : "bg-red-50"
              }  flex items-center rounded-md px-4 py-1 space-x-2`}
            >
              <CheckCircleOutlineIcon
                className={`${
                  todo.completed ? "text-opacity-100 text-blue-300" : "opacity-20 text-red-300"
                } cursor-pointer`}
                onClick={() => dispatch(toggleTodo(todo.id))}
              />
              <EditTodo todo={todo} />
              <DeleteIcon
                fontSize="small"
                className="text-red-300 cursor-pointer"
                onDoubleClick={() => dispatch(deleteTodo(todo.id))}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
