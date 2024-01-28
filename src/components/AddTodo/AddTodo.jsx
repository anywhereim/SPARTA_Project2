import React, { useState } from "react";
import styles from "./AddTodo.module.css";

import { v4 as uuidv4 } from "uuid";
import Input from "../Input/Input";

export default function AddTodo({ onAdd }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [date, setDate] = useState("");

  const today = new Date();

  const handleChangeTitle = (e) => setTitle(e.target.value);
  const handleChangeContent = (e) => setContent(e.target.value);
  const handleChangeDate = (e) => setDate(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      title.trim().length === 0 ||
      content.trim().length === 0 ||
      date.trim().length === 0
    ) {
      alert("제목, 날짜, 마감기한을 모두 작성해주세요");
      return;
    }
    onAdd({
      id: uuidv4(),
      title,
      content,
      date,
      today,
      status: "working",
    });
    setTitle("");
    setContent("");
    setDate("");
  };

  return (
    <div className={styles.AddTodo}>
      <form className={styles.Input} onSubmit={handleSubmit}>
        <p className={styles.P}>제목 </p>
        <Input
          type="text"
          placeholder="제목을 입력해주세요"
          value={title}
          onChange={handleChangeTitle}
        />
        <p className={styles.P2}>내용 </p>
        <Input
          type="text"
          placeholder="내용을 입력해주세요"
          value={content}
          onChange={handleChangeContent}
        />
        <p className={styles.P2}> 마감기한 </p>
        <Input
          type="date" //
          value={date}
          onChange={handleChangeDate}
        />
        <button className={styles.Button}>Add</button>
      </form>
    </div>
  );
}
