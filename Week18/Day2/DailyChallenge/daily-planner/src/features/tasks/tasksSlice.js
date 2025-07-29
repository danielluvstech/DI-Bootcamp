import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasksByDate: {} // will hold tasks like { "2025-07-29": [ { id, text } ] }
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      const { date, task } = action.payload;
      if (!state.tasksByDate[date]) state.tasksByDate[date] = [];
      state.tasksByDate[date].push({ id: Date.now(), text: task });
    },
    editTask: (state, action) => {
      const { date, id, newText } = action.payload;
      const task = state.tasksByDate[date]?.find((t) => t.id === id);
      if (task) task.text = newText;
    },
    deleteTask: (state, action) => {
      const { date, id } = action.payload;
      if (state.tasksByDate[date]) {
        state.tasksByDate[date] = state.tasksByDate[date].filter((t) => t.id !== id);
      }
    },
  },
});

export const { addTask, editTask, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;