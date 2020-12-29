import React from "react";

import AddTodo from "./features/todos/Addtodo";
import TodoList from "./features/todos/todoList";
import FilterLink from "./features/filters/filterLink";
import { VisibilityFilters } from "./features/filters/filterSlice";

const App = () => (
  <div className="max-w-xl mx-auto mt-8 flex flex-col items-center">
    <AddTodo />
    <div className="flex space-x-3 mt-4">
      <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
      <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
      <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
    </div>
    <TodoList />
  </div>
);

export default App;
