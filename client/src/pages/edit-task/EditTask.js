import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Card } from "../../components/card/Card";
import { fetchTask, putTask, updateTask } from "../../store/slices/tasks.slice";

import styles from "./EditTask.module.css";

export const EditTask = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { task, response } = useSelector((state) => ({ task: state.tasks.current, response: state.tasks.response }));

  const handleChange = ({ target: { type, checked, value, name } }) => {
    dispatch(updateTask({ ...task, [name]: type === "checkbox" ? checked : value }));
  };

  const handleBack = () => {
    navigate("/");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(putTask(task));
  };

  useEffect(() => {
    dispatch(fetchTask(id));
  }, [dispatch, id]);

  return (
    <div className={styles.editTask}>
      <Card>
        <form onSubmit={handleSubmit}>
          <caption className={styles.title}>Edit Task</caption>
          <div className={styles.formGroup}>
            <label>Task ID</label>
            <p>{task._id}</p>
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
          <p className={styles.message} style={{ color: response.success ? "green" : "red" }}>
            {response.message}
          </p>
        </form>
      </Card>

      <button className={`${styles.backButton} secondary`} onClick={handleBack}>
        Back To Tasks
      </button>
    </div>
  );
};
