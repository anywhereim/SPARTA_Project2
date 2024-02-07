import React from "react";
// import "./index.css";
import TodoList from "../TodoList/TodoList";
import Head from "../Header/Head";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className="home">
      <Head first="Todo List" second="React" />
      <TodoList />
    </div>
  );
}
