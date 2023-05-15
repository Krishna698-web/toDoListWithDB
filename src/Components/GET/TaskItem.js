import React from "react";
import styles from "./DisplayTasks.module.css";

const TaskItem = ({ taskText }) => {
  return <div className={styles.task}>{taskText}</div>;
};

export default TaskItem;
