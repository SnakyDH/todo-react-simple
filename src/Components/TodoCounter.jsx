import React from "react";
import { TodoContext } from "../TodoContext";
function TodoCounter() {
  const { completedTodos, totalTodos } = React.useContext(TodoContext);
  return (
    <h2 className="bg-slate-700 text-white text-center font-sans">
      You completed {completedTodos} of {totalTodos} To Do`s
    </h2>
  );
}
export { TodoCounter };
