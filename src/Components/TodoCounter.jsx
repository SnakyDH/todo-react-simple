import React from "react";

function TodoCounter({ completed, total }) {
  return (
    <h2 className="bg-slate-700 text-white text-center font-sans">
      You completed {completed} of {total} To Do`s
    </h2>
  );
}
export { TodoCounter };
