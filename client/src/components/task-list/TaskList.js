import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Card } from "../card/Card";

import styles from "./TaskList.module.css";

export const TaskList = () => {
  const navigate = useNavigate();

  const handleEdit = (id) => {
    navigate(`/task/${id}`);
  };

  return (
    <Card>
      <div className={styles.task}>
        <p>Walk The Cat</p>
        <div className={styles.controls}>
          <FontAwesomeIcon
            className={styles.button}
            title="edit"
            icon={faEdit}
            color="#2c5336"
            onClick={() => handleEdit(1)}
          />
          <FontAwesomeIcon className={styles.button} title="remove" icon={faTrash} color="#6d021d" />
        </div>
      </div>
    </Card>
  );
};
