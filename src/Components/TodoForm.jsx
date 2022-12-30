import React from "react";
import { TodoContext } from "../TodoContext";

function TodoForm() {
  const [newTodoValue, setNewTodoValue] = React.useState("");
  const { addTodo, setOpenModal } = React.useContext(TodoContext);

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };
  const onCancel = () => {
    setOpenModal(false);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue);
    setTimeout(() => {
      setOpenModal(false);
    }, 300);
  };
  return (
    <div className="bg-gradient-to-r from-emerald-600 to-emerald-400 rounded-lg">
      <form className="bg-slate-700 m-1 p-5 rounded-lg" onSubmit={onSubmit}>
        <div className="flex flex-col">
          <label className="text-white text-center">Write your task</label>
          <textarea
            className="my-3"
            value={newTodoValue}
            onChange={onChange}
            placeholder="Your Task"
          />
        </div>
        <div className="flex justify-between">
          <button
            className="bg-red-600 p-2 rounded-lg text-white"
            type="button"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button
            className="bg-green-600 p-2 rounded-lg text-white"
            type="submit"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
export { TodoForm };
