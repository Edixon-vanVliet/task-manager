import { TaskForm } from "../../components/task-form/TaskForm";
import { TaskList } from "../../components/task-list/TaskList";

import styles from "./Home.module.css";

export const Home = () => {
  return (
    <div className={styles.home}>
      <TaskForm />

      <br />

      <TaskList />
    </div>
  );
};
