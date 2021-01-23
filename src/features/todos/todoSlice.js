import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const todosSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: {
      reducer(state, action) {
        const { text } = action.payload;

        state.push({ id: uuidv4(), text, completed: false, editing: false, show: false });
      },
      prepare(text) {
        return { payload: { text } };
      },
    },
    toggleTodo(state, action) {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) todo.completed = !todo.completed;
    },
    toggleEdit(state, action) {
      state.forEach((todo) => {
        if (todo.id === action.payload) todo.editing = !todo.editing;
        else if (todo.editing) todo.editing = false;
      });
    },
    allSet(state, action) {
      state.forEach((todo) => {
        if (todo.editing) todo.editing = false;
      });
    },
    deleteTodo(state, action) {
      return state.filter((todo) => todo.id !== action.payload);
    },
    editTodo: {
      reducer(state, action) {
        const { text, id } = action.payload;

        const todo = state.find((todo) => todo.id === id);
        if (todo) todo.text = text;
      },
      prepare(text, id) {
        return { payload: { text, id } };
      },
    },
    toggleShow(state, action) {
      state.forEach((todo) => {
        if (todo.id === action.payload) todo.show = !todo.show;
        // else if (todo.show) todo.show = false;
      });
    },
  },
});

export const {
  addTodo,
  toggleTodo,
  toggleEdit,
  deleteTodo,
  editTodo,
  allSet,
  toggleShow,
} = todosSlice.actions;

export default todosSlice.reducer;
