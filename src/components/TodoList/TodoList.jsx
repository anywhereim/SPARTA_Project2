import React, { useState } from "react";
import AddTodo from "../AddTodo/AddTodo";
import Todo from "../Todo/Todo";
import styles from "./TodoList.module.css";

export default function TodoList() {
  const [todos, setTodos] = useState([]);

  const handleAdd = (todo) => {
    setTodos([...todos, todo]);
  };
  const handleIsDone = (isdone) => {
    setTodos(todos.map((todo) => (todo.id === isdone.id ? isdone : todo)));
  };
  const handleDelete = (deleted) => {
    setTodos(todos.filter((todo) => todo.id !== deleted.id));
  };

  const working = todos.filter((todo) => todo.status === "working");
  const isdone = todos.filter((todo) => todo.status === "isDone");

  return (
    <section>
      <AddTodo onAdd={handleAdd} />
      <div className={styles.Form}>
        <div className={styles.Working}>
          <div>
            <h2>Working🔥</h2>
          </div>
          <ul>
            {working.map((todo) => (
              <Todo
                key={todo.id}
                todo={todo}
                onIsDone={handleIsDone}
                onDelete={handleDelete}
              />
            ))}
          </ul>
        </div>
        <div className={styles.IsDone}>
          <div>
            <h2>Done🎉</h2>
          </div>
          <ul>
            {isdone.map((todo) => (
              <Todo
                key={todo.id}
                todo={todo}
                onIsDone={handleIsDone}
                onDelete={handleDelete}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
