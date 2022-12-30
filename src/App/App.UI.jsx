import React from "react";
import { TodoCounter } from "../Components/TodoCounter";
import { TodoSearch } from "../Components/TodoSearch";
import { TodoList } from "../Components/TodoList";
import { TodoItem } from "../Components/TodoItem";
import { TodoHeader } from "../Components/TodoHeader";
import { CreateTodoButton } from "../Components/CreateTodoButton";
import { TodoContext } from "../TodoContext";
import { Modal } from "../modal";
import { TodoForm } from "../Components/TodoForm";
import { Error } from "../Components/Error";
import { Loading } from "../Components/Loading";

function AppUI() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);
  return (
    <>
      <TodoHeader />
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {error && <Error />}
        {loading && <Loading />}
        {!loading && !searchedTodos.length && <p>Crea tu primer todo!</p>}
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => {
              completeTodo(todo.text);
            }}
            onDelete={() => {
              deleteTodo(todo.text);
            }}
          />
        ))}
      </TodoList>
      {!!openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
      <CreateTodoButton setOpenModal={setOpenModal} />
    </>
  );
}
export { AppUI };
