import React from "react";

import AddTodo from "./features/todos/Addtodo";
import TodoList from "./features/todos/todoList";
import FilterLink from "./features/filters/filterLink";
import { VisibilityFilters } from "./features/filters/filterSlice";

const App = () => (
  <div>
    <AddTodo />
    <TodoList />
    <span>Show: </span>
    <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
    <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
  </div>
);

export default App;
