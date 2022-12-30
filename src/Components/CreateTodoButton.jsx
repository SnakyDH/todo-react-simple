import React from "react";

function CreateTodoButton() {
  const onClickButton = (msg) => {
    alert(msg);
  };
  return (
    <button
      className="bg-emerald-700  text-white px-5 my-4 rounded-lg absolute bottom-0 right-0"
      onClick={() => onClickButton("Modal Here")}
    >
      ➕
    </button>
  );
}
export { CreateTodoButton };
