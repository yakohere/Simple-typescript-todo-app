import React, { useState } from "react";

import { Todo } from "./todo.model";

import NewTodo from "./components/NewTodo";
import ToDoList from "./components/TodoList";

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const todoAddHandler = (text: string) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Math.random().toString(), text: text },
    ]);
  };

  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler} />
      <ToDoList items={todos} />
    </div>
  );
};

export default App;
