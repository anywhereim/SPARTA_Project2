import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import { useParams } from "react-router-dom";
import styles from "./DetailPage.module.css";

export default function DetailPage() {
  const { todos } = useContext(TodoContext);
  const { id } = useParams();

  const todo = todos.find((todo) => todo.id === id);

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
    <form className={styles.DetailForm}>
      <div className={styles.DetailBox}>
        <section>
          <p>제목: {todo.title}</p>
          <p>내용: {todo.content}</p>
          <p>{gapday()}</p>
          {/* <div>{gapday}</div> */}
        </section>
        <section className={styles.SideDetailBox}>
          <time className={styles.SideDetail}>작성일자: {todo.date}</time>
          {/* {today ? <time>{today}</time> : none} */}
          <div className={styles.SideDetail}>상태: {todo.status}</div>
        </section>
      </div>
    </form>
  );
}
