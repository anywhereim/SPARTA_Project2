import React, { useState } from "react";
import AddTodo from "../AddTodo/AddTodo";
import Todo from "../Todo/Todo";
import styles from "./TodoList.module.css";
import { FaSortNumericDown, FaSortNumericUp } from "react-icons/fa";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [sortOrder, setSortOrder] = useState(null);

  const handleAdd = (todo) => {
    setTodos([...todos, todo]);
  };

  const handleIsDone = (isdone) => {
    setTodos(todos.map((todo) => (todo.id === isdone.id ? isdone : todo)));
  };
  const handleDelete = (deleted) => {
    setTodos(todos.filter((todo) => todo.id !== deleted.id));
  };

  const handleSortOrder = () => {
    if (sortOrder === "123") {
      setTodos([...todos].sort((a, b) => new Date(b.date) - new Date(a.date)));
      setSortOrder("321");
    } else {
      setTodos([...todos].sort((a, b) => new Date(a.date) - new Date(b.date)));
      setSortOrder("123");
    }
  };

  const working = todos.filter((todo) => todo.status === "working");
  const isdone = todos.filter((todo) => todo.status === "isDone");
  return (
    <section>
      <AddTodo onAdd={handleAdd} />
      <div className={styles.Form}>
        <div className={styles.Working}>
          <div className={styles.WorkingHeader}>
            <div>
              <h2>Working🔥</h2>
            </div>
            <div className={styles.Buttons}>
              <button onClick={handleSortOrder} className={styles.Ascending}>
                {sortOrder === "123" ? (
                  <FaSortNumericUp />
                ) : (
                  <FaSortNumericDown />
                )}
              </button>
            </div>
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
