import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSelector } from "@reduxjs/toolkit";
import { VisibilityFilters } from "../filters/filterSlice";
import { toggleTodo } from "./todoSlice";

const TodoList = () => {
  const dispatch = useDispatch();
  const selectTodos = (state) => state.todos;
  const selectFilter = (state) => state.visibilityFilter;

  const selectVisibleTodos = createSelector(
    [selectTodos, selectFilter],
    (todos, filter) => {
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
    }
  );

  const todos = useSelector((state) => selectVisibleTodos(state));

  return (
    <ul>
      {todos.map((todo) => (
        <li
          key={todo.id}
          onClick={() => dispatch(toggleTodo(todo.id))}
          style={{
            textDecoration: todo.completed ? "line-through" : "none",
          }}
        >
          {todo.text}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
