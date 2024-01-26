import React from "react";
import "./index.css";
import TodoList from "./components/TodoList/TodoList";
import Head from "./components/Header/Head";

export default function Home() {
  return (
    <div className="home">
      <Head first="Todo List" second="React" />
      <TodoList />
    </div>
  );
}
