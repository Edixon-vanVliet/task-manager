import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";
import { Card } from "../card/Card";
import { removeTask } from "../../store/slices/tasks.slice";

import styles from "./TaskList.module.css";

export const TaskList = () => {
  const navigate = useNavigate();
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleEdit = (id) => {
    navigate(`/task/${id}`);
  };

  const handleRemove = (id) => {
    dispatch(removeTask(id));
  };
  return (
    <>
      {tasks.map((task) => (
        <Card key={task.id}>
          <div className={styles.task}>
            {task.completed ? (
              <div className={styles.title}>
                <FontAwesomeIcon
                  className={styles.button}
                  title="edit"
                  icon={faCircleCheck}
                  color="#2c5336"
                  onClick={() => handleEdit(task.id)}
                />
                &nbsp;&nbsp;&nbsp;&nbsp;
                <p style={{ textDecoration: task.completed && "line-through" }}>{task.name}</p>
              </div>
            ) : (
              <p>{task.name}</p>
            )}
            <div className={styles.controls}>
              <FontAwesomeIcon
                className={styles.button}
                title="edit"
                icon={faEdit}
                color="#2c5336"
                onClick={() => handleEdit(task.id)}
              />
              <FontAwesomeIcon
                className={styles.button}
                title="remove"
                icon={faTrash}
                color="#6d021d"
                onClick={() => handleRemove(task.id)}
              />
            </div>
          </div>
        </Card>
      ))}
    </>
  );
};
