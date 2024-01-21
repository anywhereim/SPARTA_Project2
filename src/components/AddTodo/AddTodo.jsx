import React, { useState } from "react";
import styles from "./AddTodo.module.css";

import { v4 as uuidv4 } from "uuid";
import Input from "../Input/Input";

export default function AddTodo({ onAdd }) {
  const [title, setTitle] = useState("");
  const [content, setcontent] = useState("");

  const handleChangeTitle = (e) => setTitle(e.target.value);
  const handleChangeContent = (e) => setcontent(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim().length === 0 || content.trim().length === 0) {
      return;
    }
    onAdd({
      id: uuidv4(),
      title,
      content,
      status: "working",
    });
    setTitle("");
    setcontent("");
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
        <button className={styles.Button}>Add</button>
      </form>
    </div>
  );
}
