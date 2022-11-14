import { useDispatch, useSelector } from "react-redux";
import { postTask, updateTask } from "../../store/slices/tasks.slice";
import { Card } from "../card/Card";
import styles from "./TaskForm.module.css";

export const TaskForm = () => {
  const dispatch = useDispatch();
  const task = useSelector((state) => state.tasks.current);

  const handleChange = ({ target: { value: name } }) => {
    dispatch(updateTask({ ...task, name }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(postTask(task));
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
            value={task.name}
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
