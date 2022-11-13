import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Card } from "../../components/card/Card";
import { updateTask } from "../../store/slices/tasks.slice";

import styles from "./EditTask.module.css";

export const EditTask = () => {
  const { id } = useParams();
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [task, setTask] = useState(
    tasks.find((task) => task.id === parseInt(id)) || { id: 0, name: "", completed: false }
  );

  const handleChange = ({ target: { type, checked, value, name } }) => {
    setTask({ ...task, [name]: type === "checkbox" ? checked : value });
  };

  const handleBack = () => {
    navigate("/");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(updateTask(task));
    handleBack();
  };

  return (
    <div className={styles.editTask}>
      <Card>
        <form onSubmit={handleSubmit}>
          <caption className={styles.title}>Edit Task</caption>
          <div className={styles.formGroup}>
            <label>Task ID</label>
            <p>{task.id}</p>
          </div>
          <div className={styles.formGroup}>
            <label>Name</label>
            <input type="text" name="name" value={task.name} onChange={handleChange} />
          </div>
          <div className={styles.formGroup}>
            <label>Completed</label>
            <div>
              <input type="checkbox" name="completed" checked={task.completed} onChange={handleChange} />
            </div>
          </div>
          <button className="primary">Edit</button>
        </form>
      </Card>

      <button className={`${styles.backButton} secondary`} onClick={handleBack}>
        Back To Tasks
      </button>
    </div>
  );
};
