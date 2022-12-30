import React from "react";

function CreateTodoButton({ setOpenModal }) {
  const onClickButton = () => {
    setOpenModal((prevState) => !prevState);
  };
  return (
    <button
      className="bg-emerald-700  text-white py-3 px-3 my-4 rounded-lg fixed bottom-0 right-10 z-10"
      onClick={() => onClickButton()}
    >
      ➕
    </button>
  );
}
export { CreateTodoButton };
