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

  const planDate = new Date(todo.date);
  planDate.setHours(0, 0, 0, 0);

  const nowDate = todo.today;
  nowDate.setHours(0, 0, 0, 0);

  const gapTime = planDate.getTime() - nowDate.getTime();

  const doneDate = () => {
    const done = new Date();
    const year = done.getFullYear();
    const month = ("0" + (1 + done.getMonth())).slice(-2);
    const date = ("0" + done.getDate()).slice(-2);
    return `${year} .${month} .${date}`;
  };

  const gapday = () => {
    const gap = Math.ceil(gapTime / (1000 * 3600 * 24));
    if (todo.status === "isDone") {
      return `${doneDate()} 완료`;
    } else if (gapTime < 0) {
      return "🚨 마감기한이 지났습니다 🚨";
    }
    return gap === 0 ? "⚠️ 마감기한이 오늘까지입니다 ⚠️" : `D-day ${gap}`;
  };

  return (
    <li>
      <div className={styles.ListAll}>
        <div className={styles.List}>
          <p className={styles.title}>{todo.title}</p>
          <p>{todo.content}</p>
          <p className={styles.Date}>{todo.date}</p>
          <p className={styles.GapDay}>{gapday()}</p>
        </div>
        <div className={styles.Buttons}>
          <button className={styles.IconButton} onClick={handleIsDone}>
            <IoIosCloudDone className={styles.Icon} />
          </button>
          <button className={styles.IconButton} onClick={handleDelete}>
            <FaTrashAlt className={styles.Icon} />
          </button>
        </div>
      </div>
    </li>
  );
}
