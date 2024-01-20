import React, { useState } from "react";

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
    <div className="AddTodo">
      <form className="Input" onSubmit={handleSubmit}>
        <p className="P">제목 </p>
        <Input
          type="text"
          placeholder="제목을 입력해주세요"
          value={title}
          onChange={handleChangeTitle}
        />
        <p className="P">내용 </p>
        <Input
          type="text"
          placeholder="내용을 입력해주세요"
          value={content}
          onChange={handleChangeContent}
        />
        <button className="Button">Add</button>
      </form>
    </div>
  );
}
