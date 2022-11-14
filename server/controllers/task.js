let tasks = [{ id: 1, name: "Pepe", completed: false }];
let currentId = 1;

export const getTasks = (req, res) => {
  res.json({ count: tasks.length, data: tasks, success: true });
};

export const getTask = (req, res) => {
  const id = parseInt(req.params.id);
  const task = tasks.find((task) => task.id === id);

  if (!task) {
    return res.status(404).json({ message: "Task not found", success: false });
  }

  res.json({ data: task, success: true });
};

export const addTask = (req, res) => {
  const task = { ...req.body, id: ++currentId };

  try {
    tasks.push(task);
    res
      .status(201)
      .location(`/tasks/${task.id}`)
      .json({ message: "Task created successfully", data: task, success: true });
  } catch (err) {
    res.status(500).json({ message: err.message, success: false });
  }
};

export const updateTask = (req, res) => {
  const id = parseInt(req.params.id);
  const updatedTask = {
    id,
    name: req.body.name,
    completed: req.body.completed,
  };

  if (!tasks.find((task) => task.id === id)) {
    return res.status(404).json({ message: "Task not found", success: false });
  }

  tasks = tasks.map((task) => {
    if (task.id === id) {
      return updatedTask;
    }

    return task;
  });

  res.json({ message: "Task updated successfully", data: updatedTask, success: true });
};

export const removeTask = (req, res) => {
  const id = parseInt(req.params.id);

  if (!tasks.find((task) => task.id === id)) {
    return res.status(404).json({ message: "Task not found", success: false });
  }

  tasks = tasks.filter((task) => task.id !== id);

  res.status(200).json({ success: true, data: id, message: "Task deleted successfully" });
};
