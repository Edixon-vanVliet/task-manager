import { useNavigate } from "react-router-dom";
import { Card } from "../../components/card/Card";

import styles from "./EditTask.module.css";

export const EditTask = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className={styles.editTask}>
      <Card>
        <form>
          <caption className={styles.title}>Edit Task</caption>
          <div className={styles.formGroup}>
            <label>Task ID</label>
            <p>60c63fb8a14286039c87fa57</p>
          </div>
          <div className={styles.formGroup}>
            <label>Name</label>
            <input type="text" value="Walk The Cat" />
          </div>
          <div className={styles.formGroup}>
            <label>Completed</label>
            <div>
              <input type="checkbox" name="completed" />
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
