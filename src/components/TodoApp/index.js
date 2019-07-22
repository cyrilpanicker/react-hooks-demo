import React from "react";
import { useTodoAppState } from "./hooks";

const TodoApp = () => {
  const { todos, filteredTodos, addTodo, toggleTodo, textInput, setTextInput, todosFilter, setTodosFilter, filterStatus } = useTodoAppState();
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
          <Filter value={filterStatus.ALL} text="All" />
          <Filter value={filterStatus.DONE} text="Done" />
          <Filter value={filterStatus.UNDONE} text="Undone" />
        </div>
      )}
      <div>
        {filteredTodos.map((todo) => <Todo key={todo.id} todo={todo} />)}
      </div>
    </form>
  );
};

export default TodoApp;