import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./slices/tasks.slice";

export const store = configureStore({
  reducer: { tasks: taskReducer },
});
