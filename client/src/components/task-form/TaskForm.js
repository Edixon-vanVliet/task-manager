import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../store/slices/tasks.slice";
import { Card } from "../card/Card";
import styles from "./TaskForm.module.css";

export const TaskForm = () => {
  const dispatch = useDispatch();
  const [task, setTask] = useState("");

  const handleChange = ({ target: { value } }) => {
    setTask(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(addTask(task));
    setTask("");
  };
  return (
    <Card>
      <form className={styles.form} onSubmit={handleSubmit}>
        <caption className={styles.title}>Task Manager</caption>
        <div className={styles.controls}>
          <input
            className={styles.input}
            type="text"
            name="task"
            placeholder="e.g. wash dishes"
            value={task}
            onChange={handleChange}
          />
          <button type="submit" className={`${styles.button} primary`}>
            Submit
          </button>
        </div>
      </form>
    </Card>
  );
};
