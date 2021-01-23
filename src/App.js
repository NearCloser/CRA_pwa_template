import React from "react";

import AddTodo from "./features/todos/Addtodo";
import TodoList from "./features/todos/todoList";
import FilterLink from "./features/filters/filterLink";
import { VisibilityFilters } from "./features/filters/filterSlice";

const App = () => {
  return (
    <div>
      <div className="mt-8 max-w-screen-md mx-auto">
        <AddTodo />
        <div className="flex items-center space-x-3 mt-4">
          <FilterLink filter={VisibilityFilters.SHOW_ALL}>All</FilterLink>
          <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
          <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink>
        </div>
      </div>
      <TodoList />
    </div>
  );
};

export default App;
