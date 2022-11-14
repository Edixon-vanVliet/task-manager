import Task from "../models/task.js";

export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();

    res.json({
      count: tasks.length,
      data: tasks.map(({ _id, name, completed }) => ({ _id, name, completed })),
      success: true,
    });
  } catch (error) {
    res.status(500).json({ message: error.message, success: false });
  }
};

export const getTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      return res.status(404).json({ message: "Task not found", success: false });
    }

    res.json({ data: { _id: task._id, name: task.name, completed: task.completed }, success: true });
  } catch (error) {
    res.status(500).json({ message: error.message, success: false });
  }
};

export const addTask = async (req, res) => {
  try {
    const { name, completed } = req.body;
    const { _id } = await Task.create({ name, completed });

    res
      .status(201)
      .location(`/tasks/${_id}`)
      .json({ message: "Task created successfully", data: { _id, name, completed }, success: true });
  } catch (error) {
    res.status(500).json({ message: error.message, success: false });
  }
};

export const updateTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!task) {
      return res.status(404).json({ message: "Task not found", success: false });
    }

    res.json({
      message: "Task updated successfully",
      data: { _id: task._id, name: task.name, completed: task.completed },
      success: true,
    });
  } catch (error) {
    res.status(500).json({ message: error.message, success: false });
  }
};

export const removeTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByIdAndDelete(id);

    if (!task) {
      return res.status(404).json({ message: "Task not found", success: false });
    }

    res.status(200).json({ success: true, data: id, message: "Task deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message, success: false });
  }
};
