import React from "react";

function TodoItem(props) {
  /* const onComplete = () => {
    alert(`Completed task: ${props.text}`);
  }; */
  /* const onDelete = () => {
    alert(`Deleted task: ${props.text}`);
  }; */
  return (
    <li className="flex justify-between items-center bg-beige rounded-md my-3 ">
      <span
        className={`content-center rounded-md py-3 px-3 hover:bg-green-600 ${
          props.completed && "bg-green-600"
        }`}
        onClick={props.onComplete}
      >
        ✔
      </span>
      <p
        className={`selft-center rounded-md px-3 ${
          props.completed && "line-through"
        }`}
      >
        {props.text}
      </p>
      <span
        className="content-center rounded-md py-3 px-3 hover:bg-red-600"
        onClick={props.onDelete}
      >
        ✖️
      </span>
    </li>
  );
}

export { TodoItem };
