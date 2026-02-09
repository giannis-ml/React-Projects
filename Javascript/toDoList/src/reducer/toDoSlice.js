import { createSlice } from "@reduxjs/toolkit";

const toDoSlice = createSlice({
  name: "todo",
  initialState: {
    tasks: [],
  },
  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },
    deleteTask: (state, action) => {
      state.tasks.splice(action.payload, 1);
    },
  },
});

export const { addTask, deleteTask } = toDoSlice.actions;
export default toDoSlice.reducer;
