import { combineReducers } from "redux";
import todosReducer from "../features/todos/todoSlice";
import visibilityFilterReducer from "../features/filters/filterSlice";

const RootReducer = combineReducers({
  todos: todosReducer,
  visibilityFilter: visibilityFilterReducer,
});

export default RootReducer;
