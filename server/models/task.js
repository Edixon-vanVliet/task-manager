import mongoose from "mongoose";
const ObjectId = mongoose.Schema.Types.ObjectId;

const TaskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  completed: {
    type: Boolean,
    default: false,
    required: true,
  },
});

export default mongoose.model("Task", TaskSchema);
