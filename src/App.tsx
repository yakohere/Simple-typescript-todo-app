import React from "react";

import NewTodo from "./components/NewTodo";
import ToDoList from "./components/TodoList";

const App: React.FC = () => {
  const todos = [{ id: "t1", text: "Finish the course!" }];

  const todoAddHandler = (text: string) => {
    console.log(text);
  };

  return (
    <div className="App">
      <NewTodo onAddTodo={todoAddHandler} />
      <ToDoList items={todos} />
    </div>
  );
};

export default App;
