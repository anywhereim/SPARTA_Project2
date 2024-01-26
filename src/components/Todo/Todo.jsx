import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { IoIosCloudDone } from "react-icons/io";
import styles from "./Todo.module.css";

export default function Todo({ todo, onIsDone, onDelete }) {
  const handleIsDone = () => {
    const status = todo.status === "working" ? "isDone" : "working";
    onIsDone({ ...todo, status: status });
  };
  const handleDelete = () => onDelete(todo);
  return (
    <div>
      <div>
        <li className={styles.List}>
          <p>{todo.title}</p>
          <p>{todo.content}</p>
          <button className={styles.IconButton} onClick={handleIsDone}>
            <IoIosCloudDone className={styles.Icon} />
          </button>
          <button className={styles.IconButton} onClick={handleDelete}>
            <FaTrashAlt className={styles.Icon} />
          </button>
        </li>
      </div>
    </div>
  );
}
