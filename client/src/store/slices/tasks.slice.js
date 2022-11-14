import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  current: {
    _id: 0,
    name: "",
    completed: false,
  },
  response: { success: false, message: "" },
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    updateTask: (state, { payload: updatedTask }) => {
      state.current = updatedTask;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTasks.fulfilled, (state, { payload: { data: tasks, success } }) => {
      state.current = initialState.current;
      state.data = tasks;
      state.response = {
        message: "",
        success,
      };
    });
    builder.addCase(fetchTask.fulfilled, (state, { payload: { message, success, data: task } }) => {
      state.current = task || initialState.current;
      state.response = {
        message,
        success,
      };
    });
    builder.addCase(postTask.fulfilled, (state, { payload: task }) => {
      state.data.push(task);
      state.current = initialState.current;
    });
    builder.addCase(putTask.pending, (state) => {
      state.response = initialState.response;
    });
    builder.addCase(putTask.fulfilled, (state, { payload: { message, success, data: updatedTask } }) => {
      state.data = state.data.map((task) => {
        if (task._id === updatedTask._id) {
          return updatedTask;
        }

        return task;
      });

      state.response = {
        message,
        success,
      };
    });
    builder.addCase(deleteTask.fulfilled, (state, { payload: { data: _id, message, success } }) => {
      state.data = state.data.filter((task) => task._id !== _id);
      state.response = {
        message,
        success,
      };
    });
  },
});

export const fetchTasks = createAsyncThunk("tasks/fetchAll", async (_, thunkAPI) => {
  try {
    const response = await fetch("/tasks");

    return await response.json();
  } catch (error) {
    console.error(error);
  }
});

export const fetchTask = createAsyncThunk("tasks/fetchOne", async (_id, thunkAPI) => {
  try {
    const response = await fetch(`/tasks/${_id}`);

    return await response.json();
  } catch (error) {
    console.error(error);
  }
});

export const postTask = createAsyncThunk("tasks/post", async (task) => {
  try {
    const response = await fetch(`/tasks`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });

    const { data } = await response.json();

    return data;
  } catch (error) {
    console.error(error);
  }
});

export const putTask = createAsyncThunk("tasks/put", async (task) => {
  try {
    const response = await fetch(`/tasks/${task._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });

    return await response.json();
  } catch (error) {
    console.error(error);
  }
});

export const deleteTask = createAsyncThunk("tasks/delete", async (_id) => {
  try {
    const response = await fetch(`/tasks/${_id}`, { method: "DELETE" });

    return await response.json();
  } catch (error) {
    console.error(error);
  }
});

export const { updateTask } = tasksSlice.actions;
export default tasksSlice.reducer;
