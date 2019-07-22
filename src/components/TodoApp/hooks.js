import { useState } from "react";

const useTodoAppState = () => {
  const filterStatus = { ALL: "ALL", DONE: "DONE", UNDONE: "UNDONE" };
  const [textInput, setTextInput] = useState("");
  const [id, setId] = useState(1);
  const [todos, setTodos] = useState([]);
  const [todosFilter, setTodosFilter] = useState(filterStatus.ALL);
  const addTodo = () => {
    if (!textInput) return;
    setTodos([...todos, { id, text: textInput, done: false }]);
    setId(id + 1);
    setTextInput("");
  };
  const toggleTodo = (id) => {
    setTodos(todos.map(todo => {
      if (todo.id !== id) return todo;
      return { ...todo, done: !todo.done };
    }));
  };
  let filter = null;
  if (todosFilter === filterStatus.DONE) {
    filter = todo => todo.done;
  } else if (todosFilter === filterStatus.UNDONE) {
    filter = todo => !todo.done;
  } else {
    filter = () => true;
  }
  const filteredTodos = todos.filter(filter);
  return { todos, filteredTodos, addTodo, toggleTodo, textInput, setTextInput, todosFilter, setTodosFilter, filterStatus };
};

export { useTodoAppState };