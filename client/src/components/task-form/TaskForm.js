import { Card } from "../card/Card";
import styles from "./TaskForm.module.css";

export const TaskForm = () => (
  <Card>
    <form className={styles.form}>
      <caption className={styles.title}>Task Manager</caption>
      <div className={styles.controls}>
        <input className={styles.input} type="text" placeholder="e.g. wash dishes" />
        <button className={`${styles.button} primary`}>Submit</button>
      </div>
    </form>
  </Card>
);
