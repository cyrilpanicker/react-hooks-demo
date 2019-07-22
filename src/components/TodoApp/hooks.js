import { useState } from "react";

const useTodoApp = () => {
  const [textInput, setTextInput] = useState("");
  const [id, setId] = useState(1);
  const [todos, setTodos] = useState([]);
  const [todosFilter, setTodosFilter] = useState("ALL");
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
  return { todos, addTodo, toggleTodo, textInput, setTextInput, todosFilter, setTodosFilter };
};

export { useTodoApp };