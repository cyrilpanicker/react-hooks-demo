import React from "react";
import { useTodoApp } from "./hooks";

const TodoApp = () => {
  const { todos, addTodo, toggleTodo, textInput, setTextInput, todosFilter, setTodosFilter } = useTodoApp();
  let filter = null;
  if (todosFilter === "DONE") {
    filter = todo => todo.done;
  } else if (todosFilter === "UNDONE") {
    filter = todo => !todo.done;
  } else {
    filter = () => true;
  }
  const Filter = ({ value, text }) => (
    <label>
      <input type="radio" checked={todosFilter === value} onChange={() => setTodosFilter(value)} />
      <span>{text}</span>
    </label>
  );
  const Todo = ({ todo: { id, text, done } }) => (
    <div>
      <span style={{ ...(!done ? {} : { textDecoration: "line-through" }) }} >{text}</span>
      <button type="button" onClick={() => toggleTodo(id)}>{done ? "Undo" : "Done"}</button>
    </div>
  );
  return (
    <form >
      <div>
        <input value={textInput} onChange={(event) => setTextInput(event.target.value)} />
        <button onClick={(event) => { event.preventDefault(); addTodo(); }} >Add</button>
      </div>
      {!!todos.length && (
        <div>
          <Filter value="ALL" text="All" />
          <Filter value="DONE" text="Done" />
          <Filter value="UNDONE" text="Undone" />
        </div>
      )}
      <div>
        {todos.filter(filter).map((todo) => <Todo key={todo.id} todo={todo} />)}
      </div>
    </form>
  );
};

export default TodoApp;