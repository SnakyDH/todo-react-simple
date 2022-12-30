import React from "react";

function TodoList(props) {
  return (
    <section>
      <ul className="list-none">{props.children}</ul>
    </section>
  );
}

export { TodoList };
