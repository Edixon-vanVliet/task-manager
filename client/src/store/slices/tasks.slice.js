import { createSlice } from "@reduxjs/toolkit";

let currentId = 0;

const tasksSlice = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {
    addTask: (state, { payload: name }) => [...state, { name, id: ++currentId, completed: false }],
    updateTask: (state, { payload: updatedTask }) => [
      ...state.map((task) => {
        if (task.id === updatedTask.id) {
          return updatedTask;
        }

        return task;
      }),
    ],
    removeTask: (state, { payload: id }) => state.filter((task) => task.id !== id),
  },
});

export const { addTask, updateTask, removeTask } = tasksSlice.actions;
export default tasksSlice.reducer;
