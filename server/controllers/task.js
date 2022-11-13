let tasks = [];
let currentId = 0;

export const getTasks = (req, res) => {
  res.json({ count: tasks.length, data: tasks });
};

export const getTask = (req, res) => {
  const id = parseInt(req.params.id);
  const task = tasks.find((task) => task.id === id);

  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }

  res.json(task);
};

export const addTask = (req, res) => {
  const task = { ...req.body, id: ++currentId };

  try {
    tasks.push(task);
    res.status(201).location(`/tasks/${task.id}`).json({ message: "Task created successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
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
    return res.status(404).json({ message: "Task not found" });
  }

  tasks = tasks.map((task) => {
    if (task.id === id) {
      return updatedTask;
    }

    return task;
  });

  res.json(updatedTask);
};

export const removeTask = (req, res) => {
  const id = parseInt(req.params.id);

  if (!tasks.find((task) => task.id === id)) {
    return res.status(404).json({ message: "Task not found" });
  }

  tasks = tasks.filter((task) => task.id !== id);

  res.status(204).json();
};
