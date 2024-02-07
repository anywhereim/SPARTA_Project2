import { createContext, useState } from "react";

export const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [sortOrder, setSortOrder] = useState(null);

  const handleIsDone = (isdone) => {
    setTodos(todos.map((todo) => (todo.id === isdone.id ? isdone : todo)));
  };

  const handleAdd = (todo) => {
    setTodos([...todos, todo]);
  };

  const handleDelete = (deleted) => {
    setTodos(todos.filter((todo) => todo.id !== deleted.id));
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        setTodos,
        sortOrder,
        setSortOrder,
        handleAdd,
        handleDelete,
        handleIsDone,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
