import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { IoIosCloudDone } from "react-icons/io";

export default function Todo({ todo, onIsDone, onDelete }) {
  const handleIsDone = (e) => {
    const status = todo.status === "working" ? "isDone" : "working";
    onIsDone({ ...todo, status: status });
  };
  const handleDelete = () => onDelete(todo);
  return (
    <div>
      <div>
        <li className="List">
          <p>{todo.title}</p>
          <p>{todo.content}</p>
          <button className="IconButton" onClick={handleIsDone}>
            <IoIosCloudDone className="Icon" />
          </button>
          <button className="IconButton" onClick={handleDelete}>
            <FaTrashAlt className="Icon" />
          </button>
        </li>
      </div>
    </div>
  );
}
